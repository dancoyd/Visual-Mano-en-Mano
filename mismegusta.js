

// Ejemplo de cómo mostrar las imágenes en la página
const container = document.getElementById('image-container'); // Asegúrate de tener este div en tu HTML

fetch('https://proyecto-donaciones-six.vercel.app')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {

  // Crear un div para agrupar el título, la imagen y la descripción
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('image-item'); // Agregar la clase para aplicar los estilos

  // Crear los elementos para mostrar en la página
  const titleElement = document.createElement('h3');
  titleElement.textContent = item.title;

  const imageElement = document.createElement('img');
  imageElement.src = item.imagen;
  imageElement.alt = item.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = item.description ? item.description : ''; // Solo agrega la descripción si existe

  // Agregar los elementos al div contenedor
  itemContainer.appendChild(titleElement);
  itemContainer.appendChild(imageElement);
  itemContainer.appendChild(descriptionElement);

  // Agregar el contenedor del ítem al contenedor principal
  container.appendChild(itemContainer);
});
})
.catch(error => {
    console.error('Hubo un problema con el fetch:', error);
});