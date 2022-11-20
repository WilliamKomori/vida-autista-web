import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../model/Notes';


@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {


  constructor(public http: HttpClient) { }

  public inserirAnotacao(param: any) {
    return this.http.post("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/notes/new", param);
  }

  public getAnotacaoByUser(id: number) {
    return this.http.get<Notes[]>("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/notes/all/" + id);
  }

  public getAnotacaoByUserAndFase(id: number, idFase: number) {
    return this.http.get<Notes[]>("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/notes/all/" + id + "/" + idFase);
  }

}
