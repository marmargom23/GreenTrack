package com.greentrack.api.controller.recomendaciones;

import com.greentrack.api.dto.recomendaciones.RecomendacionRequest;
import com.greentrack.api.dto.recomendaciones.RecomendacionResponse;
import com.greentrack.api.service.recomendaciones.RecomendacionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recomendaciones")
@CrossOrigin(origins = "*")
public class RecomendacionController {

    private final RecomendacionService recomendacionService;

    public RecomendacionController(RecomendacionService recomendacionService) {
        this.recomendacionService = recomendacionService;
    }

    // Crear recomendación
    @PostMapping
    public RecomendacionResponse create(@RequestBody RecomendacionRequest request) {
        return recomendacionService.create(request);
    }

    // Obtener todas las recomendaciones
    @GetMapping
    public List<RecomendacionResponse> getAll() {
        return recomendacionService.getAll();
    }
}
