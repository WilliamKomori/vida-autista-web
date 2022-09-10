package com.vidaaustista.bootcamp.security;

import com.vidaaustista.bootcamp.model.UsuarioDTO;

import javax.xml.bind.DatatypeConverter;

public class Autenticador {


    // Prefixo inicial do nosso token
    private static final String PREFIXO = "*VIDAAUTISTA;";

    public static String generateToken(UsuarioDTO usuario) {
        // concatena o prefixo com as informações do usuario;
        String str = PREFIXO + usuario.toString();
        // converte para hexadecial

        String token = DatatypeConverter.printHexBinary(str.getBytes());
        return token;
    }

    public static boolean isValid(String token) {
        byte[] vetor = DatatypeConverter.parseHexBinary(token);
        // converte o código hexadecimal de volta para texto
        String novaString = new String(vetor);
        if (novaString.startsWith(PREFIXO)) {
            return true;
        }
        return false;
    }

    public static UsuarioDTO getUser(String token) {

        byte[] vetor = DatatypeConverter.parseHexBinary(token);
        // converte o código hexadecimal de volta para texto
        String novaString = new String(vetor);
        String partes[] = novaString.split(";");

        UsuarioDTO c =
                UsuarioDTO
                        .builder()
                        .idUsuario(Integer.parseInt(partes[1]))
                        .nome(partes[2])
                        .email(partes[3])
                        .build();
        return c;
    }
}
