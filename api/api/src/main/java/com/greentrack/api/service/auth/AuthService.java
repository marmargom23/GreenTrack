package com.greentrack.api.service.auth;

import com.greentrack.api.dto.auth.AuthResponse;
import com.greentrack.api.dto.auth.LoginRequest;
import com.greentrack.api.dto.auth.RegisterRequest;
import com.greentrack.api.enums.Rol;
import com.greentrack.api.model.usuario.Usuario;
import com.greentrack.api.repository.usuario.UsuarioRepository;
import com.greentrack.api.security.jwt.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UsuarioRepository usuarioRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(RegisterRequest request) {

        if (usuarioRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse("El email ya está registrado", null);
        }

        Usuario usuario = Usuario.builder()
                .nombre(request.getNombre())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .rol(Rol.USER)
                .build();

        usuarioRepository.save(usuario);

        String token = jwtService.generarToken(usuario);

        return new AuthResponse("Usuario registrado correctamente", token);
    }

    public AuthResponse login(LoginRequest request) {

        Usuario usuario = usuarioRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (usuario == null) {
            return new AuthResponse("Usuario no encontrado", null);
        }

        if (!passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
            return new AuthResponse("Contraseña incorrecta", null);
        }

        String token = jwtService.generarToken(usuario);

        return new AuthResponse("Login exitoso", token);
    }
}
