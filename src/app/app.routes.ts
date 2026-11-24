import { Routes } from '@angular/router';
import { Task } from './task/task';
import { About } from './about/about';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { Catalogue } from './catalogue/catalogue';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'task', component: Task },
  { path: 'about', component: About },
  { path: 'courses', component: Courses },
  { path: 'catalogue', component: Catalogue },
];