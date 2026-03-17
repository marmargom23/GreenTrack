package com.greentrack.api.dto.usuario;

import com.greentrack.api.enums.Rol;
import lombok.Data;

// MOSTRAR USUARIOS AL FRONTEND
// No incluye la contraseña por seguridad.
@Data
public class UsuarioResponse {

    private Long id;
    private String nombre;
    private String email;
    private Rol rol;
}
