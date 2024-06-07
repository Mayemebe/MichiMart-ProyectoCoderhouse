const url = 'https://establo.mx/api.php';
const apiKey = '7d8f9s0d7f98sd7f98s7df';
const apiSecret = 'pXN3tQZvbHjgs5fR2nYDz6TqL8m1kE';

// Configurar encabezados
const headers = {
    'ApiKey': apiKey,
    'ApiSecret': apiSecret
};

// Configurar la solicitud
const requestOptions = {
    method: 'GET',
    headers: headers,
    mode: "cors",
};

// Hacer la solicitud
fetch(url, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Manejar los datos devueltos por la API
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud fetch:', error.message);
    });



// fetch("https://establo.mx/api.php")
// .then(response => response.json())
// .then(data => console.log(data))


const container = document.getElementById("container");
const carrito = document.getElementById("carrito");

let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(id) {
    const agregarArticulo = articulos.find(el => el.id === id);
    const productoEnCarrito = carritoCompras.find(element => element.id === agregarArticulo.id);

    if (productoEnCarrito) {
        // Incrementar la cantidad del producto en el carrito
        productoEnCarrito.cantidad += 1;
    } else {
        // Añadir nuevo producto al carrito con cantidad 1
        carritoCompras.push({ ...agregarArticulo, cantidad: 1 });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Producto añadido al carrito!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    // Guardar carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
    // Actualizar la visualización del carrito
    actualizarCarritoVisual();
}

function mostrarProductosEnCarrito() {
    carrito.innerHTML = ""; 
    carritoCompras.forEach(producto => {
        const item = document.createElement("p");
        item.innerText = `${producto.producto} (${producto.color}) - ${producto.tamaño} - $${producto.precio} x ${producto.cantidad}`;
        carrito.appendChild(item);
    });
}

function actualizarCarritoVisual() {
    mostrarProductosEnCarrito();

    let total = carritoCompras.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    document.getElementById('totalCarrito').textContent = `Total: $${total}`;
}

function crearCard(producto) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "cardContainer";
    
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("p");
    titulo.innerText = producto.producto;

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.className = "imagen";

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio}`;
    precio.className = "titulo";

    const botonAgregar = document.createElement("button");
    botonAgregar.innerText = "Agregar";
    botonAgregar.className = "btn-add";
    botonAgregar.onclick = () => {
        agregarCarrito(producto.id);
    };

    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(precio);
    card.appendChild(botonAgregar);

    container.appendChild(card);
}

articulos.forEach(el => crearCard(el));

function vaciarCarrito() {
    carritoCompras = [];
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
    actualizarCarritoVisual();
}

const vaciarCarritoBtn = document.createElement("button");
vaciarCarritoBtn.innerText = "Vaciar carrito";
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
document.body.appendChild(vaciarCarritoBtn);
vaciarCarritoBtn.className = "botonVaciar";

// Crear y añadir el elemento para mostrar el total del carrito
const totalCarrito = document.createElement("p");
totalCarrito.id = "totalCarrito";
document.body.appendChild(totalCarrito);

actualizarCarritoVisual();


