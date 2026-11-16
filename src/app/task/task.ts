import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ColorPipe } from '../pipe/color-pipe';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, ColorPipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  i = 0;
  title = 'task';
  canDelete = false;
  list: { id: number; title: string; date: Date }[] = [];

  rename() {
    this.title = 'Renamed Task';
    this.canDelete = true;
  }

  delete() {
    this.title = '';
    this.canDelete = false;
  }

  addTask() {
    // Alternance entre un titre court et un titre long (> 10 lettres) pour tester les couleurs
    const sampleTitle = this.list.length % 2 === 0 ? "Court" : "Tache super longue";
    this.list.push({ 
      id: this.i++, 
      title: sampleTitle, 
      date: new Date() 
    });
    this.title = '';
  }

  deleteAllTask() {
    this.list = [];
    this.i = 0;
  }
}