// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

const email = urlParams.get('email') || 'No proporcionado';
const nombre = urlParams.get('nombre') || 'No proporcionado';
const intereses = urlParams.getAll('intereses');

// Mapeo de valores a nombres completos
const interesesMap = {
    'calzado': 'Calzado deportivo',
    'hombre': 'Ropa para hombre',
    'mujer': 'Ropa para mujer',
    'accesorios': 'Accesorios'
};

// Convertir los valores abreviados a nombres completos
const interesesCompletos = intereses.map(interes => interesesMap[interes] || interes);

// Mostrar los resultados
document.getElementById('resultEmail').textContent = email;
document.getElementById('resultNombre').textContent = nombre;
document.getElementById('resultIntereses').textContent = 
    interesesCompletos.length > 0 ? interesesCompletos.join(', ') : 'Ninguno seleccionado';