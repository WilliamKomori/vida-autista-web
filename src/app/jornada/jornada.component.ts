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

  


  constructor(
    public router: Router, 
    public srv: UsuarioService) {}

  ngOnInit() {
  }

  Onclick(){
        this.router.navigate(['/jornada-acompanhamento']);
    }

  }




