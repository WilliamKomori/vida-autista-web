import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
import * as $ from 'jquery';
import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
//import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { MyToken } from '../model/MyToken';
import { Jornada } from '../model/Jornada';

//Para funcionar o JQuery é preciso instalar as bibiliotecas a seguir:
//npm install jquery --save
//npm install @types/jquery
//e import * as $ from 'jquery'; no projeto.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ Globals ]
})
export class HomeComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  public nomeCompleto!: string;
  public nomeCompletoProfissional!: string;
  public flag_profissional_saude!:boolean;
  public jornada1!: Jornada;
  public jornada2!: Jornada;
  public jornada3!: Jornada;
  public jornada4!: Jornada;
  public jornada5!: Jornada;
  public jornada6!: Jornada;
  public jornada7!: Jornada;
  public jornadaList!: Jornada[];
  public email!: string;
  public documento!: string;
  public telefone!: string;
  public senha: string;
  public senhaRepetida!: string;
  public senhaLogin!: string;
  public emailLogin!: string;
  public _msgErroNome!: string;
  public _msgErroTelefone!: string;
  public _msgErroDocumento!: string;
  public _msgErroEmail!: string;
  public _msgSenha!: string;
  public _msgSenhaForte!: string;
  public _msgSenhaFraca!: string;
  public cont = 0;
  


  constructor(public srv: UsuarioService, private router: Router) {  this.senha = "";  }

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

    console.log("entrou no validaProfissional1");

    if(this.email == null || this.nomeCompletoProfissional == null || this.telefone == null || this.senha == null || this.senhaRepetida == null){
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
              this.enviarDadosProfissionais();
              
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
      this.usuario.flag_profissional_saude = false;

      console.log('inicio jornada');

      this.jornada1 = new Jornada();
      this.jornada1.idFase = 1;
      this.jornada1.textoFase = "Pediatra";
      this.jornada1.faseFinalizada = false;

      this.jornada2 = new Jornada();
      this.jornada2.idFase = 2;
      this.jornada2.textoFase = "Neuropediatra";
      this.jornada2.faseFinalizada = false;

      this.jornada3 = new Jornada();
      this.jornada3.idFase = 3;
      this.jornada3.textoFase = "Otorrinolaringologista";
      this.jornada3.faseFinalizada = false;

      this.jornada4 = new Jornada();
      this.jornada4.idFase = 4;
      this.jornada4.textoFase = "Neuropsicológico";
      this.jornada4.faseFinalizada = false;

      this.jornada5 = new Jornada();
      this.jornada5.idFase = 5;
      this.jornada5.textoFase = "Terapias";
      this.jornada5.faseFinalizada = false;

      this.jornada6 = new Jornada();
      this.jornada6.idFase = 6;
      this.jornada6.textoFase = "Intervenção Familiar";
      this.jornada6.faseFinalizada = false;

      this.jornada7 = new Jornada();
      this.jornada7.idFase = 7;
      this.jornada7.textoFase = "Dicas/Observações";
      this.jornada7.faseFinalizada = false;

      this.jornadaList = [ ]; 

      this.jornadaList.push(this.jornada1, this.jornada2, this.jornada3, this.jornada4, this.jornada5, this.jornada6, this.jornada7);

      console.log(this.jornadaList);

      this.usuario.jornadas = this.jornadaList;

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


    enviarDadosProfissionais(){

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


      this.srv.autenticar(this.usuario).subscribe(
        (res: any)=>{
          // se deu certo        
          // armazeno o token no LocalStorage
          localStorage.setItem("MyToken", res.strToken);
          console.log(res.strToken);
          alert("E-mail e senha validados com sucesso!");
          this.router.navigate(['/dashboard']);
          
          $('#btnfecharLogin').click();

         // window.location.reload();
        },
        (err)=>{
          alert("Usuário não cadastrado no sistema");
        }
      );
    }

  }