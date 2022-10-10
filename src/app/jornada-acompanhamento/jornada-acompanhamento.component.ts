import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { JornadaService } from '../service/jornada.service';
import { Jornada } from '../model/Jornada';

@Component({
  selector: 'app-jornada-acompanhamento',
  templateUrl: './jornada-acompanhamento.component.html',
  styleUrls: ['./jornada-acompanhamento.component.scss'],
  providers: [Globals]
})
export class JornadaAcompanhamentoComponent implements OnInit {

  now = new Date();
  usuario!: Usuario;
  _jornadas!: Jornada[];
  jornadas!: Jornada[];
  currentUser! : string;


  constructor(public router: Router, public srv: UsuarioService, public jsrv: JornadaService) { }

  ngOnInit() {

    if(localStorage.getItem("MyToken")){

      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
              this.listarJornada(3);
        },
      err => {
        console.log(err);
        alert("Erro ao inserir");
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

}
