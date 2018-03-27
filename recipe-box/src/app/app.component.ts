import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Nano's Recipe Box";
  currentTime = new Date ();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', 'Flour, butter, chocolate chips', '1. Buy Ingredients 2. Bake'),
    new Recipe('Banana Bread', 'Banana, Flour, Butter', '1. Buy Things 2. Bake'),
    new Recipe('Chicken Noodle Soup', 'Chicken, Noodles, Broth', '1.Buy Things 2. Cook')
  ];
}
