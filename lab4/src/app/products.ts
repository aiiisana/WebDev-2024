export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  kaspiLink: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 15',
    price: 717,
    description:
        'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
    imageURL:
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    kaspiLink:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      rating: 4.5,
  },
  {
    id: 2,
    name: 'AirPods 2nd generation',
    price: 119,
    description: 'A great headphones and easy to use.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
      rating: 5.0,
  },
  {
    id: 3,
    name: 'USB Type-C - Lightning',
    price: 5,
    description: 'Necessary accessory for Apple ecossystem.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000',
      rating: 5.0,
  },
  {
    id: 4,
    name: 'Apple EarPods Lightning',
    price: 18,
    description: 'Cool headphones',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000',
      rating: 5.0,
  },
  {
    id: 5,
    name: 'Apple Watch SE 40 мм',
    price: 285,
    description:
        'Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
      rating: 5.0,
  },
  {
    id: 6,
    name: 'Apple Pencil 2nd Generation',
    price: 129,
    description: 'Awesome stilus for your iPad.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h71/63829302345758.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-pencil-2nd-generation-60900001/?c=750000000',
      rating: 5.0,
  },
  {
    id: 7,
    name: 'iPad 2021 Wi-Fi 10.2 in',
    price: 359,
    description:
        'Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000',
      rating: 5.0,
  },
  {
    id: 8,
    name: 'AirPods Max',
    price: 599,
    description:
        'Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000',
      rating: 5.0,
  },
  {
    id: 9,
    name: 'Magic Mouse 2 (USB-C)',
    price: 69,
    description:
        'Мышь Magic Mouse 2 получила не только новый дизайн, но и возможность перезарядки. А это значит, что вам больше не нужны обычные батарейки.',
      imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/h95/he9/81177555337246.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000',
      rating: 5.0,
  },
  {
    id: 10,
    name: 'MacBook Air 13 MGND3',
    price: 919,
    description:
        'Невероятно тонкий (всего 41 мм в самом тонком месте) и лёгкий (1,29 кг), он работает совершенно бесшумно, а для зарядки компьютера достаточно адаптер мощностью 30 Вт.',
    imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000',
      rating: 5.0,
  },
  {
    id: 11,
    name: 'Apple Lightning - 3.5 mm jack 0.07 м',
    price: 2.5,
    description:
        'Этот адаптер позволяет подключать аксессуары с разъёмом 3,5 мм к устройствам с разъёмом Lightning.',
      imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/hb8/64232875196446.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/perehodnik-apple-lightning---3-5-mm-jack-0-07-m-101121766/?c=750000000',
      rating: 5.0,
  },
  {
    id: 12,
    name: 'Apple Airtag',
    price: 30,
    description:
        'AirTag — это суперлёгкий способ находить свои вещи. Прикрепите один трекер AirTag к ключам, а другой — к рюкзаку. И теперь их видно на карте в приложении «Локатор».',
      imageURL: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h44/64238812921886.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=750000000',
      rating: 5.0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
