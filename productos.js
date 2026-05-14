// Definimos los productos con categoría e imagen
const productos = [
    { id: 1, nombre: "Lechuga Orgánica", categoria: "verduras", precio: 3.50, img: "lechuga.jpg" },
    { id: 2, nombre: "Cilantro Fresco", categoria: "verduras", precio: 1.50, img: "cilantro.jpg" },
    { id: 3, nombre: "Pepino", categoria: "verduras", precio: 2.00, img: "pepino.jpg" },
    { id: 4, nombre: "Mango", categoria: "frutas", precio: 5.00, img: "mango.jpg" }
];

// Función para filtrar por categoría
export function filtrarProductos(categoria = 'todos') {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = ''; // Limpiamos el contenedor

    const filtrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);

    filtrados.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.nombre}" style="width:100px;">
                <h3>${p.nombre}</h3>
                <p>S/ ${p.precio.toFixed(2)}</p>
                <button onclick="agregarAlCarrito(${p.id})">Agregar al Carrito</button>
            </div>
        `;
    });
}

// Lógica para el carrito (definida en window para que el HTML la encuentre)
window.agregarAlCarrito = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito`);
};

// Agrega esto en js/productos.js
window.mostrarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let html = "<h2>Tu Carrito</h2>";
    let total = 0;

    carrito.forEach(p => {
        html += `<p>${p.nombre} - S/${p.precio.toFixed(2)}</p>`;
        total += p.precio;
    });

    html += `<h3>Total: S/${total.toFixed(2)}</h3>`;
    html += `<button onclick="window.location.href='pago.html'">Pagar con Yape</button>`;
    
    // Crear o mostrar el modal (simplificado)
    alert(html.replace(/<\/?[^>]+(>|$)/g, " ")); // Aquí podrías usar un div oculto para mejor diseño
};

// Función que actualiza el número en el icono del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.getElementById('cart-count');
    if (contador) {
        contador.innerText = carrito.length;
    }
}

// Llama a esto cada vez que agregas algo
window.agregarAlCarrito = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    actualizarContadorCarrito(); // ¡Aquí actualizamos el número!
    alert(`${producto.nombre} agregado`);
};

// Cargar el contador al abrir cualquier página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);