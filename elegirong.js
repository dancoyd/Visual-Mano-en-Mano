
const carrusel = document.getElementById('contentitemscarrusel');
fetch('./imagens.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((item, index) => {
            carrusel.innerHTML += `
            <div class="conteiner" id="conteiner-${index + 1}">
                <div class="tarjetacarrusel" id="tajetacarrusel-${index + 1}">
                    <img src="${item.url}" alt="Imagen ${index + 1}" />
                    <div class="titulo-imagen">${item.title}</div>
                    <div class="numero">${item.number}</div>
                    <div class="email">${item.email}</div>
                </div>
                <div class="flechascarrusel">
                    <a href="#conteiner-${index === 0 ? data.length : index}">
                        <img src= "iconofelcha.png" class="flechaiz" >
                    </a>
                    <a href="#conteiner-${index === data.length - 1 ? 1 : index + 2}">
                    <img src= "iconofelcha.png" class="flechader" >
                    </a>
                </div>
            </div>
            `;
        });
    })
    .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
    });