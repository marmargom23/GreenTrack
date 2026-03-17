package com.greentrack.api.mapper.recomendaciones;

import com.greentrack.api.dto.recomendaciones.RecomendacionRequest;
import com.greentrack.api.dto.recomendaciones.RecomendacionResponse;
import com.greentrack.api.model.recomendaciones.Recomendacion;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class RecomendacionMapper {

    // DTO → ENTIDAD
    public Recomendacion toEntity(RecomendacionRequest request) {
        if (request == null) return null;

        return Recomendacion.builder()
                .mensaje(request.getMensaje())
                .fecha(LocalDate.now()) // Fecha automática
                .build();
    }

    // ENTIDAD → DTO
    public RecomendacionResponse toResponse(Recomendacion rec) {
        if (rec == null) return null;

        RecomendacionResponse dto = new RecomendacionResponse();
        dto.setId(rec.getId());
        dto.setMensaje(rec.getMensaje());
        dto.setFecha(rec.getFecha());

        return dto;
    }
}
