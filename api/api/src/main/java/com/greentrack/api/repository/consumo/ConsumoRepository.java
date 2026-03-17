package com.greentrack.api.repository.consumo;

import com.greentrack.api.model.consumo.Consumo;
import com.greentrack.api.model.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConsumoRepository extends JpaRepository<Consumo, Long> {

    // Obtener consumos de un año concreto (útil para gráficos anuales)
    List<Consumo> findByAnio(int anio);

    // Obtener consumos de un mes y año (útil para validaciones)
    Optional<Consumo> findByMesAndAnio(int mes, int anio);

    // Obtener consumos ordenados por año y mes (útil para dashboards)
    List<Consumo> findAllByOrderByAnioAscMesAsc();

    // Obtener consumos de un rango de años (útil para estadísticas)
    List<Consumo> findByAnioBetween(int inicio, int fin);

    // Filtra por usuario, ordena por año y mes, y devuelve los consumos que necesita el dashboard
    List<Consumo> findByUsuarioOrderByAnioAscMesAsc(Usuario usuario);

}
