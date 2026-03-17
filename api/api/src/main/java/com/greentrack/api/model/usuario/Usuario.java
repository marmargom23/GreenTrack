package com.greentrack.api.model.usuario;

import com.greentrack.api.enums.Rol;
import jakarta.persistence.*;
import lombok.*;

// Representa la tabla "usuarios" en la base de datos.
@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID autoincremental
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true) // No se permiten emails duplicados
    private String email;

    @Column(nullable = false)
    private String password; // Siempre encriptada

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Rol rol; // USER o ADMIN
}
