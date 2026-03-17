package com.greentrack.api.service.recomendaciones;

import com.greentrack.api.dto.recomendaciones.RecomendacionRequest;
import com.greentrack.api.dto.recomendaciones.RecomendacionResponse;
import com.greentrack.api.errors.exceptions.NotFoundException;
import com.greentrack.api.mapper.recomendaciones.RecomendacionMapper;
import com.greentrack.api.model.recomendaciones.Recomendacion;
import com.greentrack.api.model.usuario.Usuario;
import com.greentrack.api.repository.recomendaciones.RecomendacionRepository;
import com.greentrack.api.repository.usuario.UsuarioRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class RecomendacionService {

    private final RecomendacionRepository recomendacionRepo;
    private final RecomendacionMapper recomendacionMapper;
    private final UsuarioRepository usuarioRepo;

    public RecomendacionService(
            RecomendacionRepository recomendacionRepo,
            RecomendacionMapper recomendacionMapper,
            UsuarioRepository usuarioRepo
    ) {
        this.recomendacionRepo = recomendacionRepo;
        this.recomendacionMapper = recomendacionMapper;
        this.usuarioRepo = usuarioRepo;
    }

    // Crear recomendación
    public RecomendacionResponse create(RecomendacionRequest request) {

        // 1. Obtener email del usuario autenticado
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        // 2. Buscar usuario en la BD
        Usuario usuario = usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // 3. Mapear request → entidad
        Recomendacion rec = recomendacionMapper.toEntity(request);

        // 4. Asignar usuario
        rec.setUsuario(usuario);

        // 5. Asignar fecha automáticamente
        rec.setFecha(LocalDate.now());

        // 6. Guardar
        recomendacionRepo.save(rec);

        return recomendacionMapper.toResponse(rec);
    }

    public List<RecomendacionResponse> getAll() {

        // 1. Obtener email del usuario autenticado
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        // 2. Buscar usuario
        Usuario usuario = usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // 3. Devolver SOLO sus recomendaciones
        return recomendacionRepo.findByUsuarioOrderByFechaDesc(usuario)
                .stream()
                .map(recomendacionMapper::toResponse)
                .toList();
    }


    public Recomendacion findById(Long id) {
        return recomendacionRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Recomendación no encontrada con ID: " + id));
    }
}
