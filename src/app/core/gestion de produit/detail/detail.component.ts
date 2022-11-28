import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ac.snapshot.params['id']);
    this.ac.params.subscribe(
      (data)=>{
        console.log(data)
      }
    );
  }

}
