import { Directive, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';
declare var anime : any;
@Directive({
  selector: '[appAnime]'
})
export class AnimeDirective implements OnDestroy,OnChanges{
  @Input() appAnime!:any;

  @Input() timeline!:any;

  @Input() appAnimeTimeline!:any;

  @Input() appAnimeTimeProp!:any;

  private animeInstance:any;

  constructor(private elRef: ElementRef) {}

  ngOnDestroy(): void {
    this.removeInstance();
  }

  ngOnChanges(changes:any): void {
    if ('appAnime' in changes) {
      this.removeInstance();
      console.log(this.appAnime);
      this.animeInstance = anime(
        this.appAnime,
      );
    }
    else if('timeline' in changes){
      this.removeInstance();
      this.animeInstance = anime.timeline(
        this.timeline.parent
      );
      for(let i=0;i<this.timeline.prop.length;i++){
        this.animeInstance.add(this.timeline.prop[i]);
      }
    }
  }

  private removeInstance() {
    if (this.animeInstance) {
      anime.remove(this.elRef.nativeElement);
      this.animeInstance = null;
    }
  }
}
