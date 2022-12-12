import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
listProduct!:Product[];
p:any;
show=false;
  constructor(private s:ProductService) { }

  ngOnInit(): void {
    this.s.getProducts().subscribe(
      (data)=>{
this.listProduct=data;
      }
    );
   // console.log(data);
  }
  affectData(prod:any){
    this.show=true;
this.p=prod
  }
}
