import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  produit = input.required<{ id: number; nom: string; prix: number }>();

  ajoute = output<number>();

  ajouterAuPanier() {
    this.ajoute.emit(this.produit().id);
  }
}
