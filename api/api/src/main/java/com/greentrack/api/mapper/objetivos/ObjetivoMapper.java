package com.greentrack.api.mapper.objetivos;

import com.greentrack.api.dto.objetivos.ObjetivoRequest;
import com.greentrack.api.dto.objetivos.ObjetivoResponse;
import com.greentrack.api.model.objetivos.Objetivo;
import org.springframework.stereotype.Component;

@Component
public class ObjetivoMapper {

    // DTO → ENTIDAD
    public Objetivo toEntity(ObjetivoRequest request) {
        if (request == null) return null;

        return Objetivo.builder()
                .mes(request.getMes())
                .anio(request.getAnio())
                .limiteKwh(request.getLimiteKwh())
                .build();
    }

    // ENTIDAD → DTO
    public ObjetivoResponse toResponse(Objetivo objetivo) {
        if (objetivo == null) return null;

        ObjetivoResponse dto = new ObjetivoResponse();
        dto.setId(objetivo.getId());
        dto.setMes(objetivo.getMes());
        dto.setAnio(objetivo.getAnio());
        dto.setLimiteKwh(objetivo.getLimiteKwh());

        return dto;
    }
}
