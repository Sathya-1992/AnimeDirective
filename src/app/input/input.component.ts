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
  @ViewChild ('direction') direction!:ElementRef;
  @ViewChild ('easing') easing!:ElementRef;
  animation!:string;
  value:number=0;
  duration:number=0;
  delay:number=0;
  directionType!:string;
  easingType!:string;
  inputProperties !:any;
  constructor(public data:DataService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log("Howmany times")
    this.animationName.nativeElement.textContent = this.data.animations[0];
    this.direction.nativeElement.textContent = this.data.direction[0];
    this.easing.nativeElement.textContent = this.data.easing[0];
    this.animation = this.data.animations[0];
    this.directionType = this.data.direction[0];
    this.easingType = this.data.easing[0];
  }
  selectAnimation(anime:string){
    this.animationName.nativeElement.textContent = anime;
    this.animation=anime;
    console.log("kjhgfdsfghjkl"+this.animation)
    this.data.isShowAnimeCard=false;
  }
  selectDirection(direction:string){
    this.direction.nativeElement.textContent = direction;
    this.directionType = direction;
    this.data.isShowDirection=false;
  }
  selectEasing(easing:string){
    this.easing.nativeElement.textContent = easing;
    this.easingType = easing;
    this.data.isShowEasing=false;
  }

  addInputProperties(){
      this.inputProperties = {
        [this.animation]:{
         "value":this.value,
        "duration":this.duration,
        "delay":this.delay,
        "easing":this.easingType
        },
        "direction":this.directionType,
       };
       this.data.setAnimeProperties(this.inputProperties);
  }

  // setInputProperties(){
  //   this.data.setAnimeProperties(this.inputProperties);
  // }
}
