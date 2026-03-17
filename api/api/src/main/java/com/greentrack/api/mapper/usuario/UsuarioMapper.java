package com.greentrack.api.mapper.usuario;

import com.greentrack.api.dto.usuario.UsuarioResponse;
import com.greentrack.api.model.usuario.Usuario;
import org.springframework.stereotype.Component;

// Convierte entre entidad Usuario y DTO UsuarioResponse.
@Component
public class UsuarioMapper {

    // ENTIDAD → DTO
    public UsuarioResponse toResponse(Usuario usuario) {
        if (usuario == null) return null;

        UsuarioResponse dto = new UsuarioResponse();
        dto.setId(usuario.getId());
        dto.setNombre(usuario.getNombre());
        dto.setEmail(usuario.getEmail());
        dto.setRol(usuario.getRol());

        return dto;
    }
}
