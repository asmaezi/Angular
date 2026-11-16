import { Routes } from '@angular/router';
import { Task } from './task/task';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'task', component: Task },
  { path: 'about', component: About }
];