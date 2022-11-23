import { Component, ElementRef, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AnotacoesService } from '../service/anotacoes.service';
import { UsuarioService } from '../service/usuario.service';
import { Globals } from 'src/app/model/Globals';
import { Router } from '@angular/router';
import { observacaoModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Globals]
})
export class DashboardComponent implements OnInit {

  usuario!: Usuario;
  currentUser! : string;
  RecebeAnotacoes: any
  idUsuario!: number;

  constructor(
    public anotacoes: AnotacoesService,
    public srv: UsuarioService,
    public router: Router,
  ) {}

  ngOnInit() {


      this.currentUser = localStorage.getItem("MyToken")!;
      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {
              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.imagem = res.imagem;
              this.usuario.idUsuario = res.idUsuario;
              this.carregaAnotações();
        },
      err => {
        console.log(err);
        alert("Erro ao carregar informações do usuario");
      });
  }

  carregaAnotações(){
    this.RecebeAnotacoes = new observacaoModel;
    this.anotacoes.getAnotacaoByUser(this.usuario.idUsuario).subscribe(
      (res: any) => {
        this.RecebeAnotacoes = res;
        this.RecebeAnotacoes.map((a: any) => a.dataLocal = new Date(a.dataObservacao).toLocaleDateString('en-GB'));
      }
    );
  }
}