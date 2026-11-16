import { Routes } from '@angular/router';
import { Task } from './task/task';
import { About } from './about/about';
import { Header } from './header/header';

export const routes: Routes = [
  { path: 'task', component: Task },
  { path: 'about', component: About },
  { path: 'header', component: Header }
];