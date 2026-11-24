import { Component, signal, computed } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ColorPipe } from '../pipe/color-pipe';

export interface TaskItem {
  id: number;
  title: string;
  date?: Date;
}

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

  
  tasks = signal<TaskItem[]>([]);
  count = computed(() => this.tasks().length);

  rename() {
    this.title = 'Renamed Task';
    this.canDelete = true;
  }

  delete() {
    this.title = '';
    this.canDelete = false;
  }

  add(task: TaskItem) {
    this.tasks.update((items) => [...items, task]);
  }

  clear() {
    this.tasks.set([]);
  }

  addTask() {
    const sampleTitle = this.list.length % 2 === 0 ? 'Court' : 'Tache super longue';
    const newItem: TaskItem = {
      id: this.i++,
      title: sampleTitle,
      date: new Date(),
    };

    this.list.push({
      id: newItem.id,
      title: newItem.title,
      date: newItem.date ?? new Date(),
    });

  
    this.add(newItem);
    this.title = '';
  }

  deleteAllTask() {
    this.list = [];
    this.i = 0;
    this.clear();
  }
}