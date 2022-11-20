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
    return this.http.get<Jornada[]>("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/jornada/" + id).pipe(tap(console.log));
  }

}
