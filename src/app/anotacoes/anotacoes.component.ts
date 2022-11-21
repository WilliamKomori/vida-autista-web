import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { AnotacoesService } from '../service/anotacoes.service';
import { Notes } from '../model/Notes';
import { DataTable } from 'simple-datatables';
import { RecebeObsrevacoesModel } from './anotacoes.model';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.scss'],
  providers: [Globals]
})
export class AnotacoesComponent implements OnInit {
  idFase! : number;
  selectedJornada! : number;
  observacoes!: RecebeObsrevacoesModel[];
  usuario!: Usuario;
  currentUser! : string;
  myTable!: any; 
  
  constructor(public router: Router, public srv: UsuarioService, public nsrv: AnotacoesService) { }

  ngOnInit(): void {
    if(localStorage.getItem("MyToken")){
      this.currentUser = localStorage.getItem("MyToken")!;

      this.srv.buscarInfo(this.currentUser).subscribe(
        (res: any) => {

              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
              this.listarAnotacoes(this.usuario.idUsuario);
              

              setTimeout(()=>{
                this.inicioDataTables();
            }, 1500);
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

  inicioDataTables(){
    let dataTable = new DataTable("#myTable", {
      labels: { 
        placeholder: "Buscar...", // The search input placeholder 
        perPage: "{select} por página", // per-page dropdown label 
        noRows: "Não há registros para ser exibidos.", // Message shown when there are no records to show 
        noResults: "Nenhum resultado encontrado", // Message shown when there are no search results 
        info: "Exibindo {end} de {rows} registros" // 
    }, 
    });
  }

  listarAnotacoes(idUsuario:number){
    this.nsrv.getAnotacaoByUser(idUsuario).subscribe(
      (res: any) => {
        this.observacoes = res;
        this.observacoes.map(o => o.dataLocal = new Date(o.dataObservacao).toLocaleDateString('en-GB'));
      });
  }
}