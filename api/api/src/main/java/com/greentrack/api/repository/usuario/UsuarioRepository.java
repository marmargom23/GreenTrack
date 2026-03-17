package com.greentrack.api.repository.usuario;

import com.greentrack.api.model.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Buscar usuario por email (clave para login)
    Optional<Usuario> findByEmail(String email);

    // Comprobar si un email ya existe (validación de registro)
    boolean existsByEmail(String email);

    // Buscar usuarios por rol (panel de administración)
    List<Usuario> findByRol(com.greentrack.api.enums.Rol rol);

    // Buscar usuarios cuyo nombre contenga un texto
    List<Usuario> findByNombreContainingIgnoreCase(String nombre);
}
