const imagenesGaleria = [
    'Galeria/01.jpg',
];
const menuProductos = [
    { nombre: 'Pollo Asado', descripcion: 'Jugoso pollo asado al carbón, acompañado de guarniciones.', precio: '$120', imagen: 'Galeria/02.jpeg' },
    { nombre: 'Hamburguesa', descripcion: 'Hamburguesa artesanal con carne de res, queso y vegetales frescos.', precio: '$80', imagen: 'Galeria/03.jpg' }
];
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-items');
    if (menu) menu.innerHTML = menuProductos.map(p => `<div class="item"><img src="${p.imagen}" alt="${p.nombre}"><h3>${p.nombre}</h3><p>${p.descripcion}</p><span class="precio">${p.precio}</span></div>`).join('');
    const galeria = document.querySelector('.imagenes');
    if (galeria) galeria.innerHTML = imagenesGaleria.map(r => `<img src="${r}" alt="Foto del quiosco">`).join('');
});
