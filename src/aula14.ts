
const teste = (text?:string):void =>{
    console.log(text)
}
const somar = (n:number[]):number =>{
   let s:number = 0  
   n.forEach((e)=>{
    s+=e
   })
    return s
}
let numerosArray:number[] = [1,2,3,4,5,6,7]

console.log(somar(numerosArray));


teste('error');
teste();