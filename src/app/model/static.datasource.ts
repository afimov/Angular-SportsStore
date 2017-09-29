import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

import { Product } from "./product.model";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Product1", "Category1", "Product1 (Category1)", 100),
    new Product(2, "Product2", "Category1", "Product2 (Category1)", 100),
    new Product(3, "Product3", "Category1", "Product3 (Category1)", 100),
    new Product(4, "Product4", "Category1", "Product4 (Category1)", 100),
    new Product(5, "Product5", "Category1", "Product5 (Category1)", 100),
    new Product(6, "Product6", "Category2", "Product6 (Category2)", 100),
    new Product(7, "Product7", "Category2", "Product7 (Category2)", 100),
    new Product(8, "Product8", "Category2", "Product8 (Category2)", 100),
    new Product(9, "Product9", "Category2", "Product9 (Category2)", 100),
    new Product(10, "Product10", "Category2", "Product10 (Category2)", 100),
    new Product(11, "Product11", "Category3", "Product11 (Category3)", 100),
    new Product(12, "Product12", "Category3", "Product12 (Category3)", 100),
    new Product(13, "Product13", "Category3", "Product13 (Category3)", 100),
    new Product(14, "Product14", "Category3", "Product14 (Category3)", 100),
    new Product(15, "Product15", "Category3", "Product15 (Category3)", 100)
  ];

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }
}
