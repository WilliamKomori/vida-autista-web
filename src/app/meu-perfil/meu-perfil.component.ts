import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/Globals';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/Usuario';
import { HttpClient } from '@angular/common/http';
import { FileUploadServiceService } from 'src/app/service/file-upload-service.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss'],
  providers: [Globals]
})
export class MeuPerfilComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file
  usuario!: Usuario;
  currentUser!: string;
  public email!: string;
  public documento!: string;
  public telefone!: string;
  public dataNascimento!: string;
  public senha!: string;
  public nomeCompleto!: string;
  public senhaAtual!: string;
  public novaSenha!: string;
  public novaSenhaRepetida!: string;

  constructor(public router: Router, public srv: UsuarioService, private http: HttpClient, private fileUploadService: FileUploadServiceService) { }

  ngOnInit(): void {

    if (localStorage.getItem("MyToken")) {

      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

          Globals.user = res;
          this.usuario = new Usuario();
          this.usuario.nome = res.nome;
          this.usuario.idUsuario = res.idUsuario;
          this.usuario.dataNascimento = res.dataNascimento;
          this.usuario.telefone = res.telefone;
          this.usuario.email = res.email;
          this.usuario.imagem = res.imagem;
          this.usuario.senha = res.senha;
          this.usuario.dataLocal = new Date(`${res.dataNascimento}T00:00`).toLocaleDateString('pt-BR');
        },
        err => {
          alert("Erro ao carregar informações do usuario");
        });

    } else {
      this.router.navigate(['/home']);
      alert("Você Precisa estar conectado para acessar essa página!");
    }
  }

  onFileChanged(event: any) {
    console.log(event);
    this.file = event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          console.log(event);
          console.log(event.link);

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable 
        }
      }
    );

  }

  atualizar() {

    console.log(this.usuario);

    this.srv.atualiza(this.usuario, this.usuario.idUsuario).subscribe(
      res => {
        alert("Atualizado com Sucesso!");
      },
      err => {
        console.log(err);
        alert("Erro ao atualizar");
      }
    )

  }

  atualizarSenha() {

    console.log(this.usuario);

    if (this.novaSenha == this.novaSenhaRepetida) {

      if (this.usuario.senha == this.senhaAtual) {

        this.usuario.senha = this.novaSenha;

        this.srv.atualizaSenha(this.usuario, this.usuario.idUsuario).subscribe(
          res => {
            alert("Atualizado com Sucesso!");
          },
          err => {
            console.log(err);
            alert("Erro ao atualizar");
          }
        )

      }
      else {
        alert("Senha Atual Inválida");
      }

    }
    else {
      alert("As senhas não correspondem!");
    }

  }

}


