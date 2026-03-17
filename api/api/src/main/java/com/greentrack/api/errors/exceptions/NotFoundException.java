package com.greentrack.api.errors.exceptions;

// PARA RECURSOS NO ENCONTRADOS
// Se lanza cuando un ID o un recurso no existe en la base de datos.
public class NotFoundException extends RuntimeException {

    public NotFoundException(String message) {
        super(message);
    }
}
