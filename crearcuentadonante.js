document.getElementById('conteiner').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const datosFormulario = new FormData(e.target);


    const datos = Object.fromEntries(datosFormulario.entries());


   
    fetch('https://proyecto-donaciones-iota.vercel.app', {
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
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario');
    });
});