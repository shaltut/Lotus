import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programSelect = ""
  constructor() { }

  ngOnInit(): void {
  }
onclicked(feature:string){
this.programSelect = feature

}
}
