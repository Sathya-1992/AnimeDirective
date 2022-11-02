import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isShowAnimeCard:boolean = false;
  
  isShowEasing:boolean = false;

  isShowDirection = false;

  isShowForm:boolean = false;

  timelineAnimeIndex:number = -1;
  
  animations:string[]=["Pulse","Flash","Swing","Grow","Bounce","HorizontalMove","VerticalMove","Rotate","Custom"];
  
  easing:string[]=['linear','easeInQuad','easeOutQuad','easeInOutQuad','easeOutInQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeOutInCubic','easeInQuart','easeOutQuart']
  
  direction:string[]=['alternate','normal','reverse'];
  
  animeProperties!:any;

  timelineParent!:any;
  timelineProperties!:any;
  
  constructor() { }

  setAnimeProperties(values:any){
    this.animeProperties = values;
  }

  setAnimeTimelineProperties(parent:any,properties:any){
    this.timelineParent = parent;
    this.timelineProperties = properties;
  }
}
