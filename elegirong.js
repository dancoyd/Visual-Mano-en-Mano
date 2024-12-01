
const carrusel = document.getElementById('contentitemscarrusel');
let currentIndex = 0;
const idDonante = 21


const host = 'http://127.0.0.1:3000'//'https://proyecto-donaciones-six.vercel.app'
fetch(`${host}/ongosc`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((item, index) => {
            console.log(item)
            //             Codigo_postal
            // Cuit
            // Direccion
            // Done
            // Email
            // Foto_de_perfil
            // ID
            // Like
            // Numero_de_watshapp
            // Password
            // Username
            // UsernameOrganizacion
            carrusel.innerHTML += `
            <div class="conteiner" id="conteiner-${index + 1}">
                <div class="tarjetacarrusel" id="tarjetacarrusel-${index + 1}">
                    <img src="${item.Foto_de_perfil}" alt="Imagen ${index + 1}" />
                    <div class="titulo-imagen">${item.UsernameOrganizacion}</div>
                    <div class="email">${item.Email}</div>
                <button onclick="like(${idDonante},${item.ID})" class="like">Like</button>
                <button onclick="done(${idDonante},${item.ID})" class="done">Done</button>
                     
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

function like(idDonante, idOngosc) {
    console.log('like', idDonante, idOngosc)
    fetch(`${host}/Like/${idOngosc}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ IDdonante: idDonante })
    })
        // .then(response => response.json())
        .then(response => {
            console.log('Success like:', response);
            // window.location.href = './landingpagedonante.html'; // Redirigir al usuario al login
            // alert('Formulario enviado exitosamente');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        });
}

function done(idDonante, idOngosc) {
    console.log('done', idDonante, idOngosc)
    fetch(`${host}/donaciones/${idOngosc}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ IDdonante: idDonante })
    })
        // .then(response => response.json())
        .then(response => {
            console.log('Success donacion:', response);
            // window.location.href = './landingpagedonante.html'; // Redirigir al usuario al login
            // alert('Formulario enviado exitosamente');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        });
}

// Funciones para mover el carrusel
function moverIzquierda(totalItems) {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    document.getElementById(`conteiner-${currentIndex + 1}`).scrollIntoView({ behavior: "smooth" });
}

function moverDerecha(totalItems) {
    currentIndex = (currentIndex + 1) % totalItems;
    document.getElementById(`conteiner-${currentIndex + 1}`).scrollIntoView({ behavior: "smooth" });
}