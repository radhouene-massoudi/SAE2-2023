import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
id:any;
  constructor(private s:ProductService,
    private ac:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idofproduct'];
    this.s.removeProduct(this.id).subscribe(
      ()=>{
        this.router.navigate(['list'])
      },
      (err)=>{
        console.log(err);
        switch  (err.status){

          case 401: {console.log('not authorized');break}
          case 0:{console.log('server dont work');break} 
        }

       
      }
    )
  }

}
