package com.greentrack.api.repository.objetivos;

import com.greentrack.api.model.objetivos.Objetivo;
import com.greentrack.api.model.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ObjetivoRepository extends JpaRepository<Objetivo, Long> {

    // Obtener objetivo de un mes y año (clave para comparar con consumo)
    Optional<Objetivo> findByMesAndAnio(int mes, int anio);

    // Obtener todos los objetivos de un año (útil para gráficos)
    List<Objetivo> findByAnio(int anio);

    // Obtener objetivos ordenados por fecha (útil para dashboards)
    List<Objetivo> findAllByOrderByAnioAscMesAsc();

    // Filtra por usuario, ordena por año y mes, y devuelve los objetivos
    List<Objetivo> findByUsuarioOrderByAnioAscMesAsc(Usuario usuario);

}
