import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterViewInit {
  transform : string="";
  
  @ViewChild ('animationName') animationName!:ElementRef;
  
  @ViewChild ('easing') easing!:ElementRef;
  
  @ViewChild ('element') element!:ElementRef;

  inputOption!:string;
  selectorName:string="";
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
    this.element.nativeElement.textContent = this.data.targetElement.className;
    this.animationName.nativeElement.textContent = this.data.animations[0];
    this.easing.nativeElement.textContent = this.data.easing[0];
    this.animation = this.data.animations[0];
    this.easingType = this.data.easing[0];
  }

  getInputElements(options:string){
    this.inputOption = options;
  }

  addElements(){

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
      // case "Custom":

    }
      
  }

  setInputProperties(animeType:string,value:number[],directionName:string){
    let target = this.getTargetElement();
    this.inputProperties = {
      "targets":target,
        [animeType] : value,
        "duration":this.duration,
        "delay":this.delay,
        "easing":this.easingType,
        "direction":directionName,
        "loop":this.loop
       };

    this.data.setAnimeProperties(this.inputProperties);
  }

  getTargetElement(){
    let targetEl;
    if(this.inputOption){

    }
    else{
      targetEl = this.data.targetElement;
    }
    return targetEl;
  }
}
