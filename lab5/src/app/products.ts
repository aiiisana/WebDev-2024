export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  kaspiLink: string;
  rating: number;
  category: string;
}

export const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 717,
    description:
      "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    rating: 4.5,
    category: "Phones",
  },
  {
    id: 2,
    name: "AirPods 2nd generation",
    price: 119,
    description: "A great headphones and easy to use.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000",
    rating: 5.0,
    category: "Headphones",
  },
  {
    id: 3,
    name: "USB Type-C - Lightning",
    price: 5,
    description: "Necessary accessory for Apple ecossystem.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000",
    rating: 5.0,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Apple EarPods Lightning",
    price: 18,
    description: "Cool headphones",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000",
    rating: 5.0,
    category: "Headphones",
  },
  {
    id: 5,
    name: "Apple Watch SE 40 мм",
    price: 285,
    description:
      "Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000",
    rating: 5.0,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Apple Pencil 2nd Generation",
    price: 129,
    description: "Awesome stilus for your iPad.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/he0/h71/63829302345758.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-pencil-2nd-generation-60900001/?c=750000000",
    rating: 5.0,
    category: "Accessories",
  },
  {
    id: 7,
    name: "iPad 2021 Wi-Fi 10.2 in",
    price: 359,
    description:
      "Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000",
    rating: 5.0,
    category: "Laptops and Tablets",
  },
  {
    id: 8,
    name: "AirPods Max",
    price: 599,
    description:
      "Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000",
    rating: 5.0,
    category: "Headphones",
  },
  {
    id: 9,
    name: "Magic Mouse 2 (USB-C)",
    price: 69,
    description:
      "Мышь Magic Mouse 2 получила не только новый дизайн, но и возможность перезарядки. А это значит, что вам больше не нужны обычные батарейки.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h95/he9/81177555337246.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000",
    rating: 5.0,
    category: "Accessories",
  },
  {
    id: 10,
    name: "MacBook Air 13 MGND3",
    price: 919,
    description:
      "Невероятно тонкий (всего 41 мм в самом тонком месте) и лёгкий (1,29 кг), он работает совершенно бесшумно, а для зарядки компьютера достаточно адаптер мощностью 30 Вт.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000",
    rating: 5.0,
    category: "Laptops and Tablets",
  },
  {
    id: 11,
    name: "Apple Lightning - 3.5 mm jack 0.07 м",
    price: 2.5,
    description:
      "Этот адаптер позволяет подключать аксессуары с разъёмом 3,5 мм к устройствам с разъёмом Lightning.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/ha5/hb8/64232875196446.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/perehodnik-apple-lightning---3-5-mm-jack-0-07-m-101121766/?c=750000000",
    rating: 5.0,
    category: "Accessories",
  },
  {
    id: 12,
    name: "Apple Airtag",
    price: 30,
    description:
      "AirTag — это суперлёгкий способ находить свои вещи. Прикрепите один трекер AirTag к ключам, а другой — к рюкзаку. И теперь их видно на карте в приложении «Локатор».",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h41/h44/64238812921886.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=750000000",
    rating: 5.0,
    category: "Accessories",
  },
  {
    id: 13,
    name: "iPhone 13",
    price: 690,
    description:
      "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Phones",
  },
  {
    id: 14,
    name: "iPhone 14",
    price: 760,
    description: "Not super cool now, but pretty legit choice",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 4.1,
    category: "Phones",
  },
  {
    id: 15,
    name: "iPhone 13 зеленый",
    price: 659,
    description: "Cool and green",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Phones",
  },
  {
    id: 16,
    name: "iPhone 11",
    price: 499,
    description: "Very old. Don't buy it.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 4.7,
    category: "Phones",
  },
  {
    id: 17,
    name: "iPhone 12",
    price: 519,
    description: "Strange choice in 2024",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/ha2/h22/63953215094814.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-iphone-12-64gb-krasnyi-100656841/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Phones",
  },
  {
    id: 18,
    name: "MacBook Air 15",
    price: 1299,
    description: "Apple MacBook Air 15 2023 MQKW3. Krutoi laptop",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Laptops and Tablets",
  },
  {
    id: 19,
    name: "MacBook Pro 14 MRX33",
    price: 2399,
    description: "Even cooler.",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Laptops and Tablets",
  },
  {
    id: 20,
    name: "AirPods 3 with Lightning Charging Case",
    price: 199,
    description: "Приятные в ушах и хорошая звукопередача",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Headphones",
  },
  {
    id: 21,
    name: "AirPods Pro 2nd generation with Wireless MagSafe Charging Case",
    price: 279,
    description: "Прикольные наушники с вакуумными вкладышами",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qIa9Q9GdZVRiBlsssY04qpsS52uKq3WLWatQpxjWIingKP3GoJ6tFRoCr4wQAvD_BwE",
    rating: 5.0,
    category: "Headphones",
  },
  {
    id: 22,
    name: "Apple iPad Air 2022 Wi-Fi 10.9",
    price: 640,
    description:
      "Великолепный дисплей Liquid Retina 10,9 дюйма. Инновационный чип Apple M1 обеспечивает более высокую производительность, превращая Ipad Air в мощный инструмент для творчества и мобильных игр. Технология Touch ID, передовые камеры, сверхскоростная беспроводная связь, разъём USB-C, а еще поддержка клавиатуры Magic Keyboard и Apple Pencil (2-го поколения).",
    imageURL:
      "https://resources.cdn-kaspi.kz/img/m/p/hff/h81/64382011146270.jpg?format=gallery-medium",
    kaspiLink:
      "https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-64-gb-seryi-104235453/?c=750000000",
    rating: 5.0,
    category: "Laptops and Tablets",
  },
  // {
  //   id: 23,
  //   name: "",
  //   price: ,
  //   description:
  //     "",
  //   imageURL:
  //     "",
  //   kaspiLink:
  //     "",
  //   rating: 5.0,
  //   category: "Accessories",
  // },
];
