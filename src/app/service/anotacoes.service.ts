import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../model/Notes';


@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {

  constructor(public http: HttpClient) { }

  public inserirAnotacao(note: Notes){
    return this.http.post("http://localhost:8080/notes/new",note);
  }

}
