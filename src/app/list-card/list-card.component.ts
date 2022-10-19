import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() inputList!:string[];
  constructor() { }

  ngOnInit(): void {
  }

  selectValues(inputValue:string){
    
  }
}
