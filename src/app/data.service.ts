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

  timelineEasingIndex:number = -1;
  
  animations:string[]=["Pulse","Flash","Swing","Grow","Bounce","MoveX","MoveY","Rotate","FlipX","FlipY","Vibrate","Gelatine","Waggle","Custom"];
  
  easing:string[]=['linear','easeInQuad','easeOutQuad','easeInOutQuad','easeOutInQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeOutInCubic','easeInElastic','easeOutElastic','easeInOutElastic','easeOutInElastic','easeInBounce','easeOutBounce','easeInOutBounce','easeOutInBounce']
  
  direction:string[]=['alternate','normal','reverse'];
  
  animeProperties!:any;

  timelineParent!:any;
  timelineProperties!:any;

  playAnimation:boolean = true;

  restartAnimation:boolean = false;
  
  constructor() { }

  setAnimeProperties(values:any){
    this.animeProperties = values;
  }

  setAnimeTimelineProperties(parent:any,properties:any){
    this.timelineParent = parent;
    this.timelineProperties = properties;
  }
}
