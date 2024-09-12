document.getElementById('conteiner').addEventListener('botoniniciarsesion', function (e) {
    e.preventDefault();




    const datosFormulario = new FormData(e.target);


    const datos = Object.fromEntries(datosFormulario.entries());


   
    fetch('https://linkdelback.app/', {
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