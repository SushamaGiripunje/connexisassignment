import { Component, OnInit } from '@angular/core';
import {ProductserviceService}from './../productservice.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ProductDetails=[];
  titles=[];  result1; result2;
  tiles: Tile[] = [
    {text: 'Two', cols: 2, rows: 2, color: 'white'},
    {text: 'One', cols: 1, rows: 1, color: 'white'},
    
    {text: 'Three', cols: 1, rows: 1, color: 'white'},
    {text: 'Four', cols: 1, rows: 1, color: 'white'},
    {text: 'Five', cols: 1, rows: 1, color: 'white'},
  ];
  people=[];
  
  constructor(private productservice:ProductserviceService) {   
     
    //TODO:getAllProduct
    this.productservice.getAllProduct()
    .subscribe(data=>{
         this.result1=data;
        this.ProductDetails=this.result1.ProductDetails;
        for (var i = 0; i < this.tiles.length; i++) {    
          // merge objects into one with multiple props
          this.tiles[i] = Object.assign(this.tiles[i], {          
              pathImage: this.ProductDetails[i].post_url, 
              author: this.ProductDetails[i].author,       
          });        
      }      
    });
    for(var j=0;j<this.tiles.length;j++)
    {
      console.log(this.tiles[j])
    }
      //TODO:getAllTitle
      this.productservice.getAllTitle()
      .subscribe(data=>{
           this.result2=data;
          this.titles=this.result2.titles;
          this.people=this.titles;
          for (var i = 0; i < this.tiles.length; i++) {    
            // merge objects into one with multiple props
            this.tiles[i] = Object.assign(this.tiles[i], {          
                titleList: this.people[i],           
            });
          
        }
      });
     
     
      
  }
    
  
  ngOnInit() {
  }

}
