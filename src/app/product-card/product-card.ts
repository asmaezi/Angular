import { Component, input, output } from '@angular/core';

export interface Produit {
  id: number;
  nom: string;
  prix: number;
}

@Component({
  selector: 'app-produit-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  produit = input.required<Produit>();
  ajoute = output<Produit>();

  ajouterAuPanier() {
    this.ajoute.emit(this.produit());
  }
}