import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() target:any;
  
  @ViewChild ('animationName') animationName!:ElementRef;
  
  @ViewChild ('easing') easing!:ElementRef;

  @ViewChild ('direction') direction!:ElementRef;

  @ViewChild ('customAnime') customAnime!:ElementRef;

  isShowSelector:boolean=false;
  isShowTimeline:boolean=false;
  isAnimeTimeline:boolean=false;
  isShowCustomEditor:boolean=false;
  selectorName:string="";
  targetArray:any[]=[];
  animation!:string;
  duration:number=200;
  delay:number=0;
  loop:number=1;
  easingType!:string;
  directionType!:string;
  inputProperties !:any;
  timelineParent!:any;
  timelineProperties : any[]=[];
  parentTarget!:any;
  parentEasing!:string;
  parentDuration!:number;
  parentDelay!:number;
  
  constructor(public data:DataService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.animationName.nativeElement.textContent = this.data.animations[0];
    this.easing.nativeElement.textContent = this.data.easing[0];
    this.direction.nativeElement.textContent = this.data.direction[0];
    this.animation = this.data.animations[0];
    this.easingType = this.data.easing[0];
    this.directionType = this.data.direction[0];
  }

  addElements(){
    if(this.isShowSelector && this.selectorName){
      if(!this.targetArray.includes(`.${this.target.className} ${this.selectorName}`)){
        this.targetArray.push(`.${this.target.className} ${this.selectorName}`);
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

  showDirection(e:Event){
    e.stopPropagation();
    this.data.isShowDirection=!this.data.isShowDirection;
  }

  selectAnimation(anime:string){
    this.animationName.nativeElement.textContent = anime;
    this.animation=anime;
    this.data.isShowAnimeCard=false;
    if(anime==="Custom"){
      this.isShowCustomEditor = true;
    }
    else{
      this.isShowCustomEditor = false;
    }
  }
  
  selectEasing(easing:string){
    this.easing.nativeElement.textContent = easing;
    this.easingType = easing;
    this.data.isShowEasing=false;
  }

  selectDirection(direction:string){
    this.direction.nativeElement.textContent = direction;
    this.directionType = direction;
    this.data.isShowDirection=false;
  }

  addInputProperties(){
    this.data.isShowForm = false;
    if(this.isShowTimeline && this.timelineProperties.length>1){
      this.data.setAnimeTimelineProperties(this.timelineParent,this.timelineProperties);
    }
    else{
      this.addElements();
      let animeObject =this.setAnimationType(this.animation);
      this.inputProperties = {
        "targets":this.targetArray,
        // [animeObject.animation]:animeObject.value,
        "duration":this.duration,
        "delay":this.delay,
        "easing":this.easingType,
        "direction":this.directionType,
        "loop":this.loop
        };
      this.inputProperties = Object.assign(this.inputProperties,animeObject);
  
      this.data.setAnimeProperties(this.inputProperties);
    }
      
  }

  setAnimationType(animationName:string){
    switch(animationName){
        case "Pulse":
          return {"scale":[1,0.6]}
        case "Flash":
          return {"opacity":[1,0]};
        case "Swing":
          return {"rotate":[-3,3]};
        case "Grow":
          return {"scale":[1,0]};
        case "Bounce":
          return {"translateY":[0,-30,0,-15,0,-7,0,-3,0]};     
        case "HorizontalMove":
          return {"translateX":[0,100]};
        case "VerticalMove":
          return {"translateY":[0,100]};
        case "Rotate":
          return {"rotate":[0,360]};
        case "Custom":
          let sample:string = this.customAnime.nativeElement.textContent.toString();
          return JSON.parse(sample);
      }
      return {animation:"",value:[]};
  }

  getTimelineElements(){
    this.isShowTimeline=!this.isShowTimeline;
    this.isAnimeTimeline = true;
    this.addElements();
    this.timelineParent = {
      "targets":this.targetArray,
      "easing":this.easingType,
      "duration":this.duration,
      "delay":this.delay,
      "direction":this.directionType,
      "loop":this.loop
    };
    this.parentTarget=this.targetArray;
    this.parentEasing = this.easingType;
    this.parentDuration = this.duration;
    this.parentDelay = this.delay;
    let animeObject =this.setAnimationType(this.animation);
    this.timelineProperties.push(animeObject);
    this.targetArray = [];
  }

  addTimeline(){
    let timelineObject:any={};
    let animeObject =this.setAnimationType(this.animation);
    Object.assign(timelineObject,animeObject);
    this.addElements();  
    timelineObject["targets"]=this.targetArray;
    if(this.parentEasing!==this.easingType){
      timelineObject["easing"]=this.easingType;
    }
    if(this.parentDuration!==this.duration){
      timelineObject["duration"]=this.duration;
    }
    if(this.parentDelay!==this.delay){
      timelineObject["delay"]=this.delay;
    }
    this.timelineProperties.push(timelineObject);
    this.targetArray = [];
  }
  
}
