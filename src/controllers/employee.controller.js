const employeeCtrl = {};
const Employee = require("../models/Employee");

// Obtener todos los empleados
employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

// Crear un nuevo empleado
employeeCtrl.createEmployee = async (req, res) => {
const newEmployee = new Employee({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    cargo: req.body.cargo,
    area: req.body.area,
    salario: req.body.salario,
    email: req.body.email,
});
await newEmployee.save();
res.json({ status: "Empleado guardado exitosamente" });
};

// Obtener un solo empleado por ID
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

// Actualizar un empleado
employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const updatedEmployee = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cargo: req.body.cargo,
        area: req.body.area,
        salario: req.body.salario,
        email: req.body.email,
    };
    await Employee.findByIdAndUpdate(id, { $set: updatedEmployee }, { new: true });
    res.json({ status: "Empleado actualizado" });
};

// Eliminar empleado
employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ status : "Empleado eliminado" });
};

module.exports = employeeCtrl;











