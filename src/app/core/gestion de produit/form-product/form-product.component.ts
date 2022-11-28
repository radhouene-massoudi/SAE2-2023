import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product=new Product();
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
saveProduct(f:any){
this.service.addProduct(f).subscribe(
  (d)=>{
    console.log('added')
  },
(err)=>{
  console.log('tttttttt')
}


);
;
}
}
