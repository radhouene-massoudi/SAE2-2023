import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-showoneporduct',
  templateUrl: './showoneporduct.component.html',
  styleUrls: ['./showoneporduct.component.css']
})
export class ShowoneporductComponent implements OnInit {
@Input()p:any;
@Output()notif=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
sendNotifToParent(prod:any){
  this.notif.emit(prod)
}
}
