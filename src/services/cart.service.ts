import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList$:Cart[] = [];

  addCart(productId:number){
    let cart = this.cartList$.find(cart=> cart.productId==productId);
    if(cart == undefined){
      cart = {productId:productId, count:0};
      this.cartList$.push(cart)
    }
    cart.count++;
  }

  minusCart(productId:number){
    let cart = this.cartList$.find(cart=> cart.productId==productId);
    if(cart == undefined) return
    cart.count--;
    if(cart.count==0){
      this.remove(productId);
    }
  }

  remove(productId:number){
    let cartIndex = this.cartList$.findIndex(c=>c.productId=productId);
    if(cartIndex==1) return;
    this.cartList$.splice(cartIndex,1)

  }

  getCartList(){
    return this.cartList$
  }
}
