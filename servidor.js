const express = require('express');
const app = express();
const cuentasRoutes = require('./routes/cuentasRoutes');

const PORT = 3130;

app.use(express.json());

app.use('/', cuentasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuentas`); 
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuenta/1`); 
  console.log(`Servidor corriendo en http://localhost:${PORT}/buscar?client=Juan%20Martínez`); 
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuentasBalance`); 
});