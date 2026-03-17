package com.greentrack.api.dto.consumo;

import lombok.Data;

// MOSTRAR CONSUMOS AL FRONTEND
@Data
public class ConsumoResponse {

    private Long id;
    private int mes;
    private int anio;
    private double kwh;
}
