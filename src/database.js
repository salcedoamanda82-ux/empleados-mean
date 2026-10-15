const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/empleados-db";

mongoose.connect(URI)
.then(db => console.log("Base de datos conectada exitosamente"))
.catch(err => console.error("Error al conectar la base de datos:", err));

module.exports =mongoose;
