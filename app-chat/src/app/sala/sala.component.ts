import { Component, OnInit } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule, FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css',
})
export class SalaComponent implements OnInit {
  mensajes: { mensaje: string; user: User }[] = [];
  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      {
        name: 'Tomas',
      },
      {
        name: 'Enzo',
      },
    ];
  }

  nuevoMensaje(event: { mensaje: string; user: User }): void {
    const nuevoMensaje = {
      mensaje: `${event.user.name}: ${event.mensaje}`,
      user: event.user,
    };
    this.mensajes.push(nuevoMensaje);
  }
}
