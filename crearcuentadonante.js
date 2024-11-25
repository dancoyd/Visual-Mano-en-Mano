document.getElementById('form-crear-donante').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    // Capturar los datos del formulario
    const datosFormulario = new FormData(e.target);
    const datos = Object.fromEntries(datosFormulario.entries());

  
    console.log('Datos a enviar:', datos);

    try {
        const response = await fetch('https://proyecto-donaciones-six.vercel.app/donantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });

        console.log('Estado de la respuesta:', response.status);

        // Comprobar si la respuesta fue exitosa
        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();

        console.log('Datos recibidos del backend:', data);

        // Verificar si el backend devolvió un error
        if (data.error) {
            throw new Error(data.error);
        }

        alert('¡Cuenta creada exitosamente!');
        window.location.href = './login.html';
    } catch (error) {
        console.error('Error en el proceso:', error);
        alert(`Hubo un problema al crear la cuenta: ${error.message || 'Inténtalo nuevamente.'}`);
    }
});
