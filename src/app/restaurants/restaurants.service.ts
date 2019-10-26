import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestaurantsService {

    rests: Restaurant[];

    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json());
    }
}