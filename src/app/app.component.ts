import { Component, ElementRef, HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anime-angular';
  targetElement!:HTMLElement
  constructor(public data:DataService) { }
  getElementByClick(e:any){
    // this.data.targetElement = e.target;
    this.targetElement = e.target;
    this.data.isShowForm = true;
  }

  disableInput(){
    this.data.isShowAnimeCard = false;
    this.data.isShowEasing = false;
  }
  
}
