import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { InfoUsuario } from '../model/InfoUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = 'http://54.233.106.44:8080';

  constructor(public http: HttpClient) { }

  public recuperaTodos() {
    return this.http.get(`${this.baseUrl}/usuario/todos`);

  }
  public recuperaPostsUsuario(id: number) {
    return this.http.get(`${this.baseUrl}/usuario/` + id);

  }
  public insere(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}/user/new`, usuario);
  }

  public atualiza(usuario: Usuario, id: number) {
    return this.http.put(`${this.baseUrl}/alterar/` + id, usuario);
  }

  public atualizaSenha(usuario: Usuario, id: number) {
    return this.http.put(`${this.baseUrl}/user/alterar/` + id + '/senha', usuario);
  }

  public autenticar(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}/user/login`, usuario);
  }

  public buscarInfo(token: string) {
    return this.http.get(`${this.baseUrl}/user/info?token=` + token);
  }

}