import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/Globals';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Globals]
})
export class HeaderComponent implements OnInit {

  usuario!: Usuario;
  currentUser! : string;

  constructor(@Inject(DOCUMENT) private document: Document, public router: Router, public srv: UsuarioService) { }

  ngOnInit(): void {

    if(localStorage.getItem("MyToken")){

      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
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
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  public logout(){
    if(localStorage.getItem("MyToken")){
      localStorage.removeItem("MyToken");
      this.router.navigate(['/home']);
    }else{
    this.router.navigate(['/home']);
    }
  }

}
