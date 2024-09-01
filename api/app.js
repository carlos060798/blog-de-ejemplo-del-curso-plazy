const express = require('express');
const app = express();
const port = 5000; // Puedes cambiar este puerto si lo deseas

// Endpoint para obtener la información de las personas
app.get('/personas', (req, res) => {
  const personas = [
    { id: 1, nombre: 'Juan Pérez', edad: 30 },
    { id: 2, nombre: 'Ana Gómez', edad: 25 },
    { id: 3, nombre: 'Luis Rodríguez', edad: 40 }
  ];
  res.json(personas);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API de personas escuchando en http://localhost:${port}`);
});
