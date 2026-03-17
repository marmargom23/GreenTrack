package com.greentrack.api.dto.objetivos;

import lombok.Data;

// CREAR O ACTUALIZAR OBJETIVOS
@Data
public class ObjetivoRequest {

    private int mes;
    private int anio;
    private double limiteKwh;
}
