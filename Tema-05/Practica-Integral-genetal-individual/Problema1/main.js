var tabla = [
    {
        lacteo: "Leche",
        porcion: "200 cc (1 vaso)",
        contCalcio: 280
    },
    {
        lacteo: "Yogurt bebible",
        porcion: "200 cc (1 vaso)",
        contCalcio: 180
    },
    {
        lacteo: "Yogurt firme",
        porcion: "190 g (1 pote)",
        contCalcio: 203
    },
    {
        lacteo: "Postre",
        porcion: "125 g (1 pote)",
        contCalcio: 143
    },
    {
        lacteo: "Queso rallado",
        porcion: "8 g (1 cucharada sopera)",
        contCalcio: 104
    },
];

function identificarLacteoDeMayorContenidoDeCalcio() {
    let nombreLacteo;
    let mayor = 0;

    for (lacteos of tabla) {
        if (lacteos.contCalcio > mayor){
            console.log("El contenido de calcio de " + lacteos.lacteo + " es de: " + lacteos.contCalcio + ", que es mayor a " + mayor + ", que contenía el anterior producto lacteo");
            mayor = lacteos.contCalcio;
            nombreLacteo = lacteos.lacteo;
        } else {
            console.log("El contenido de calcio de " + lacteos.lacteo + " es de: " + lacteos.contCalcio + ", que es menor a " + mayor + ", que conttiene el actual producto lacteo");
        }
    }

    return nombreLacteo;
}

console.log("El producto de mayor contenido calcio es: " + identificarLacteoDeMayorContenidoDeCalcio());