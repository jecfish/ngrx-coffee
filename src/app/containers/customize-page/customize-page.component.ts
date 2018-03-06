import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-page',
  templateUrl: './customize-page.component.html',
  styleUrls: ['./customize-page.component.css']
})
export class CustomizePageComponent implements OnInit {

  private defaultCoffee = {
    name: '',
    price: 0,
    recipe: []
  };

  ingredients = [
    'espresso',
    'chocolate syrup',
    'steamed milk',
    'milk foam',
    'whipped cream',
    'water'
  ];

  coffee = { ...this.defaultCoffee, recipe: this.ingredients.map(x => ({ name: x, quantity: 0 })) };

  constructor() { }

  ngOnInit() {
  }

}
