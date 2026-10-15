const express = require('express');
const cors = require('cors'); // Importar cors
const mongoose = require('mongoose'); // Si usas Mongoose para la BD

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:58265' }));
app.use(express.json());

// --- AQUÍ ESTÁ LA LÍNEA CLAVE PARA CONECTAR LAS RUTAS ---
app.use('/api/empleados', require('./routes/employee.routes'));

// Conexión a la Base de Datos
mongoose.connect('mongodb://localhost/empleados-mean')
    .then(() => console.log('Base de datos conectada exitosamente'))
    .catch(err => console.error(err));

// Puerto del servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});