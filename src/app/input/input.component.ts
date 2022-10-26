import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() target:any;

  transform : string="";
  
  @ViewChild ('animationName') animationName!:ElementRef;
  
  @ViewChild ('easing') easing!:ElementRef;

  isShowSelector:boolean=false;
  selectorName:string="";
  targetArray:any[]=[];
  animation!:string;
  duration:number=200;
  delay:number=0;
  loop:number=1;
  easingType!:string;
  inputProperties !:any;
  
  constructor(public data:DataService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.animationName.nativeElement.textContent = this.data.animations[0];
    this.easing.nativeElement.textContent = this.data.easing[0];
    this.animation = this.data.animations[0];
    this.easingType = this.data.easing[0];
  }

  addElements(){
    if(this.isShowSelector && this.selectorName){
      if(!this.targetArray.includes(`.${this.target.className} .${this.selectorName}`)){
        this.targetArray.push(`.${this.target.className} .${this.selectorName}`);
      }  
    }
    else{
      if(!this.targetArray.includes(this.target)){
        this.targetArray.push(this.target);
      }  
    }
  }

  showAnimeCard(e:Event){
    e.stopPropagation();
    this.data.isShowAnimeCard=!this.data.isShowAnimeCard
  }

  showEasing(e:Event){
    e.stopPropagation();
    this.data.isShowEasing=!this.data.isShowEasing;
  }

  selectAnimation(anime:string){
    this.animationName.nativeElement.textContent = anime;
    this.animation=anime;
    this.data.isShowAnimeCard=false;
  }
  
  selectEasing(easing:string){
    this.easing.nativeElement.textContent = easing;
    this.easingType = easing;
    this.data.isShowEasing=false;
  }

  addInputProperties(){
    this.data.isShowForm = false;
    switch(this.animation){
      case "Pulse":
        this.setInputProperties("scale",[1,0.6],"alternate");
        break;
      case "Flash":
        this.setInputProperties("opacity",[1,0], "alternate");
        break;
      case "Swing":
        this.setInputProperties("rotate",[-3,3],"alternate");
        break;
      case "Grow":
        this.setInputProperties("scale",[1,0],"alternate");
        break;
      case "Bounce":
        this.setInputProperties("translateY",[0,-30,0,-15,0,-7,0,-3,0],"alternate");
        break;
      case "Move":
        this.setInputProperties("translateX",[0,100],"alternate");
        break;
      // case "Custom":

    }
      
  }

  setInputProperties(animeType:string,value:number[],directionName:string){
    this.addElements();
    this.inputProperties = {
      "targets":this.targetArray,
        [animeType] : value,
        "duration":this.duration,
        "delay":this.delay,
        "easing":this.easingType,
        "direction":directionName,
        "loop":this.loop
       };

    this.data.setAnimeProperties(this.inputProperties);
  }

  
}
