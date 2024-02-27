import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  categories = ["Phones", "Headphones", "Accessories", "Laptops and Tablets"];

  selectedCategory: string | null = null;

  onSelectCategory(category: string) {
    this.selectedCategory = category;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
