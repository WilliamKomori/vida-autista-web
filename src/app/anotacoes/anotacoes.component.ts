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
              this.listarAnotacoes(this.usuario.idUsuario);
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

  listarAnotacoes(id: number){
    this._observacoes == null;
    this.nsrv.getAnotacaoByUser(id).subscribe((res: any) => this.observacoes = res);
  }

  listarAnotacoesPorFase(){
    this._observacoes == null;
    var comboboxValue = document.getElementById('comboboxJornadas');
    console.log(comboboxValue?.nodeValue);
    console.log(comboboxValue);    
    console.log(comboboxValue?.getAttribute);
    this.nsrv.getAnotacaoByUserAndFase(this.usuario.idUsuario, 3).subscribe((res: any) => this.observacoes = res);
  }

}
