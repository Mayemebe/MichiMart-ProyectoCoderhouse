const articulos = [
    {
        id: 1,
        producto: "Arenero",
        color: "Azul",
        tamaño: "mediano",
        precio: 400,
    },
    {
        id: 2,
        producto: "Arena Scoop Away",
        color: "morado",
        tamaño: "grande",
        precio: 800,
    },
    {
        id: 3,
        producto: "Alimento Minino Plus",
        color: "verde",
        tamaño: "chico",
        precio: 160,
    },
    {
        id: 4,
        producto: "Rascador Premium",
        color: "café",
        tamaño: "mediano",
        precio: 700,
    }
];

let carrito = [];
console.log("se agrega al carrito");

let elegir;

elegir = prompt("Bienvenido a MichiMart, ¿Deseas comprar algún producto?");

while (elegir !== "si" && elegir !== "no") {
    alert("Por favor ingresa si o no");
    elegir = prompt("Por favor ingresa si o no");
}

if (elegir === "si") {
    alert("¡Genial! A continuación verás nuestros productos disponibles");
    console.log(articulos);
    let todosLosProductos = articulos.map(
        (producto) => producto.producto + " (" + producto.color + ") - " + producto.tamaño + " - $" + producto.precio + "\n"
    );
    alert(todosLosProductos.join("-"));

    let seleccion;
    do {
        seleccion = prompt("Elige un producto:\n1. Arenero Premium\n2. Arena Scoop Away\n3. Alimento Minino Plus\n4. Rascador Premium\nPara salir del carrito, ingrese 0.");

        if (seleccion == "0") {
            alert("Gracias, vuelva pronto!");
            console.log("mensaje salir");
            break;
        }

        switch (seleccion) {
            case "1":
                agregarAlCarrito(articulos.find(producto => producto.id === 1));
                break;
            case "2":
                agregarAlCarrito(articulos.find(producto => producto.id === 2));
                break;
            case "3":
                agregarAlCarrito(articulos.find(producto => producto.id === 3));
                break;
            case "4":
                agregarAlCarrito(articulos.find(producto => producto.id === 4));
                break;
            default:
                alert("Selecciona una opción válida.");
                break;
        }
    } while (seleccion !== "0");
} else {
    alert("Gracias, vuelva pronto");
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert(producto.producto + " ha sido añadido al carrito.");

    let total = 0;
    let mensaje = "Tu carrito actual es:\n";
    carrito.forEach(item => {
        mensaje += item.producto + " (" + item.color + ") - " + item.tamaño + " - $" + item.precio + "\n";
        total += item.precio;
    });

    mensaje += "Total: $" + total;
    alert(mensaje);
}
