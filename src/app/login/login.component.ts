import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private s:TestService) { }

  ngOnInit(): void {
    this.s.showMsg();
    this.s.test().subscribe(
     ()=>{
      
     } 
    );
  }

}
