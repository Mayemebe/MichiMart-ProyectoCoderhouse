const container = document.getElementById("container");
const carrito = document.getElementById("carrito");

let mostrar = false;

let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarCarrito(id) {
    const agregarArticulo = articulos.find(el => el.id === id);
    if (carritoCompras.some(element => element.id === agregarArticulo.id)) {
        alert("El artículo ya está agregado");
    } else {
        carritoCompras.push(agregarArticulo);
        localStorage.setItem("carrito", JSON.stringify(carritoCompras));
        alert("Producto agregado al carrito: " + agregarArticulo.producto);
        
        let total = 0;
        let mensaje = "Tu carrito actual es:\n";
        carritoCompras.forEach(item => {
            mensaje += item.producto + " (" + item.color + ") - " + item.tamaño + " - $" + item.precio + "\n";
            total += item.precio;
        });

        mensaje += "Total: $" + total;
        alert(mensaje);

        document.getElementById('totalCarrito').textContent = "Total: $" + total;
    }
}
     

function mostrarProductosEnCarrito() {
    carrito.innerHTML = ""; 
    carritoCompras.forEach(producto => {
        const item = document.createElement("p");
        item.innerText = producto.producto;
        carrito.appendChild(item);
    });
}

function crearCard(producto) {
    const cardContainer = document.createElement("div");
    cardContainer.className ="cardContainer";
    
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
        mostrarProductosEnCarrito(); 
    };

    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(precio);
    card.appendChild(botonAgregar);

    container.appendChild(card);
};

articulos.forEach(el => crearCard(el));


function vaciarCarrito(index){
    carritoCompras = [];
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
    document.getElementById('totalCarrito').textContent = "Total: $0";
    mostrarProductosEnCarrito();
};

const vaciarCarritoBtn = document.createElement("button");
vaciarCarritoBtn.innerText ="Vaciar carrito";


vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
document.body.appendChild(vaciarCarritoBtn);
vaciarCarritoBtn.className = "botonVaciar"



