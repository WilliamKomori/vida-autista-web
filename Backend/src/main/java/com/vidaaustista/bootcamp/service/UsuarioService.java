package com.vidaaustista.bootcamp.service;

import com.vidaaustista.bootcamp.entity.UsuarioEntity;
import com.vidaaustista.bootcamp.mapper.UsuarioMapper;
import com.vidaaustista.bootcamp.mapper.UsuarioMapperImpl;
import com.vidaaustista.bootcamp.model.UsuarioDTO;
import com.vidaaustista.bootcamp.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    private UsuarioMapper usuarioMapper;

    public UsuarioDTO cadastrarUsuario(UsuarioDTO usuario){
        usuarioMapper = new UsuarioMapperImpl();
        UsuarioEntity usuarioEntity = usuarioMapper.toEntity(usuario);
        UsuarioEntity usuarioSalvo = usuarioRepository.save(usuarioEntity);
        UsuarioDTO usuarioDTO = usuarioMapper.toDto(usuarioSalvo);
        return usuarioDTO;
    }
}
