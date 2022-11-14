import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnChanges {
class="4SAE2";
kolor="red";
quantity=0;
search=-1;
  constructor() { }
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 20, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 0, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //traitement
    console.log(changes)
  }
showMsg(){
  console.log('4SAE2 is the best')
}
changeColor(){
  if(this.quantity>0){
return 'pink'
  }return 'blue'
  }
decreaseQantity(t:any){
  let index=this.listProdcut.indexOf(t);
  this.listProdcut[index].quantity--;
}
decreaseQantity2(i:any){
  this.listProdcut[i].quantity--;
}
}
