package com.greentrack.api.validators;

import org.springframework.stereotype.Component;

import java.util.regex.Pattern;

@Component
public class EmailValidator {

    // Expresión regular para emails válidos
    private static final Pattern EMAIL_REGEX =
            Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    public boolean isValid(String email) {
        if (email == null || email.isBlank()) return false;
        return EMAIL_REGEX.matcher(email).matches();
    }
}
