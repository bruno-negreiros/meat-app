import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";

import { ErrorHandler } from "../app.error-handler";
import { Review } from "app/restaurant-detail/reviews/review.model";

@Injectable()
export class RestaurantsService {

    rests: Restaurant[];

    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(restaurant => restaurant.json())
            .catch(ErrorHandler.handleError);    
    }

    reviewsOfRestaurant(id: string): Observable<Review[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(reviews => reviews.json())
            .catch(ErrorHandler.handleError);
    }
}