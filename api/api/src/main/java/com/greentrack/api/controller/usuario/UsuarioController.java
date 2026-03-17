package com.greentrack.api.controller.usuario;

import com.greentrack.api.dto.usuario.UsuarioResponse;
import com.greentrack.api.dto.usuario.UsuarioUpdateRequest;
import com.greentrack.api.service.usuario.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // Obtener todos los usuarios (solo admins)
    @GetMapping
    public List<UsuarioResponse> getAll() {
        return usuarioService.getAll();
    }

    // Actualizar usuario
    @PutMapping("/{id}")
    public UsuarioResponse update(
            @PathVariable Long id,
            @RequestBody UsuarioUpdateRequest request
    ) {
        return usuarioService.update(id, request);
    }
}
