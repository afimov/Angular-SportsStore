import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import { Cart } from "../model/cart.model";

@Component({
  selector: "store",
  moduleId: module.id,
  templateUrl: "store.component.html"
})
export class StoreComponent {
  public selectedCategory = null;

  constructor(private repository: ProductRepository,
              private cart: Cart) {}

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
