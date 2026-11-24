import { Component, signal, computed, effect } from '@angular/core';

export interface Article {
  id: number;
  name: string;
  available: boolean;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  private nextId = 4;

  
  articles = signal<Article[]>([
    { id: 1, name: 'hello', available: true },
    { id: 2, name: 'bonjour', available: false },
    { id: 3, name: 'bonsoir', available: true },
  ]);

  
  availableArticles = computed(() =>
    this.articles().filter((item) => item.available)
  );

  constructor() {
    effect(() => {
      console.log('Articles disponibles :', this.availableArticles());
    });
  }

  
  addArticleFromInput(input: HTMLInputElement) {
    const name = input.value.trim();
    if (!name) return;

    const newArticle: Article = {
      id: this.nextId++,
      name,
      available: true,
    };

    this.articles.update((items) => [...items, newArticle]);
    input.value = '';
  }

  addArticle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.addArticleFromInput(input);
  }

  
  resetArticles() {
    this.articles.set([]);
  }
}