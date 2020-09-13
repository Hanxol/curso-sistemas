var arrayProductos = [
    {
        marca: "Sancor",
        categoria: "Leche",
        precio: 50,
        contenido: 1000
    },
    {
        marca: "Sancor",
        categoria: "Yogurt",
        precio: 60,
        contenido: 1000
    },
    {
        marca: "Serenisima",
        categoria: "Yogurt",
        precio: 35,
        contenido: 500
    },
    {
        marca: "Serenisima",
        categoria: "Leche",
        precio: 30,
        contenido: 500
    },
    {
        marca: "Manaos",
        categoria: "Bebida",
        precio: 40,
        contenido: 2000,
    },
    {
        marca: "Manaos",
        categoria: "Bebida",
        precio: 15,
        contenido: 500,
    },
    {
        marca: "Jack Danniels",
        categoria: "Bebida",
        precio: 1500,
        contenido: 1000
    },
    {
        marca: "Jack Danniels",
        categoria: "Bebida",
        precio: 1100,
        contenido: 750
    },
    {
        marca: "Ayudín",
        categoria: "Limpieza",
        precio: 120,
        contenido: 1000
    },
    {
        marca: "Lisoform",
        categoria: "Limpieza",
        precio: 40,
        contenido: 150
    },
    {
        marca: "Bimbo",
        categoria: "Pan",
        precio: 75,
        contenido: 1000
    },
    {
        marca: "Casero",
        categoria: "Pan",
        precio: 65,
        contenido: 1000
    },
    {
        marca: "Cagnoli",
        categoria: "Fiambre",
        precio: 70,
        contenido: 100
    },
    {
        marca: "Queso",
        categoria: "Fiambre",
        precio: 60,
        contenido: 100
    }
];

function updatePrices() {
    // A los casos particulares que se les aplicaba un impuesto fijo o descuento se los sume o resté luego de haberles aplicado el impuesto
    // pero no estoy seguro si esa era la idea o tenía que ignorar el impuesto nuevo y aplicar el impuesto/descuento fijo
    for (producto of arrayProductos){
        console.log("///// PRODUCTO BASE, SIN ACTUALIZAR /////");
        console.log(producto);
        switch (producto.categoria) {
            case "Leche":
                producto.precio += (producto.precio * 0.15) + 2.30;
                break;
            
            case "Yogurt":
                producto.precio += (producto.precio * 0.15);
                if (producto.contenido > 500) {
                    producto.precio -= 1.25;
                }
                break;
            
            case "Bebida":
                producto.precio += (producto.precio * 0.34)
                if (producto.marca == "Jack Danniels" && producto.contenido > 750){
                    producto.precio += 25;
                }
                break;
            
            case "Limpieza":
                producto.precio += (producto.precio * 0.225)
                break;
            
            case "Pan":
                producto.precio += (producto.precio * 0.27)
                break;
            
            case "Fiambre":
                producto.precio += (producto.precio * 0.317)
                break;
            
            default:
                console.log("Error, no se reconoce la categoría: " + producto.categoria);
                break;
        }
        console.log("///// PRECIO ACTUALIZADO DEL PRODUCTO /////")
        console.log(producto.precio);
    }
}

updatePrices();