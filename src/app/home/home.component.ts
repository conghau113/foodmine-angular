import { Food } from './../shared/models/food';
import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    console.log('o day ne: ', this.foods);
  }
}
