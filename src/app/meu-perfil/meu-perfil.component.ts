import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/Globals';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss'],
  providers: [Globals]
})
export class MeuPerfilComponent implements OnInit {

  usuario!: Usuario;
  currentUser! : string;
  public email!: string;
  public documento!: string;
  public telefone!: string;
  public dataNascimento!: string;
  public senha!: string;
  public nomeCompleto!: string;

  constructor(public router: Router, public srv: UsuarioService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem("MyToken")){

      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
              this.usuario.data_nascimento = res.data_nascimento;
              this.usuario.telefone = res.telefone;
              this.usuario.email = res.email;
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

}
