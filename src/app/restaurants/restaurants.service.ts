import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";

import { ErrorHandler } from "../app.error-handler";
import { Review } from "app/restaurant-detail/reviews/review.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

    rests: Restaurant[];

    constructor(private http: HttpClient) {}

    restaurants(search?: string): Observable<Restaurant[]> {
      let params: HttpParams = undefined;
      if (search) {
        params = new HttpParams().append('q', search);
      }
      return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
    }

    restaurantById(id: string): Observable<Restaurant> {
      return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id: string): Observable<Review[]>{
      return this.http.get<Review[]>(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}
