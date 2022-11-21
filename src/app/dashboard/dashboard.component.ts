import { Component, ElementRef, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AnotacoesService } from '../service/anotacoes.service';
import { UsuarioService } from '../service/usuario.service';
import { Globals } from 'src/app/model/Globals';
import { Router } from '@angular/router';
import { observacaoModel } from './dashboard.model';
import { Evento } from '../model/Evento';
import AgendaService from '../service/agenda.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Globals]
})
export class DashboardComponent implements OnInit {

  usuario!: Usuario;
  currentUser! : string;
  anotacoes: any;
  idUsuario!: number;
  eventos!: Evento[];

  constructor(
    public anotacoesService: AnotacoesService,
    public srv: UsuarioService,
    public router: Router,
    private agendaService: AgendaService,
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
              this.carregaAnotacoes();
              this.carregaEventos(this.usuario.idUsuario);
        },
      err => {
        console.log(err);
        alert("Erro ao carregar informações do usuario");
      });
  }

  carregaAnotacoes(){
    this.anotacoes = new observacaoModel;
    this.anotacoesService.getAnotacaoByUser(this.usuario.idUsuario).subscribe(
      (res: any) => {
        this.anotacoes = res;
        this.anotacoes.map((a: any) => a.dataLocal = new Date(a.dataObservacao).toLocaleDateString('en-GB'));
      }
    );
  }

  carregaEventos(id: number){
    this.agendaService.SelecionarTodosEventos(id)
      .subscribe(e => {
        this.eventos = e;
      });
  }
}