package com.greentrack.api.errors.exceptions;

// PARA PETICIONES INVÁLIDAS
// Se usa cuando el usuario envía datos incorrectos o incompletos.
public class BadRequestException extends RuntimeException {

    public BadRequestException(String message) {
        super(message);
    }
}
