import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jornada } from '../model/Jornada';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor(public http: HttpClient) { }

  private baseUrl: string = 'http://54.233.106.44:8080';

  public getJornadaByIdUser(id: number) {
    return this.http.get<Jornada[]>(`${this.baseUrl}/jornada/` + id).pipe(tap(console.log));
  }

}
