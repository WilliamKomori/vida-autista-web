import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { InfoUsuario } from '../model/InfoUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

  public recuperaTodos(){
    return this.http.get("http://localhost:8080/usuario/todos");

  }
  public recuperaPostsUsuario(id: number){
    return this.http.get("http://localhost:8080/usuario/"+id);

  }
  public insere(usuario:Usuario){
    return this.http.post("http://localhost:8080/user/new",usuario);
  }

  public atualiza(usuario: Usuario, id: number){
    return this.http.put("http://localhost:8080/user/alterar/"+id,usuario);
  }

  public atualizaSenha(usuario: Usuario, id: number){
    return this.http.put("http://localhost:8080/user/alterar/"+ id +"/senha", usuario);
  }

  public autenticar(usuario: Usuario) {
    return this.http.post("http://localhost:8080/user/login", usuario);
  }

  public buscarInfo(token: string){
    return this.http.get("http://localhost:8080/user/info?token="+token);
  }
}