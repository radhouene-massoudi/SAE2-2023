import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id:any;
product=new Product();
  constructor(private s:ProductService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idofproducttoupdateit'];
    this.s.fetchProductById(this.id).subscribe(
      (d)=>{
        
this.product=d;
console.log(this.product)
      }
    )
  }

update(f:any){
  this.s.updateProduct(this.id,f).subscribe(
()=>{
  console.log('updated')
}
  )
}
}
