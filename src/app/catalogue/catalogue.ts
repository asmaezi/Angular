import { Component, signal } from '@angular/core';
import { ProductCard, Produit } from '../product-card/product-card';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  produits = signal<Produit[]>([
    { id: 1, nom: 'Casque audio', prix: 249 },
    { id: 2, nom: 'Souris sans fil', prix: 89 },
    { id: 3, nom: 'Clavier mécanique', prix: 399 },
    { id: 4, nom: 'Tapis de souris', prix: 49 },
  ]);

  panier = signal<Produit[]>([]);

  ajouter(produit: Produit) {
    this.panier.update((liste) => [...liste, produit]);
  }
}