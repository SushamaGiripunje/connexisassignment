import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  count=new EventEmitter();
  constructor(private _http: HttpClient) { }
  
  getAllTitle() {
    return this._http.get("./../assets/Json/DiscountTitle.json")
  }
  getAllProduct() {
    //logic to filter astronauts     
  return this._http.get("./../assets/Json/ItemList.json")   
} 
  getCount(){
    return this.count;
  }

  
}
