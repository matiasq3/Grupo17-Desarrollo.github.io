// Obtener el ID del producto del botón
const productId = event.target.dataset.productId;

// Crear un objeto de producto
const product = {
    id: productId,
    name: "Nombre del producto",
    price: 10,
    quantity: 1
};

// Agregar el producto al carrito
const cart = document.getElementById("cart");
const products = cart.querySelector("#products");
products.appendChild(document.createElement("div").textContent = product.name);

// Actualizar el total del carrito
const total = cart.querySelector("#total");
total.textContent = product.price * product.quantity;
