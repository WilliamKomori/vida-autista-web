import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
import * as $ from 'jquery';
//import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { MyToken } from '../model/MyToken';

//Para funcionar o JQuery é preciso instalar as bibiliotecas a seguir:
//npm install jquery --save
//npm install @types/jquery
//e import * as $ from 'jquery'; no projeto.

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  providers: [ Globals ]
})
export class ContatoComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  public nomeCompleto!: string;
  public email!: string;
  public telefone!: string;
  public senha!: string;
  public mensagem!: string;
  public senhaRepetida!: string;
  public senhaLogin!: string;
  public emailLogin!: string;
  public documento!: string;
  public _msgErroNome!: string;
  public _msgErroTelefone!: string;
  public _msgErroEmail!: string;
  public _msgSenha!: string;
  public _msgErroDocumento!: string;
  public _msgSenhaForte!: string;
  public _msgSenhaFraca!: string;
  public _msgErroMensagem!: string;
  public cont = 0;
  


  constructor(public srv: UsuarioService, private router: Router) { }

  ngOnInit() {

  }
  
  public valida(){
    

    if(this.email == null || this.nomeCompleto == null || this.telefone == null || this.senha == null || this.senhaRepetida == null){
      alert("Preencha todos os campos corretamente!");
      
    }
    else{

      if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
        this._msgErroEmail = "Digite um e-mail válido";
      }
      else{
          this.cont++;
          this._msgErroEmail = "";
      }

      if(this.telefone.toString().length >= 10 && this.telefone.toString().length <=11){
          this.cont++;
          this._msgErroTelefone = "";       
      }
      else{
        this._msgErroTelefone = "Digite um telefone válido";
      }

      if (!this.isTipo(this.nomeCompleto))
      {
        this._msgErroNome = "Nome e/ou Sobrenome Inválidos";
      }
      else{
        this.cont++;
        this._msgErroNome = "";
      }

      if(this.senha != this.senhaRepetida){
        this._msgSenha = "As senhas digitadas não correspondem";
      }
        else{
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this.cont++;
          }
          else{
            this.cont++;
          }
        
        }

          if(this.cont >= 4)
          {
              this.cont = 0;
              this.enviarDados();
              
          }
          else{
            this.cont = 0;
          }

        }     



    }

  
  public validaProfissional(){

    console.log("entrou no validaProfissional");

    if(this.email == null || this.telefone == null || this.senha == null || this.senhaRepetida == null || this.nomeCompleto == null || this.documento == null){

      alert("Preencha todos os campos corretamente!");
    
    }
    else{

      if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
        this._msgErroEmail = "Digite um e-mail válido";
      }
      else{
          this.cont++;
          this._msgErroEmail = "";
      }

      if(this.telefone.toString().length >= 10 && this.telefone.toString().length <=11){
          this.cont++;
          this._msgErroTelefone = "";       
      }
      else{
        this._msgErroTelefone = "Digite um telefone válido";
      }

      if(this.senha != this.senhaRepetida){
        this._msgSenha = "As senhas digitadas não correspondem";
      }
        else{
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this.cont++;
          }
          else{
            this.cont++;
          }
        
        }

          if(this.cont >= 4)
          {
              this.cont = 0;
              this.enviarDadosProfissional();
              
          }
          else{
            this.cont = 0;
          }

        }
  } 


    public forcaSenha(){
      
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this._msgSenhaForte = "Senha Forte";
            this._msgSenha = "";
            this._msgSenhaFraca = "";
          }
          else{
            this._msgSenhaFraca = "Senha Fraca";
            this._msgSenhaForte = "";
            this._msgSenha = "";
            }
        
        
    }

    public isTipo(pVal: string) { 
      var reTipo = /[A-z][ ][A-z]/; 
      return reTipo.test(pVal); 
    }


    enviarDados(){

      this.usuario.nome = this.nomeCompleto;
      this.usuario.email = this.email;
      this.usuario.telefone = this.telefone;
      this.usuario.senha = this.senha;

      console.log(this.usuario);
      this.srv.insere(this.usuario).subscribe(
        res =>{
          alert("Cadastro efetuado com sucesso!");
          $('#btnFecharUsuario').click();
        },
        err=>{
          console.log(err);
          alert("Erro ao inserir");
        }
      )

    }


    enviarDadosProfissional(){
      
      this.usuario.nome = this.nomeCompleto;
      this.usuario.email = this.email;
      this.usuario.telefone = this.telefone;
      this.usuario.senha = this.senha;
      this.usuario.flag_profissional_saude = true;
      this.usuario.documento_identificacao = this.documento;

      console.log(this.usuario);
      this.srv.insere(this.usuario).subscribe(
        res =>{
          alert("Cadastro efetuado com sucesso!");
          $('#btnFecharEmpresa').click();
        },
        err=>{
          console.log(err);
          alert("Erro ao inserir");
        }
      )

    }




    validaLogin(){

      this.usuario.email = this.emailLogin;
      this.usuario.senha = this.senhaLogin;

      alert("E-mail e senha validados com sucesso!");

 /*     this.srv.autenticar(this.usuario).subscribe(
        (res: MyToken)=>{
          // se deu certo        
          // armazeno o token no LocalStorage
          localStorage.setItem("MyToken", res.strToken);
          console.log(res.strToken);
          
          this.router.navigate(['/feed']);
          
          $('#btnfecharLogin').click();
         // window.location.reload();
        },
        (err)=>{
          alert("Usuário não cadastrado no sistema");
        }
      );
    }*/

    /*
      this.usuario.email = this.emailLogin;
      this.usuario.senha = this.senhaLogin;
      this.router.navigate(['feed']);
      $('#btnfecharLogin').click();
      this.srv.recuperaLoginESenha(this.usuario).subscribe(
        (res:Usuario) =>{
          alert("E-mail e senha validados com sucesso!");
          Globals.user = res;
          this.router.navigate(['feed']);
          $('#btnfecharLogin').click();
        },
        err=>{
          alert("Usuário não cadastrado no sistema");
        }
      )}*/

      }
  }