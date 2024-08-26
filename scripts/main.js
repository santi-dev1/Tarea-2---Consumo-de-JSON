fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById('tabla-personajes').getElementsByTagName('tbody')[0];
        data.forEach(personaje => {
            const fila = tabla.insertRow();
            fila.insertCell(0).textContent = personaje.id;
            fila.insertCell(1).textContent = personaje.nombre;
            fila.insertCell(2).textContent = personaje.casa;
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));