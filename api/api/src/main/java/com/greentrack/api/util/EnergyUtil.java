package com.greentrack.api.util;

public class EnergyUtil {

    // Calcula el porcentaje de consumo respecto al objetivo
    public static double porcentajeConsumo(double consumo, double objetivo) {
        if (objetivo <= 0) return 0;
        return (consumo / objetivo) * 100;
    }

    // Calcula si el consumo supera el objetivo
    public static boolean superaObjetivo(double consumo, double objetivo) {
        return consumo > objetivo;
    }

    // Calcula la diferencia entre consumo y objetivo
    public static double diferencia(double consumo, double objetivo) {
        return consumo - objetivo;
    }
}
