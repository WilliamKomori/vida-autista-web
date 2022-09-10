import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss'],
  providers: [Globals]
})
export class JornadaComponent implements OnInit {

  now = new Date();
  usuario!: Usuario;
  currentUser! : string;

  constructor(public router: Router, public srv: UsuarioService) { }

  ngOnInit() {

    if(localStorage.getItem("MyToken")){
        
      this.currentUser = JSON.parse(localStorage.getItem('MyToken') || '{}');

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {
          
              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
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



}
