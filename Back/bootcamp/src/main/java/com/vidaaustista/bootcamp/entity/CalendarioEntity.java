package com.vidaaustista.bootcamp.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "calendario")
public class CalendarioEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "idCalendario")
  private Integer idCalendario;

  @Column(name = "idUsuario")
  private Integer idUsuario;

  @Column(name = "dataHoraEvento")
  private Date dataHoraEvento;

  @Column(name = "anotacoes")
  private String anotacoes;

  @Column(name = "tipoEvento")
  private String tipoEvento;
}
