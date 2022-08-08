package com.vidaaustista.bootcamp.controller;

import com.vidaaustista.bootcamp.model.UsuarioDTO;
import com.vidaaustista.bootcamp.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UsuarioController {
    private final UsuarioService usuarioService;

    @PostMapping("/user/new")
    public ResponseEntity<String> inserirNovoUsuario(@RequestBody UsuarioDTO usuario) {
        try {
            UsuarioDTO usuarioDTO = usuarioService.cadastrarUsuario(usuario);
            return new ResponseEntity<>("Usuário Cadastrado com Sucesso" + usuarioDTO, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao cadastrar", HttpStatus.BAD_REQUEST);
        }
    }
}
