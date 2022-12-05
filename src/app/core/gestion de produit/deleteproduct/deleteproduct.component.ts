import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
id:any;
  constructor(private s:ProductService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idofproduct'];
    this.s.removeProduct(this.id).subscribe(
      ()=>{
        console.log('removed')
      }
    )
  }

}
