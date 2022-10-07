package com.vidaaustista.bootcamp.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @Column(name = "nome")
    private String nome;

    @Column(name = "senha")
    private String senha;

    @Column(name = "dataNascimento")
    private Date dataNascimento;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "email")
    private String email;

    @Column(name = "flagProfissionalSaude")
    private String flagProfissionalSaude;

    @Column(name = "documentoIdentificacao")
    private String documentoIdentificacao;

    @OneToMany(targetEntity = JornadaEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="id_user_fk",referencedColumnName = "idUsuario")
    private List<JornadaEntity> jornadas;

}
