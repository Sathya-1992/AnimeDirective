import { Component, ElementRef, HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anime-angular';

  constructor(public data:DataService) { }

  disableInput(){
    this.data.isShowAnimeCard = false;
    this.data.isShowEasing = false;
    this.data.isShowDirection = false;
    this.data.timelineAnimeIndex = -1;
  }
  
}
