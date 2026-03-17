package com.greentrack.api.model.consumo;

import com.greentrack.api.model.usuario.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// Representa el consumo energético mensual del usuario.
@Entity
@Table(name = "consumo_energetico")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Consumo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int mes;
    private int anio;
    private double kwh;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;
}
