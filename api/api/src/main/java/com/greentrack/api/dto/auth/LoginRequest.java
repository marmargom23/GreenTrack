package com.greentrack.api.dto.auth;

import lombok.Data;

// LOGIN
// Solo se envían email y contraseña.
@Data
public class LoginRequest {

    private String email;
    private String password;
}
