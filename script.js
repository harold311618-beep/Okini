function calcularPrecio(precioUnitario, catidad) {
    const total = precioUnitario * cantidad;
    return total;}

function puedereservar(cantidad) {return cantidad <= 2;}

const botonReservar = document.querySelector("#reservarTaza");
const contadorTazas = document.querySelector("#contadorTazas");

// Función de validación (asegúrate de tenerla definida así)
function puedereservar(tazas) {
    return tazas > 0; 
}

botonReservar.addEventListener("click", function() {
    // 1. Convertimos el texto actual a número de forma segura
    const tazasActuales = Number(contadorTazas.textContent);

    // 2. Validamos si quedan tazas disponibles
    if (puedereservar(tazasActuales)) {
        // 3. Restamos 1 y actualizamos el contenedor de texto
        const nuevasTazas = tazasActuales - 1;
        contadorTazas.textContent = nuevasTazas;

        // 4. Si con esta última reserva llegamos a 0, desactivamos el botón de una vez
        if (nuevasTazas === 0) {
            botonReservar.textContent = "No hay tazas disponibles";
            botonReservar.disabled = true;
        }
    } else {
        // Bloque de seguridad por si acaso se intenta clickear cuando ya está en 0
        botonReservar.textContent = "No hay tazas disponibles";
        botonReservar.disabled = true;
    }
});
