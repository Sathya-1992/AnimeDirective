import { JsonPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { target, timelineChild } from '../targetModel';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  customAnime:string="";
  animationInput:string=this.data.animations[0];
  easingInput:string=this.data.easing[0];
  directionInput:string = this.data.direction[0];
  isShowTimeline:boolean=false;
  isShowCustomEditor:boolean=false;
  targets: target[]=[{name:""}];
  timelineChild: timelineChild[]=[];
  targetArray:any[]=[];
  duration:number=200;
  delay:number=0;
  loop:number=1;
  inputProperties !:any;
  timelineParent!:any;
  timelineProperties : any[]=[];
  
  constructor(public data:DataService) { }

  ngOnInit(): void {
    
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
    this.animationInput = anime;
    this.data.isShowAnimeCard=false;
    if(anime==="Custom"){
      this.isShowCustomEditor = true;
    }
    else{
      this.isShowCustomEditor = false;
    }
  }
  
  selectEasing(easing:string){
    this.easingInput = easing;
    this.data.isShowEasing=false;
  }

  selectDirection(direction:string){
    this.directionInput = direction;
    this.data.isShowDirection=false;
  }

  addInputProperties(){
    this.data.isShowForm = false;
    if(this.isShowTimeline && this.timelineChild.length>0){
      this.getTimelineParent();
      this.getTimelineProperties();
      console.log(this.timelineParent)
      console.log(this.timelineProperties)
      this.data.setAnimeTimelineProperties(this.timelineParent,this.timelineProperties);
    }
    else{
      let animeObject;
      this.getTargetArray();
      if(this.animationInput==="Custom"){
        if(this.customAnime){
          animeObject = JSON.parse(this.customAnime);
        }  
      }
      else{
        animeObject =this.setAnimationType(this.animationInput);
      }
      this.inputProperties = {
        "targets":this.targetArray,
        "duration":this.duration,
        "delay":this.delay,
        "easing":this.easingInput,
        "direction":this.directionInput,
        "loop":this.loop
        };
      this.inputProperties = Object.assign(this.inputProperties,animeObject);
      this.data.setAnimeProperties(this.inputProperties);
    }
      this.targetArray=[];
      this.timelineChild=[];
      this.timelineProperties=[];
      this.isShowTimeline=false
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
      }
      return {animation:"",value:[]};
  }

  getTimelineParent(){
    this.getTargetArray();
    this.timelineParent = {
      "targets":this.targetArray,
      "easing":this.easingInput,
      "duration":this.duration,
      "delay":this.delay,
      "direction":this.directionInput,
      "loop":this.loop
    };
  }

  getTimelineElements(){
    this.isShowTimeline=!this.isShowTimeline;
  }

  getTimelineProperties(){
    this.timelineChild.forEach((prop) =>{
      let timelineObject:any ={};
      let animeObject;
      if(prop.targets && prop.targets?.length>=1){
        let targetNames:string[] = [];
        prop.targets.forEach((targetName) =>{
          targetNames.push(targetName.name);
        })
        timelineObject["targets"]=targetNames;
      }
      if(prop.animationName==="Custom"){
        if(prop.customAnime){
          animeObject = JSON.parse(prop.customAnime);
        }
      }
      else{
        animeObject = this.setAnimationType(prop.animationName);
      }
      Object.assign(timelineObject,animeObject);
      this.timelineProperties.push(timelineObject);
    })
  }

  addTimeline(){
    this.timelineChild.push({targets:[],animationName:this.data.animations[0],customAnime:""});
  }

  removeTimeline(index:number){
    this.timelineChild.splice(index,1);
  }

  getTargetArray(){
    this.targets.forEach((target) =>{
      this.targetArray.push(`${target.name}`)
    })
  }

  addNewTarget(){
    this.targets.push({name:""});
  }
  
  removeTarget(index:number){
    this.targets.splice(index,1);
  }

  addNewTimelineTarget(index:number){
    this.timelineChild[index].targets?.push({name:""});
  }

  removeTimelineTarget(timelineIndex:number,targetIndex:number){
    this.timelineChild[timelineIndex].targets?.splice(targetIndex,1);
  }

  showTimelineAnimeCard(e:Event,index:number){
    e.stopPropagation();
    if(this.data.timelineAnimeIndex===index){
      this.data.timelineAnimeIndex = -1;
    }
    else{
      this.data.timelineAnimeIndex = index;
    }
  }

  selectTimelineAnimation(anime:string,index:number){
    this.timelineChild[index].animationName = anime;
    this.data.timelineAnimeIndex=-1;
  }

}
