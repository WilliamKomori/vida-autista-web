import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../model/Notes';


@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {

  constructor(public http: HttpClient) { }

  public inserirAnotacao(param: any){
    return this.http.post("http://localhost:8080/notes/new",param);
  }

  public getAnotacaoByUser(id: number){
    return this.http.get<Notes[]>("http://localhost:8080/notes/all/"+id);
  }

  public getAnotacaoByUserAndFase(id: number, idFase: number){
    return this.http.get<Notes[]>("http://localhost:8080/notes/all/"+id+"/"+idFase);
  }

  public excluirAnotacao(id: number){
    return this.http.delete("http://localhost:8080/notes/" + id)
  }


}
