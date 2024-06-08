const url = "https://establo.mx/api.php";
const apiKey = "7d8f9s0d7f98sd7f98s7df";
const apiSecret = "pXN3tQZvbHjgs5fR2nYDz6TqL8m1kE";

const headers = {
  ApiKey: apiKey,
  ApiSecret: apiSecret,
};

const requestOptions = {
  method: "GET",
  headers: headers,
};

fetch(url, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((el) => crearCard(el));
  })
  .catch((error) => {
    console.error("Hubo un problema con la solicitud fetch:", error.message);
  });

const container = document.getElementById("container");
const carrito = document.getElementById("carrito");

let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(id) {
  const agregarArticulo = articulos.find((el) => el.id === id);
  const productoEnCarrito = carritoCompras.find(
    (element) => element.id === agregarArticulo.id
  );

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    carritoCompras.push({ ...agregarArticulo, cantidad: 1 });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Producto añadido al carrito!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  localStorage.setItem("carrito", JSON.stringify(carritoCompras));
  actualizarCarritoVisual();
}

function mostrarProductosEnCarrito() {
  carrito.innerHTML = "";
  carritoCompras.forEach((producto) => {
    const item = document.createElement("p");
    item.innerText = `${producto.producto} (${producto.color}) - ${producto.tamaño} - $${producto.precio} x ${producto.cantidad}`;
    carrito.appendChild(item);
  });

  carrito.classList.add("resumen-compra-contenedor");
}

function actualizarCarritoVisual() {
  mostrarProductosEnCarrito();

  let total = carritoCompras.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );
  document.getElementById("totalCarrito").textContent = `Total: $${total}`;
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

function vaciarCarrito() {
  carritoCompras = [];
  localStorage.setItem("carrito", JSON.stringify(carritoCompras));
  actualizarCarritoVisual();
}

function comprar() {
  if (carritoCompras.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Carrito vacío",
      text: "No hay productos en el carrito para comprar.",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Compra realizada",
    text: "Gracias por su compra.",
  });

  carritoCompras = [];
  localStorage.setItem("carrito", JSON.stringify(carritoCompras));
  actualizarCarritoVisual();
}

const vaciarCarritoBtn = document.createElement("button");
vaciarCarritoBtn.innerText = "Vaciar carrito";
vaciarCarritoBtn.className = "botonVaciar";
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
document.body.appendChild(vaciarCarritoBtn);
vaciarCarritoBtn.className = "botonVaciar";

const totalCarrito = document.createElement("p");
totalCarrito.id = "totalCarrito";
document.body.appendChild(totalCarrito);

const comprarBtn = document.createElement("button");
comprarBtn.innerText = "Comprar";
comprarBtn.className = "botonComprar";
comprarBtn.addEventListener("click", comprar);
document.body.appendChild(comprarBtn);
comprarBtn.className = "botonComprar";

actualizarCarritoVisual();
