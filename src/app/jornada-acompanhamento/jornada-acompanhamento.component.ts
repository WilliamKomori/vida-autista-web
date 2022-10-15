import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { JornadaService } from '../service/jornada.service';
import { Jornada } from '../model/Jornada';
import { AnotacoesService } from '../service/anotacoes.service';
import { Notes } from '../model/Notes';

@Component({
  selector: 'app-jornada-acompanhamento',
  templateUrl: './jornada-acompanhamento.component.html',
  styleUrls: ['./jornada-acompanhamento.component.scss'],
  providers: [Globals]
})
export class JornadaAcompanhamentoComponent implements OnInit {

  public nota: Notes = new Notes();
  observacao!: string;
  dataObservacao!: string;
  faseFinalizada!: boolean;
  now = new Date();
  idFase! : number;
  _observacoes! : string;
  usuario!: Usuario;
  _jornadas!: Jornada[];
  jornadas!: Jornada[];
  currentUser! : string;


  constructor(public router: Router, public srv: UsuarioService, public jsrv: JornadaService, public nsrv: AnotacoesService) { }

  ngOnInit() {

    if(localStorage.getItem("MyToken")){

      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
              this.listarJornada(this.usuario.idUsuario);
        },
      err => {
        console.log(err);
        alert("Erro ao carregar informações do usuario");
      });

  }else{
    this.router.navigate(['/home']);
    alert("Você Precisa estar conectado para acessar essa página!")
    console.log(localStorage.getItem);
  }

  }

  listarJornada(id: number){
    this._jornadas == null;
    this.jsrv.getJornadaByIdUser(id).subscribe((res: any) => this.jornadas = res);
  }

  criaBloco(id: number){
      this.idFase = id;
      this._observacoes = "ativar";
      console.log(""+this.idFase);
  }

  insereAnotacao(){
    this.nota.observacao = this.observacao;
    this.nota.dataObservacao = this.dataObservacao;
    this.nota.faseFinalizada =  true;
    this.nota.idFase = this.idFase;
    this.nota.idUsuario = this.usuario.idUsuario;
    this.nsrv.inserirAnotacao(this.nota).subscribe(
      res =>{
        alert("Anotação Inserida com Sucesso!");
        window.location.reload();
      },
      err=>{
        console.log(err);
        alert("Erro ao inserir");
      }
    )
  }

}


