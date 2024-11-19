
const carrusel = document.getElementById('contentitemscarrusel');
let currentIndex = 0;

fetch('https://proyecto-donaciones-iota.vercel.app')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((item, index) => {
            carrusel.innerHTML += `
            <div class="conteiner" id="conteiner-${index + 1}">
                <div class="tarjetacarrusel" id="tarjetacarrusel-${index + 1}">
                    <img src="${item.url}" alt="Imagen ${index + 1}" />
                    <div class="titulo-imagen">${item.title}</div>
                    <div class="numero">${item.number}</div>
                    <div class="email">${item.email}</div>
                </div>
            </div>
            `;
        });

        // Agregamos los botones fuera del contenedor
        document.body.innerHTML += `
            <div class="botones-carrusel">
                <button onclick="moverIzquierda(${data.length})" class="boton-izquierdo"><img src="iconofelcha.png"></button>
                <button onclick="moverDerecha(${data.length})" class="boton-derecho"><img src="iconofelcha.png"></button>
            </div>
        `;
    })
    .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
    });

// Funciones para mover el carrusel
function moverIzquierda(totalItems) {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    document.getElementById(`conteiner-${currentIndex + 1}`).scrollIntoView({ behavior: "smooth" });
}

function moverDerecha(totalItems) {
    currentIndex = (currentIndex + 1) % totalItems;
    document.getElementById(`conteiner-${currentIndex + 1}`).scrollIntoView({ behavior: "smooth" });
}