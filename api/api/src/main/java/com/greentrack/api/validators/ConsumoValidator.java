package com.greentrack.api.validators;

import com.greentrack.api.dto.consumo.ConsumoRequest;
import com.greentrack.api.errors.exceptions.BadRequestException;
import org.springframework.stereotype.Component;

@Component
public class ConsumoValidator {

    public void validate(ConsumoRequest request) {

        if (request.getMes() < 1 || request.getMes() > 12) {
            throw new BadRequestException("El mes debe estar entre 1 y 12");
        }

        if (request.getAnio() < 2000 || request.getAnio() > 2100) {
            throw new BadRequestException("El año debe estar entre 2000 y 2100");
        }

        if (request.getKwh() < 0) {
            throw new BadRequestException("El consumo no puede ser negativo");
        }
    }
}
