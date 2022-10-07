package com.vidaaustista.bootcamp.repository;

import com.vidaaustista.bootcamp.entity.JornadaEntity;
import com.vidaaustista.bootcamp.entity.NotesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesRepository extends JpaRepository<NotesEntity, Long> {
}
