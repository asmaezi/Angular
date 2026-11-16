import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Importe CommonModule

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule], // 2. Ajoute CommonModule dans les imports ici !
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  tasks = [
    { id: 1, title: 'Lire le cours' }
  ];
}