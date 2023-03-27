import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './model/product';
import { ProductsServise } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular app';
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]> 
  term = ''

  constructor(private productsServise: ProductsServise) {

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsServise.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsServise.getAll().subscribe( products =>{
    //   this.products = products
    //   this.loading = false
    // })
  }

  

  
}
