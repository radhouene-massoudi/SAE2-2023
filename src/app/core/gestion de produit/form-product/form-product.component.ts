import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product=new Product();
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
saveProduct(f:any){
this.service.addProduct(f).subscribe(
  (d)=>{
    this.router.navigate(['list'])
   // console.log('added')
  },
(err)=>{
  console.log('tttttttt')
}


);
;
}
}
