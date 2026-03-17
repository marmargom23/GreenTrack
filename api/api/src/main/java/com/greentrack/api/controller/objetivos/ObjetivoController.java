package com.greentrack.api.controller.objetivos;

import com.greentrack.api.dto.objetivos.ObjetivoRequest;
import com.greentrack.api.dto.objetivos.ObjetivoResponse;
import com.greentrack.api.service.objetivos.ObjetivoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/objetivos")
@CrossOrigin(origins = "*")
public class ObjetivoController {

    private final ObjetivoService objetivoService;

    public ObjetivoController(ObjetivoService objetivoService) {
        this.objetivoService = objetivoService;
    }

    // Crear objetivo
    @PostMapping
    public ObjetivoResponse create(@RequestBody ObjetivoRequest request) {
        return objetivoService.create(request);
    }

    // Obtener todos los objetivos
    @GetMapping
    public List<ObjetivoResponse> getAll() {
        return objetivoService.getAll();
    }

    // Obtener objetivo por mes y año
    @GetMapping("/{mes}/{anio}")
    public ObjetivoResponse getByMesAnio(
            @PathVariable int mes,
            @PathVariable int anio
    ) {
        return objetivoService
                .getAll()
                .stream()
                .filter(o -> o.getMes() == mes && o.getAnio() == anio)
                .findFirst()
                .orElse(null);
    }
}
