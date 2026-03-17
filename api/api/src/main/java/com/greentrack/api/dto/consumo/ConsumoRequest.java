package com.greentrack.api.dto.consumo;

import lombok.Data;

// CREAR O ACTUALIZAR CONSUMOS
@Data
public class ConsumoRequest {

    private int mes;
    private int anio;
    private double kwh;
}
