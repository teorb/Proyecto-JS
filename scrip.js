// Este archivo ya no necesita código porque el formulario 
// se envía directamente con action="resultados.html" method="GET"
// Pero si quieres validación adicional, puedes agregar:

document.getElementById('signupForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    
    if (!email) {
        e.preventDefault();
        alert('Por favor ingresa tu email');
        return false;
    }
    
    // El formulario se enviará normalmente a resultados.html
});