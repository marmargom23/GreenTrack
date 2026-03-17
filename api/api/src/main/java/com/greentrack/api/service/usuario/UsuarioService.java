package com.greentrack.api.service.usuario;

import com.greentrack.api.dto.usuario.UsuarioResponse;
import com.greentrack.api.dto.usuario.UsuarioUpdateRequest;
import com.greentrack.api.errors.exceptions.NotFoundException;
import com.greentrack.api.mapper.usuario.UsuarioMapper;
import com.greentrack.api.model.usuario.Usuario;
import com.greentrack.api.repository.usuario.UsuarioRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepo;
    private final UsuarioMapper usuarioMapper;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UsuarioService(UsuarioRepository usuarioRepo, UsuarioMapper usuarioMapper) {
        this.usuarioRepo = usuarioRepo;
        this.usuarioMapper = usuarioMapper;
    }

    // Obtener todos los usuarios (solo para admins)
    public List<UsuarioResponse> getAll() {
        return usuarioRepo.findAll()
                .stream()
                .map(usuarioMapper::toResponse)
                .toList();
    }

    // Buscar usuario por ID
    public Usuario findById(Long id) {
        return usuarioRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Usuario no encontrado con ID: " + id));
    }

    // Actualizar datos del usuario
    public UsuarioResponse update(Long id, UsuarioUpdateRequest request) {
        Usuario usuario = findById(id);

        usuario.setNombre(request.getNombre());

        if (request.getPassword() != null && !request.getPassword().isBlank()) {
            usuario.setPassword(encoder.encode(request.getPassword()));
        }

        usuarioRepo.save(usuario);

        return usuarioMapper.toResponse(usuario);
    }
}
