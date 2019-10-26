import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(event: MenuItem){
    this.shoppingCartService.addItem(event);
  }

}
