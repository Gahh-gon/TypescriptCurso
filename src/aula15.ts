function fsoma(...n:number[]):number{
    let s:number = 0;
    n.forEach((numer)=>{
    s += numer
    })
    return s
}

console.log(fsoma(10,20,30))