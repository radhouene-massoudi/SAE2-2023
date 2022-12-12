import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update2',
  templateUrl: './update2.component.html',
  styleUrls: ['./update2.component.css']
})
export class Update2Component implements OnInit {
@Input()product:any;
@Input()dataDelete=null;
  constructor() { }

  ngOnInit(): void {
  }

}
