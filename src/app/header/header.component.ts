import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() featureCreated = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onselect(feature:string){
  this.featureCreated.emit(feature)
}
}
