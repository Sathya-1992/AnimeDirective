import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() inputList!:string[];

  @Output() animation = new EventEmitter<string>();

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  selectAnimation(anime:string){
    this.animation.emit(anime);
    this.data.isShowAnimeCard=false;
  }
}
