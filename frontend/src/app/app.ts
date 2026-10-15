import { Component } from '@angular/core';
import { EmpleadoComponent } from './components/empleado/empleado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadoComponent],
  template: `<app-empleado></app-empleado>`,
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'frontend';
}