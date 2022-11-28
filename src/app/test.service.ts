import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  showMsg(){
    console.log('service')
  }
  test(){
    return  new Observable(()=>{
      console.log('test')
      
    })
  }
}
