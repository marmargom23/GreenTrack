package com.greentrack.api.validators;

import com.greentrack.api.dto.objetivos.ObjetivoRequest;
import com.greentrack.api.errors.exceptions.BadRequestException;
import org.springframework.stereotype.Component;

@Component
public class ObjetivoValidator {

    public void validate(ObjetivoRequest request) {

        if (request.getMes() < 1 || request.getMes() > 12) {
            throw new BadRequestException("El mes debe estar entre 1 y 12");
        }

        if (request.getAnio() < 2000 || request.getAnio() > 2100) {
            throw new BadRequestException("El año debe estar entre 2000 y 2100");
        }

        if (request.getLimiteKwh() <= 0) {
            throw new BadRequestException("El límite de kWh debe ser mayor que 0");
        }
    }
}
