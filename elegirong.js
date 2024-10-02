document.getElementById('conteiner').addEventListener('submit', function (e) {
    e.preventDefault();




    const datosFormulario = new FormData(e.target);


    const datos = Object.fromEntries(datosFormulario.entries());
    
    let imagenes;
    fetch('', {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Formulario enviado exitosamente');
        imagenes = data;

    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario');
    });
});

const carrusel = document.getElementById('contentitemscarrusel');
for (imagen in imagenes) {
    carrusel.innerHTML += `
    <div class="conteiner" id="conteiner-1">
        <div class="tarjetacarrusel" id="tajetacarrusel-1">
            <img src=${imagen} />
        </div>
        <div class="flechascarrusel">
            <a href="#conteiner-3">
                <i class="fa-solid fa-circle-left"></i>            </a>
            <a href="#conteiner-2">
                <i class="fa-solid fa-circle-right"></i>            </a>
        </div>
    </div>
    `
}

"[imagen1, imagen2, imagen3]"
