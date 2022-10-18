import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { AnotacoesService } from '../service/anotacoes.service';
import { Notes } from '../model/Notes';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.scss'],
  providers: [Globals]
})
export class AnotacoesComponent implements OnInit {

  idFase! : number;
  selectedJornada! : number;
  _observacoes!: Notes[];
  observacoes!: Notes[];
  usuario!: Usuario;
  currentUser! : string;

  constructor(public router: Router, public srv: UsuarioService, public nsrv: AnotacoesService) { }

  ngOnInit(): void {

    if(localStorage.getItem("MyToken")){

      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
              this.listarAnotacoes();
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

  listarAnotacoes(){
    this._observacoes == null;
    this.nsrv.getAnotacaoByUser(this.usuario.idUsuario).subscribe((res: any) => this.observacoes = res);
  }

  listarAnotacoesPorFase(){

    this._observacoes == null;
    this.nsrv.getAnotacaoByUserAndFase(this.usuario.idUsuario, this.selectedJornada).subscribe((res: any) => this.observacoes = res);
  }

}
