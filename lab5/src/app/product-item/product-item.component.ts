import { Component, Input } from "@angular/core";

import { Product, products } from "../products";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrl: "./product-item.component.css",
})
export class ProductItemComponent {
  @Input() product!: Product;
  likeCnt: number = 0;

  share(product: Product) {
    const choice = window.prompt(
      "Do you want to share via WhatsApp? (yes/no)",
      ""
    );
    if (choice === "yes") {
      const message = `Посмотрите на этот товар: ${product.name} \n ${product.kaspiLink}`;
      const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
      window.alert("The product has been shared!");
    } else {
      window.alert("The product will be shared via Telegram");
      const message = `Посмотрите на этот товар: ${product.name} \n ${product.kaspiLink}`;
      const telegramUrl = `https://t.me/share/url?url=${product.kaspiLink}&text=Посмотрите на этот товар: ${product.name}`;

      window.open(telegramUrl, "_blank");
      window.alert("The product has been shared!");
    }
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale.");
  }

  increaseLikeCnt() {
    this.likeCnt += 1;
  }
}
