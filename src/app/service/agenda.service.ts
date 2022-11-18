import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Evento } from '../model/Evento';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class AgendaService {

  private url: string = "https://vida-autista-backend.herokuapp.com/api/Calendario";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept': '*/*', 'host': 'localhost'})
  };
  constructor(
    private http: HttpClient
  ) { }

  public Selecionar(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        catchError(() => of())
      );
  }

  public SelecionarTodosEventos(idUsuario: number): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.url}/calendarioUsuario/${idUsuario}`, this.httpOptions)
      .pipe(
        catchError(() => of())
      );
  }

  public Criar(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.url, evento, this.httpOptions)
      .pipe(
        catchError(() => of())
      );
  }

  public Editar(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(this.url, evento, this.httpOptions)
      .pipe(
        catchError(() => of())
      );
  }

  public Remover(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        catchError(() => { throw new Error() })
      );
  }

  public GerarPDF(idUsuario: number): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/pdf', 'Accept': 'application/pdf, text/plain, */*', "Access-Control-Allow-Origin": "*" });
    return this.http.get(`${this.url}/relatorioCalendarioUsuario/${idUsuario}`, { headers: headers, responseType: 'blob' })
      .pipe(
        map((res: any) => {
          return new Blob([res], { type: 'application/pdf' });
        }),
        catchError((err) => { throw err })
      );
  }
}