import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jornada } from '../model/Jornada';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor(public http: HttpClient) { }

  public getJornadaByIdUser(id: number) {
    return this.http.get<Jornada[]>("https://vida-autista-backend.herokuapp.com/jornada/" + id).pipe(tap(console.log));
  }

}
