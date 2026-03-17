package com.greentrack.api.util;

import java.text.DecimalFormat;

public class FormatUtil {

    private static final DecimalFormat df = new DecimalFormat("#.##");

    // Formatea un número a 2 decimales
    public static String dosDecimales(double valor) {
        return df.format(valor);
    }

    // Formatea un porcentaje
    public static String porcentaje(double valor) {
        return df.format(valor) + "%";
    }

    // Formatea kWh
    public static String kwh(double valor) {
        return df.format(valor) + " kWh";
    }
}
