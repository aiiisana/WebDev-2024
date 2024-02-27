import { Component } from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    const choice = window.prompt('Do you want to share via WhatsApp? (yes/no)', '');
    if (choice === 'yes') {
      const message = `Посмотрите на этот товар: ${product.name} \n ${product.kaspiLink}`;
      const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
      window.alert('The product has been shared!');
    } else {
      window.alert('The product will be shared via Telegram')
      const message = `Посмотрите на этот товар: ${product.name} \n ${product.kaspiLink}`;
      const telegramUrl = `https://t.me/share/url?url=${product.kaspiLink}&text=Посмотрите на этот товар: ${product.name}`;

      window.open(telegramUrl, '_blank');
      window.alert('The product has been shared!');
    }
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale.');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
