package com.greentrack.api.service.consumo;

import com.greentrack.api.dto.consumo.ConsumoRequest;
import com.greentrack.api.dto.consumo.ConsumoResponse;
import com.greentrack.api.errors.exceptions.NotFoundException;
import com.greentrack.api.mapper.consumo.ConsumoMapper;
import com.greentrack.api.model.consumo.Consumo;
import com.greentrack.api.model.usuario.Usuario;
import com.greentrack.api.repository.consumo.ConsumoRepository;
import com.greentrack.api.repository.usuario.UsuarioRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsumoService {

    private final ConsumoRepository consumoRepo;
    private final ConsumoMapper consumoMapper;
    private final UsuarioRepository usuarioRepo;


    public ConsumoService(ConsumoRepository consumoRepo,
                          ConsumoMapper consumoMapper,
                          UsuarioRepository usuarioRepo) {
        this.consumoRepo = consumoRepo;
        this.consumoMapper = consumoMapper;
        this.usuarioRepo = usuarioRepo;
    }


    // Crear un nuevo consumo
    public ConsumoResponse create(ConsumoRequest request) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();

        Usuario usuario = usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Consumo consumo = consumoMapper.toEntity(request);
        consumo.setUsuario(usuario);

        consumoRepo.save(consumo);

        return consumoMapper.toResponse(consumo);
    }


    // Obtener todos los consumos ordenados
    public List<ConsumoResponse> getAll() {

        // 1. Obtener email del usuario autenticado
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        // 2. Buscar usuario
        Usuario usuario = usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // 3. Devolver solo sus consumos
        return consumoRepo.findByUsuarioOrderByAnioAscMesAsc(usuario)
                .stream()
                .map(consumoMapper::toResponse)
                .toList();
    }


    // Buscar consumo por ID
    public Consumo findById(Long id) {
        return consumoRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Consumo no encontrado con ID: " + id));
    }

    // Eliminar consumo
    public void delete(Long id) {
        Consumo consumo = findById(id);
        consumoRepo.delete(consumo);
    }
}
