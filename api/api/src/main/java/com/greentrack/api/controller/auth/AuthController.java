package com.greentrack.api.controller.auth;

import com.greentrack.api.dto.auth.AuthResponse;
import com.greentrack.api.dto.auth.LoginRequest;
import com.greentrack.api.dto.auth.RegisterRequest;
import com.greentrack.api.service.auth.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Registro de usuario
    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    // Login de usuario
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
