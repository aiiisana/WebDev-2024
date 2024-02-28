import { Component } from "@angular/core";

import { Product, products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products = [...products];
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  resetCategory() {
    this.selectedCategory = null;
  }

  filterProducts(category: string | null): Product[] {
    if (!category) {
      return this.products;
    }

    return this.products.filter((product) => product.category === category);
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
