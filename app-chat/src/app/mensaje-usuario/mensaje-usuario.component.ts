import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css',
})
export class MensajeUsuarioComponent {
  @Input() user: User = { name: '' };
  mensaje: string = '';
  @Output() mensajeListo = new EventEmitter<{
    mensaje: string;
    user: User;
  }>();

  mandarMensaje() {
    this.mensajeListo.emit({
      mensaje: this.mensaje,
      user: this.user,
    });
    this.mensaje = '';
  }
}
