import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  products:Product[]=[]
  constructor(public cartService:CartService, private productservice:ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

  add(productID:number){
    this.cartService.addCart(productID);
  }

  minus(productID:number){
    this.cartService.minusCart(productID);
  }

  remove(productID:number){
    this.cartService.remove(productID);
  }

  getProducts(){
    this.productservice.getAll().subscribe(result=>{
      this.products=result;
    })
  }

  getNameById(id:number){
    return this.products.find(p=>p.id==id)?.title??"--"
  }
}
