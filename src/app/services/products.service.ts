import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { IProduct } from "../model/product";

@Injectable({
    providedIn: 'root'
})

export class ProductsServise {
    constructor(private http: HttpClient) {

    }

    getAll(): Observable<IProduct[]> {
       return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
    }
}