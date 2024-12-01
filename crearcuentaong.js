document.getElementById('conteiner').addEventListener('submit', function (e) {
    e.preventDefault();

    const datosFormulario = new FormData(e.target);
    const datos = Object.fromEntries(datosFormulario.entries());

    const host = 'http://127.0.0.1:3000' //'https://proyecto-donaciones-six.vercel.app'
    fetch(`${host}/ongosc`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Formulario enviado exitosamente');
            // Redirigir a la página de subir foto de perfil
            window.location.href = './iniciarsesionong.html'; // Redirigir al usuario al login
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        });
});