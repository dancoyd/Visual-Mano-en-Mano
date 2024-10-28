// document.getElementById('conteiner').addEventListener('submit', function (e) {
//     e.preventDefault();




//     const datosFormulario = new FormData(e.target);


//     const datos = Object.fromEntries(datosFormulario.entries());
    
//     let imagenes;
//     fetch('', {
//         method: 'GET',
//         // headers: {
//         //     'Content-Type': 'application/json'
//         // },
//         // body: JSON.stringify(datos)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         alert('Formulario enviado exitosamente');
//         imagenes = data;

//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Hubo un error al enviar el formulario');
//     });
// });

var imagenes = [
    "miami3.jpg", "miami2.jpg", "viena.jpg"
]

const carrusel = document.getElementById('contentitemscarrusel');
imagenes.forEach((imagen, index) =>  {
    carrusel.innerHTML += `
    <div class="conteiner" id="conteiner-${index + 1}">
        <div class="tarjetacarrusel" id="tajetacarrusel-${index + 1}">
            <img src="${imagen}" />
        </div>
        <div class="flechascarrusel">
            <a href="#conteiner-${index === 0 ? imagenes.length : index}">
                <i class="fa-solid fa-circle-left"></i>
            </a>
            <a href="#conteiner-${index === imagenes.length - 1 ? 1 : index + 2}">
                <i class="fa-solid fa-circle-right"></i>
            </a>
        </div>
    </div>
    `
});