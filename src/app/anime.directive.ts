import { Directive, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';
declare var anime : any;
@Directive({
  selector: '[appAnime]'
})
export class AnimeDirective implements OnDestroy,OnChanges{
  @Input() appAnime!:any;

  private animeInstance:any;

  constructor(private elRef: ElementRef) {}

  ngOnDestroy(): void {
    this.removeInstance();
  }
  
  ngOnChanges(changes:any): void {
    if ('appAnime' in changes) {
      this.removeInstance();
      this.animeInstance = anime({
        targets: this.elRef.nativeElement,
        ...this.appAnime,
      });
    }
  }

  private removeInstance() {
    if (this.animeInstance) {
      anime.remove(this.elRef.nativeElement);
      this.animeInstance = null;
    }
  }
}
