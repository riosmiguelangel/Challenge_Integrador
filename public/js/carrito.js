const botonesAgregar = document.querySelectorAll('#add');
const botonesRestar = document.querySelectorAll('#subtract');
const entradasCantidad = document.querySelectorAll('#quantity');

for (let i = 0; i < botonesAgregar.length; i++) {
  const botonAgregar = botonesAgregar[i];
  const botonRestar = botonesRestar[i];
  const entradaCantidad = entradasCantidad[i];

  botonAgregar.addEventListener('click', () => {
    entradaCantidad.value = Number(entradaCantidad.value) + 1;
  });

  botonRestar.addEventListener('click', () => {
    const valor = Number(entradaCantidad.value);
    const resultado = valor - 1;

    if (entradaCantidad.value <= 0) {
      entradaCantidad.value = 0;
    } else {
      entradaCantidad.value = resultado;
    }
  });
}