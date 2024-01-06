import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  productList:Product[] = []

  constructor(private productService:ProductService, private cartService:CartService ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(result=>{
      this.productList=result;
    })
  }

  addCart(productId:number){
    this.cartService.addCart(productId)
  }
  
}
