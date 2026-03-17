package com.greentrack.api.repository.recomendaciones;

import com.greentrack.api.model.recomendaciones.Recomendacion;
import com.greentrack.api.model.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface RecomendacionRepository extends JpaRepository<Recomendacion, Long> {

    // Obtener recomendaciones por fecha exacta
    List<Recomendacion> findByFecha(LocalDate fecha);

    // Obtener recomendaciones más recientes primero
    List<Recomendacion> findAllByOrderByFechaDesc();

    // Obtener recomendaciones de un rango de fechas
    List<Recomendacion> findByFechaBetween(LocalDate inicio, LocalDate fin);

    // Filtra por usuario, ordena por año y mes
    List<Recomendacion> findByUsuarioOrderByFechaDesc(Usuario usuario);

}
