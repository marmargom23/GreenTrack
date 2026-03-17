package com.greentrack.api.service.objetivos;

import com.greentrack.api.dto.objetivos.ObjetivoRequest;
import com.greentrack.api.dto.objetivos.ObjetivoResponse;
import com.greentrack.api.errors.exceptions.NotFoundException;
import com.greentrack.api.mapper.objetivos.ObjetivoMapper;
import com.greentrack.api.model.objetivos.Objetivo;
import com.greentrack.api.model.usuario.Usuario;
import com.greentrack.api.repository.objetivos.ObjetivoRepository;
import com.greentrack.api.repository.usuario.UsuarioRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjetivoService {

    private final ObjetivoRepository objetivoRepo;
    private final ObjetivoMapper objetivoMapper;
    private final UsuarioRepository usuarioRepo;

    public ObjetivoService(
            ObjetivoRepository objetivoRepo,
            ObjetivoMapper objetivoMapper,
            UsuarioRepository usuarioRepo
    ) {
        this.objetivoRepo = objetivoRepo;
        this.objetivoMapper = objetivoMapper;
        this.usuarioRepo = usuarioRepo;
    }

    public ObjetivoResponse create(ObjetivoRequest request) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();

        Usuario usuario = usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Objetivo objetivo = objetivoMapper.toEntity(request);
        objetivo.setUsuario(usuario);

        objetivoRepo.save(objetivo);

        return objetivoMapper.toResponse(objetivo);
    }


    // Obtener todos los objetivos ordenados
    public List<ObjetivoResponse> getAll() {

        // 1. Obtener email del usuario autenticado
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        // 2. Buscar usuario
        Usuario usuario = usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // 3. Devolver SOLO sus objetivos
        return objetivoRepo.findByUsuarioOrderByAnioAscMesAsc(usuario)
                .stream()
                .map(objetivoMapper::toResponse)
                .toList();
    }


    // Buscar objetivo por mes y año
    public Objetivo findByMesAnio(int mes, int anio) {
        return objetivoRepo.findByMesAndAnio(mes, anio)
                .orElseThrow(() -> new NotFoundException("Objetivo no encontrado para " + mes + "/" + anio));
    }
}
