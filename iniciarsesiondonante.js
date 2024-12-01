document.getElementById('conteiner').addEventListener('submit', function (e) {
    e.preventDefault();
    debugger

    const datosFormulario = new FormData(e.target);

    const datos = Object.fromEntries(datosFormulario.entries());

    console.log(JSON.stringify(datos), datos)

    const host = 'http://127.0.0.1:3000'//'https://proyecto-donaciones-six.vercel.app'
    fetch(`${host}/donantes/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        // .then(response => response.json())
        .then(response => {
            console.log('Success:', response);
            window.location.href = './landingpagedonante.html'; // Redirigir al usuario al login
            alert('Formulario enviado exitosamente');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        });
});
