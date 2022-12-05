import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
listProduct:any;
  constructor(private s:ProductService) { }

  ngOnInit(): void {
    this.s.getProducts().subscribe(
      (data)=>{
this.listProduct=data;
      }
    );
   // console.log(data);
  }

}
