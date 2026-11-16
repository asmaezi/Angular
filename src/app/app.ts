import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'; // 1. Importe ton composant Header

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header], // 2. Ajoute Header dans les imports ici !
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'test';
}