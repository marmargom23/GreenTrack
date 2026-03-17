package com.greentrack.api.dto.auth;

import lombok.Data;

// REGISTRO
// Solo contiene los datos que el usuario debe enviar al registrarse.
// No incluye campos internos como "rol" o "id".
@Data
public class RegisterRequest {

    private String nombre;
    private String email;
    private String password;
}
