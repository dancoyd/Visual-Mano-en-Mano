

// Ejemplo de cómo mostrar las imágenes en la página
const container = document.getElementById('image-container'); // Asegúrate de tener este div en tu HTML
const idDonante = 1
const host = 'http://127.0.0.1:3000'//'https://proyecto-donaciones-six.vercel.app'
fetch(`${host}/Like/${idDonante}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            console.log('IDongosc', item.IDongosc)
            fetch(`${host}/ongosc/${item.IDongosc}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al cargar el archivo JSON');
                    }
                    return response.json();
                })
                .then(ong => {
                    console.log(ong)

                    // Crear un div para agrupar el título, la imagen y la descripción
                    const itemContainer = document.createElement('div');
                    itemContainer.classList.add('image-item'); // Agregar la clase para aplicar los estilos

                    // Crear los elementos para mostrar en la página
                    const titleElement = document.createElement('h3');
                    titleElement.textContent = item.title;

                    const imageElement = document.createElement('img');
                    imageElement.src = ong.Foto_de_perfil;
                    imageElement.alt = ong.UsernameOrganizacion;

                    const descriptionElement = document.createElement('p');

                    // Agregar los elementos al div contenedor
                    itemContainer.appendChild(titleElement);
                    itemContainer.appendChild(imageElement);
                    itemContainer.appendChild(descriptionElement);

                    // Agregar el contenedor del ítem al contenedor principal
                    container.appendChild(itemContainer);
                })

        });
    })
    .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
    });