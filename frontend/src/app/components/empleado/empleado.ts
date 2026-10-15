import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleado.html',
  styleUrls: ['./empleado.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      (res: any) => {
        this.empleadoService.empleados = res;
      },
      (err: any) => console.error(err)
    );
  }

  addEmpleado(form: NgForm) {
    if (form.value._id) {
      this.empleadoService.updateEmpleado(form.value).subscribe(
        (res: any) => {
          console.log(res);
          this.resetForm(form);
          this.getEmpleados();
          alert('Empleado actualizado correctamente');
        },
        (err: any) => console.error(err)
      );
    } else {
      this.empleadoService.createEmpleado(form.value).subscribe(
        (res: any) => {
          console.log(res);
          this.resetForm(form);
          this.getEmpleados();
          alert('Empleado guardado correctamente');
        },
        (err: any) => console.error(err)
      );
    }
  }

  editEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = empleado;
  }

  deleteEmpleado(_id: string, form: NgForm) {
    if (confirm('¿Estás seguro de querer eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(_id).subscribe(
        (res: any) => {
          console.log(res);
          this.getEmpleados();
          this.resetForm(form);
        },
        (err: any) => console.error(err)
      );
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = {
        nombres: '',
        apellidos: '',
        cargo: '',
        area: '',
        salario: 0,
        email: ''
      };
    }
  }
}