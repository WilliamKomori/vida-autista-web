import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { JornadaService } from '../service/jornada.service';
import { Jornada } from '../model/Jornada';
import { AnotacoesService } from '../service/anotacoes.service';
import { Notes } from '../model/Notes';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  faseFinalizadaSelect!: number;
  nomeClasse!: string;
  now = new Date();
  idFase! : number;
  _observacoes! : string;
  usuario!: Usuario;
  _jornadas!: Jornada[];
  jornadas!: Jornada[];
  currentUser! : string;
  cadastroForm!: FormGroup;

  constructor(
    public router: Router, 
    public srv: UsuarioService, 
    public jsrv: JornadaService, 
    public nsrv: AnotacoesService,
    private toastr: ToastrService,
    private fb: FormBuilder 
    ) { }

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
        this.toastr.error("Erro ao carregar informações do usuario");
      });

  }else{
    this.router.navigate(['/home']);
    this.toastr.error("Você Precisa estar conectado para acessar essa página!")
    console.log(localStorage.getItem);
  }

  this.criarFormulario();

  }

  criarFormulario(){
    this.cadastroForm = this.fb.group({
      observacao: [''],
      dataDaObservacao: [''],
      fase: ['']
    })
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

    const param = new Notes;
    const observacao = this.cadastroForm.get('observacao')?.value;
    const data = this.cadastroForm.get('dataDaObservacao')?.value;
    const fase = this.cadastroForm.get('fase')?.value;

    if(fase == 2){
      this.nota.faseFinalizada = true;
      this.nomeClasse = "active"
    }
    else{
      this.nota.faseFinalizada = false;
      this.nomeClasse = ""
    }

    param.observacao = observacao;
    param.dataObservacao = data;
    param.idFase = this.idFase;
    param.faseFinalizada = this.nota.faseFinalizada;
    param.idUsuario = this.usuario.idUsuario;

    this.nsrv.inserirAnotacao(param).subscribe(
      res =>{
        this.toastr.success("Anotação Inserida com Sucesso!");
        this.cadastroForm.reset();
        this.listarJornada(this.usuario.idUsuario);
      },
      err=>{
        this.toastr.error("Erro ao inserir");
      }
    )
  }



}


