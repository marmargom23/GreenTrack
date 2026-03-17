package com.greentrack.api.controller.consumo;

import com.greentrack.api.dto.consumo.ConsumoRequest;
import com.greentrack.api.dto.consumo.ConsumoResponse;
import com.greentrack.api.service.consumo.ConsumoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consumos")
@CrossOrigin(origins = "*")
public class ConsumoController {

    private final ConsumoService consumoService;

    public ConsumoController(ConsumoService consumoService) {
        this.consumoService = consumoService;
    }

    // Crear consumo
    @PostMapping
    public ConsumoResponse create(@RequestBody ConsumoRequest request) {
        return consumoService.create(request);
    }

    // Obtener todos los consumos
    @GetMapping
    public List<ConsumoResponse> getAll() {
        return consumoService.getAll();
    }

    // Eliminar consumo
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        consumoService.delete(id);
    }
}
