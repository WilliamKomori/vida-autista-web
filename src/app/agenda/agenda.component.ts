import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarElement, defineFullCalendarElement } from '@fullcalendar/web-component';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Usuario } from '../model/Usuario';
import AgendaService from '../service/agenda.service';
import { UsuarioService } from '../service/usuario.service';
import { Globals } from '../model/Globals';
import { Evento } from '../model/Evento';
import { firstValueFrom } from 'rxjs';

defineFullCalendarElement();

declare var $: any;
@Component({
  selector: 'app-agenda',
  templateUrl: 'agenda.component.html',
  styleUrls: ['agenda.component.scss'],
  providers: [Globals]
})
export class AgendaComponent implements OnInit {

  private static usuario: Usuario;
  private selecionouUmaData: boolean = false;
  private static idAtual: number = 0;
  private static calendarApi: any;
  private static podeExcluir: boolean = false;
  exibirBotaoParaExcluir(): boolean {
    return AgendaComponent.podeExcluir;
  }

  @ViewChild('calendar', { read: ElementRef }) calendarRef!: ElementRef<FullCalendarElement>;

  constructor(
    private agendaService: AgendaService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    if (localStorage.getItem("MyToken")) {
      let currentUser = localStorage.getItem('MyToken') || '';

      this.usuarioService.buscarInfo(currentUser).subscribe(
        (res: any) => {
          Globals.user = res;
          AgendaComponent.usuario = new Usuario();
          AgendaComponent.usuario.nome = res.nome;
          AgendaComponent.usuario.idUsuario = res.idUsuario;
          this.recuperarEventos();
        },
        err => {
          alert("Erro ao inserir");
        });
    }
    $("full-calendar").ready(() => {
      $('.fc-prev-button').click(() => this.recuperarEventos());
      $('.fc-next-button').click(() => this.recuperarEventos());
    });
  }

  ngAfterViewChecked(): void {
    AgendaComponent.calendarApi = this.calendarRef.nativeElement.getApi();
  }

  exibirAlerta(mensagem: string) {
    $('#alerta').text(mensagem);
    $('.alert').addClass('show');
    setTimeout(() => {
      $('.alert').removeClass('show');
    }, 1500);
  }

  async pegarEvento(id: number) {
    try{
      return await firstValueFrom(this.agendaService.Selecionar(id));
    }catch{
      return null;
    }
  }

  recuperarEventos(): void {
    this.agendaService.SelecionarTodosEventos(AgendaComponent.usuario.idUsuario)
      .subscribe(e => {
        var eventos = AgendaComponent.calendarApi.getEvents(); 
        var len = eventos.length;
        for (var i = 0; i < len; i++) {
            eventos[i].remove(); 
        }
        AgendaComponent.calendarApi.addEventSource({ events: e.map(e => ({ id: `${e.id}`, title: e.nome, start: e.dataHora })) });
      });
  }

  async criarEvento(evento: Evento) {
    if (!this.validarEvento(evento))
      return null;
    try{
      return await firstValueFrom(this.agendaService.Criar(evento));
    }catch{
      return null;
    }
  }

  async atualizarEvento(evento: Evento) {
    if (!this.validarEvento(evento))
      return null;
    try{
      return await firstValueFrom(this.agendaService.Editar(evento));
    }catch{
      return null;
    }
  }

  validarEvento(evento: Evento): boolean {
    let valido = false;

    if (evento.idUsuario &&
      evento.nome && evento.dataHora &&
      evento.tipoEvento && evento.anotacao)
      valido = true;

    if (evento.idUsuario != AgendaComponent.usuario.idUsuario)
      valido = false;

    return valido;
  }

  calendarOptions: CalendarOptions = {
    locales: [ptBrLocale],
    locale: "pt-br",
    plugins: [interactionPlugin, dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    defaultTimedEventDuration: '00:00:01',
    selectable: true,
    select: (evt: any) => {
      setTimeout(() => {
        if (this.selecionouUmaData) {
          this.selecionouUmaData = false;
          return;
        }
      }, 200);
    },
    dateClick: async (evt: any) => {
      this.limparCampos();
      this.selecionouUmaData = true;

      let hoje = new Date();
      let hora = hoje.getHours();
      let minuto = hoje.getMinutes();
      let horario = `${hora < 10 ? `0${hora}` : hora}:${minuto < 10 ? `0${minuto}` : minuto}`;
      let dataCalendario = evt.date.toJSON().split('T')[0];
      let data = `${dataCalendario}T${horario}`;

      let inputData: any = document.getElementById("dataInicio");
      inputData.value = data;

      AgendaComponent.podeExcluir = false;
      $('#basicModal').modal("show");
    },
    eventClick: async (info: any) => {
      this.limparCampos();

      let evento = await this.pegarEvento(info.event.id);
      if (!evento) {
        this.exibirAlerta("Falha ao recuperar o evento.");
        return;
      }

      let id: any = document.getElementById("id");
      let inputData: any = document.getElementById("dataInicio");
      let inputTitulo: any = document.getElementById("titulo");
      let inputTipoEvento: any = document.getElementById("tipoEvento");
      let inputAnotacao: any = document.getElementById("anotacao");

      let data = info.event.start;

      data.setHours(data.getHours() - 3, data.getMinutes());

      id.value = info.event.id;
      inputData.value = evento.dataHora;
      inputTitulo.value = evento.nome;
      inputTipoEvento.value = evento.tipoEvento;
      inputAnotacao.value = evento.anotacao;

      AgendaComponent.podeExcluir = true;

      $('#basicModal').modal("show");
    },
  };

  limparCampos(): void {
    (document.getElementById("id") as HTMLInputElement).value = "";
    (document.getElementById("dataInicio") as HTMLInputElement).value = "";
    (document.getElementById("titulo") as HTMLInputElement).value = "";
    (document.getElementById("anotacao") as HTMLInputElement).value = "";
    (document.getElementById("tipoEvento") as HTMLInputElement).value = "";
  }

  async salvarEvento() {
    let calendarApi = AgendaComponent.calendarApi;
    let id: any = (document.getElementById("id") as HTMLInputElement).value;
    let data: any = (document.getElementById("dataInicio") as HTMLInputElement).value;
    let titulo: any = (document.getElementById("titulo") as HTMLInputElement).value;
    let tipoEvento: any = (document.getElementById("tipoEvento") as HTMLInputElement).value;
    let anotacao: any = (document.getElementById("anotacao") as HTMLInputElement).value;

    id = id ? id : AgendaComponent.idAtual++;

    let eventoCalendario = calendarApi.getEventById(id);

    let evento: Evento = {
      id: id,
      idUsuario: AgendaComponent.usuario.idUsuario,
      nome: titulo,
      dataHora: data,
      tipoEvento: tipoEvento,
      anotacao: anotacao
    };

    if (eventoCalendario) {
      if (await this.atualizarEvento(evento)) {
        eventoCalendario.setProp('title', titulo);
        eventoCalendario.setStart(data);
      } else {
        this.exibirAlerta("Erro ao atualizar o evento.");
        return;
      }
    } else {
      let eventoResponse = await this.criarEvento(evento);
      if (eventoResponse) {
        console.log(eventoResponse);
        calendarApi.addEvent({ 'id': eventoResponse.id, 'title': titulo, 'start': data });
      }
      else {
        this.exibirAlerta("Erro ao criar o evento.");
        return;
      }
    }

    this.limparCampos();
    $('#basicModal').modal("hide");
  }

  async excluirEvento(){
    let calendarApi = AgendaComponent.calendarApi;
    let id: any = (document.getElementById("id") as HTMLInputElement).value;
    let evento = calendarApi.getEventById(id);

    try{
      await firstValueFrom(this.agendaService.Remover(id));

      evento.remove();
      $('#basicModal').modal("hide");
      this.limparCampos();
    }catch{
      this.exibirAlerta("Falha ao remover evento.");
    }
  }

  exportar(): void{
    this.agendaService.GerarPDF(AgendaComponent.usuario.idUsuario).subscribe(pdf => {
      let url = window.URL.createObjectURL(pdf);
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = pdf.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }
}
