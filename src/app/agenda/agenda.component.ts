import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

defineFullCalendarElement();

declare var $ : any;
@Component({
  selector: 'app-agenda',
  templateUrl: 'agenda.component.html',
  styleUrls: ['agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  selecionouUmaData: boolean = false;
  inputData: any;

  constructor() { }

  ngOnInit(): void {
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
    selectable: true,
    select: this.selecionarDatas,
    dateClick: this.selecionarData
  };

  selecionarData(evt: any): void{
    this.selecionouUmaData = true;
    this.inputData = document.getElementById("dataInicio");
    this.inputData.value = evt.date.toJSON().split('.')[0];
    $('#basicModal').modal("show");
  }

  selecionarDatas(evt: any): void{
    setTimeout(() => {
      if(this.selecionouUmaData){
        this.selecionouUmaData = false;
        return;
      }
      console.log(`dias de ${evt.start.getDate()} até ${evt.end.getDate()} selecionados`);
    }, 200);
  }
}
