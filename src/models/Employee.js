const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
nombres: { type: String, required: true },
apellidos: { type: String, required: true },
cargo: { type: String, required: true },
area: { type: String, required: true },
salario: { type: Number, required: true },
email: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Employee", employeeSchema);