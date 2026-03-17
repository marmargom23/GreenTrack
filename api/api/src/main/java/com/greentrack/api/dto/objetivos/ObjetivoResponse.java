package com.greentrack.api.dto.objetivos;

import lombok.Data;

// MOSTRAR OBJETIVOS AL FRONTEND
@Data
public class ObjetivoResponse {

    private Long id;
    private int mes;
    private int anio;
    private double limiteKwh;
}
