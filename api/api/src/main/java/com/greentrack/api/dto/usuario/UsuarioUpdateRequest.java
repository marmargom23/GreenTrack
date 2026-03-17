package com.greentrack.api.dto.usuario;

import lombok.Data;

// ACTUALIZAR DATOS DEL USUARIO
// No permite cambiar email ni rol desde el frontend.
@Data
public class UsuarioUpdateRequest {

    private String nombre;
    private String password; // opcional
}
