import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-catalogue',
  imports: [ProductCard],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.scss',
})
export class Catalogue {
  produits = signal<{ id: number; nom: string; prix: number }[]>([
    { id: 1, nom: 'Casque audio', prix: 249 },

    { id: 2, nom: 'Souris sans fil', prix: 89 },

    { id: 3, nom: 'Clavier mécanique', prix: 399 },

    { id: 4, nom: 'Tapis de souris', prix: 49 },
  ]);

  ajouter(produitId: number) {
    this.produits.update((liste) => liste.filter((produit) => produit.id !== produitId));
  }
}
