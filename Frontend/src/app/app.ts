import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegador } from './componentes/navegador/navegador';

@Component({
  imports: [RouterOutlet, Navegador],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Frontend');
}
