export interface target {
    name : string,
}

export interface timelineChild {
    targets?: target[],
    animationName : string,
    customAnime:string,
    isShowDuration:boolean,
    durationValue?:number,
    isShowDelay:boolean,
    delayValue?:number,
    isShowEasing:boolean,
    easing?:string, 
}