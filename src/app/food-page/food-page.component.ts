import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food/food.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Foods;

  constructor(private route: ActivatedRoute, 
    private foodService: FoodService, 
    private cartService: CartService, 
    private router: Router) 
    {
    route.params.subscribe((params) => {
      if (params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }



  ngOnInit(): void {

  }

}
