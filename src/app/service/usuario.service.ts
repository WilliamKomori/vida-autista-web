import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { InfoUsuario } from '../model/InfoUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

  public recuperaTodos() {
    return this.http.get("https://vida-autista-backend.herokuapp.com/usuario/todos");

  }
  public recuperaPostsUsuario(id: number) {
    return this.http.get("https://vida-autista-backend.herokuapp.com/usuario/" + id);

  }
  public insere(usuario: Usuario) {
    return this.http.post("https://vida-autista-backend.herokuapp.com/user/new", usuario);
  }

  public atualiza(usuario: Usuario, id: number) {
    return this.http.put("https://vida-autista-backend.herokuapp.com/alterar/" + id, usuario);
  }

  public atualizaSenha(usuario: Usuario, id: number) {
    return this.http.put("https://vida-autista-backend.herokuapp.com/user/alterar/" + id + "/senha", usuario);
  }

  public autenticar(usuario: Usuario) {
    return this.http.post("https://vida-autista-backend.herokuapp.com/user/login", usuario);
  }

  public buscarInfo(token: string) {
    return this.http.get("https://vida-autista-backend.herokuapp.com/user/info?token=" + token);
  }
}