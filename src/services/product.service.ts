import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  productList:Product[] = []

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>("/assets/product.json")
  }

  // async getById(id:number):Promise<Product>{
  //   return new Promise<Product>((resolve,reject)=>{
  //     this.getAll().subscribe(result=>{
  //       let product = result.find(p=>p.id==id)

  //       if(product!=undefined) resolve(product)
  //       else reject();
  //     })
  //   })
  // }
}
