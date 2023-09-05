// Obtén una referencia al formulario y al botón "ini"
const formulario = document.getElementById('exampleModal1');
const botonIni = document.getElementById('ini');

// Cuando se envía el formulario
formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
  // Aquí puedes realizar cualquier lógica de procesamiento de formulario necesaria
  
  // Oculta el botón "ini"
  botonIni.style.display = 'none';
  window.location.href = './pages/inicio.html'; // Cambia 'nueva_pagina.html' a la URL a la que deseas redirigir
});


// Abre el modal cuando se hace clic en el botón "ini"
botonIni.addEventListener('click', function () {
  const modal = document.getElementById('exampleModal1');
  modal.style.display = 'block';
});

// Cierra el modal cuando se hace clic en la "X" o fuera del modal
document.getElementById('cerrarModal').addEventListener('click', function () {
  const modal = document.getElementById('exampleModal1');
  modal.style.display = 'none';
});
  // Redirecciona a otra página


window.addEventListener('click', function (e) {
  const modal = document.getElementById('exampleModal1');
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
