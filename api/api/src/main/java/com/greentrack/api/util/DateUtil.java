package com.greentrack.api.util;

import java.time.LocalDate;
import java.time.YearMonth;

public class DateUtil {

    // Devuelve la fecha actual
    public static LocalDate hoy() {
        return LocalDate.now();
    }

    // Devuelve el número de días de un mes y año concreto
    public static int diasDelMes(int mes, int anio) {
        return YearMonth.of(anio, mes).lengthOfMonth();
    }

    // Verifica si una fecha es futura
    public static boolean esFuturo(LocalDate fecha) {
        return fecha.isAfter(LocalDate.now());
    }

    // Verifica si una fecha es pasada
    public static boolean esPasado(LocalDate fecha) {
        return fecha.isBefore(LocalDate.now());
    }
}
