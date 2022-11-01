export interface target {
    name : string,
}

export interface timelineChild {
    targets?: target[],
    animationName : string,
    customAnime:string
    // duration?:number,
    // delay?:number,
    // easing?:string, 
}