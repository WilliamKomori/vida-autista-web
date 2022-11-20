import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../model/Notes';


@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {

  private baseUrl: string = 'http://54.233.106.44:8080';


  constructor(public http: HttpClient) { }

  public inserirAnotacao(param: any) {
    return this.http.post(`${this.baseUrl}/notes/new`, param);
  }

  public getAnotacaoByUser(id: number) {
    return this.http.get<Notes[]>(`${this.baseUrl}/notes/all/` + id);
  }

  public getAnotacaoByUserAndFase(id: number, idFase: number) {
    return this.http.get<Notes[]>(`${this.baseUrl}/notes/all/` + id + '/' + idFase);
  }

}
