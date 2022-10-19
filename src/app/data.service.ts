import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isShowAnimeCard:boolean = false;
  
  isShowDirection:boolean = false;
  
  isShowEasing:boolean = false;
  
  animations:string[]=["translateX","translateY","scaleX","scaleY","rotateX","rotateY"];
 
  direction:string[]=["normal","reverse","alternate"];
  
  easing:string[]=['easeInQuad','easeOutQuad','easeInOutQuad','easeOutInQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeOutInCubic','easeInQuart','easeOutQuart']
  
  animeProperties!:any;
  
  constructor() { }

  
  // animeProperties : any = {
  //   translateX: [
  //     { value: 250, duration: 1000, delay: 500 },
  //     { value: 0, duration: 1000, delay: 500 },
  //   ],
  //   translateY: [
  //     { value: -40, duration: 500 },
  //     { value: 40, duration: 500, delay: 1000 },
  //     { value: 0, duration: 500, delay: 1000 },
  //   ],
  //   scaleX: [
  //     { value: 4, duration: 1000, delay: 500, easing: 'easeOutExpo' },
  //     { value: 1, duration: 900 },
  //     { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
  //     { value: 1, duration: 900 },
  //   ],
  //   scaleY: [
  //     { value: 4, duration: 1000, delay: 500, easing: 'easeOutExpo' },
  //     { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
  //     { value: 1, duration: 450 },
  //     { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
  //     { value: 1, duration: 450 },
  //   ],
  //   loop: true,
  // };

  setAnimeProperties(values:any){
    console.log(values)
    this.animeProperties = values;
  }
}
