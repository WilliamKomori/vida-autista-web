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
    return this.http.get("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/usuario/todos");

  }
  public recuperaPostsUsuario(id: number) {
    return this.http.get("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/usuario/" + id);

  }
  public insere(usuario: Usuario) {
    return this.http.post("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/user/new", usuario);
  }

  public atualiza(usuario: Usuario, id: number) {
    return this.http.put("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/alterar/" + id, usuario);
  }

  public atualizaSenha(usuario: Usuario, id: number) {
    return this.http.put("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/user/alterar/" + id + "/senha", usuario);
  }

  public autenticar(usuario: Usuario) {
    return this.http.post("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/user/login", usuario);
  }

  public buscarInfo(token: string) {
    return this.http.get("https://ec2-54-233-106-44.sa-east-1.compute.amazonaws.com/user/info?token=" + token);
  }

}