import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
p:any=[];
product=new Product();
  constructor() { }

  ngOnInit(): void {
  }
showForm(f:any){
console.log(f)
}
addProductToTab(f:NgForm){
  //console.log(f);
  this.p.push(f.value);
  f.resetForm();
}
}
