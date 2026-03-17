package com.greentrack.api.dto.recomendaciones;

import lombok.Data;

import java.time.LocalDate;

// MOSTRAR RECOMENDACIONES
@Data
public class RecomendacionResponse {

    private Long id;
    private String mensaje;
    private LocalDate fecha;
}
