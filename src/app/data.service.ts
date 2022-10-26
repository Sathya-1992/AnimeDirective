import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isShowAnimeCard:boolean = false;
  
  isShowEasing:boolean = false;

  isShowForm:boolean = false;

  inputElements:string[]=["Selector","Array"];
  
  animations:string[]=["Pulse","Flash","Swing","Grow","Bounce","Custom"];
  
  easing:string[]=['linear','easeInQuad','easeOutQuad','easeInOutQuad','easeOutInQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeOutInCubic','easeInQuart','easeOutQuart']
  
  animeProperties!:any;

  targetElement!:HTMLElement;
  
  constructor() { }

  setAnimeProperties(values:any){
    console.log(values)
    this.animeProperties = values;
  }
}
