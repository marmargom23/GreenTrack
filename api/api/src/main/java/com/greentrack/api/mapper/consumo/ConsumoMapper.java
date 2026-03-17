package com.greentrack.api.mapper.consumo;

import com.greentrack.api.dto.consumo.ConsumoRequest;
import com.greentrack.api.dto.consumo.ConsumoResponse;
import com.greentrack.api.model.consumo.Consumo;
import org.springframework.stereotype.Component;

@Component
public class ConsumoMapper {

    // DTO → ENTIDAD
    public Consumo toEntity(ConsumoRequest request) {
        if (request == null) return null;

        return Consumo.builder()
                .mes(request.getMes())
                .anio(request.getAnio())
                .kwh(request.getKwh())
                .build();
    }

    // ENTIDAD → DTO
    public ConsumoResponse toResponse(Consumo consumo) {
        if (consumo == null) return null;

        ConsumoResponse dto = new ConsumoResponse();
        dto.setId(consumo.getId());
        dto.setMes(consumo.getMes());
        dto.setAnio(consumo.getAnio());
        dto.setKwh(consumo.getKwh());

        return dto;
    }
}
