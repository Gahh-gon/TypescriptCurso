function logar(user:string,password:string):void {
console.log(user);
console.log(password);
}
logar('error','456')
logar('Test','008')

function somar2(n1:number,n2:number):number{
    let  valor:number = n1 + n2 ;
    return valor
}
const n_res:number =  somar2(10,12)
const s_res:string = somar2(10,12).toString()
console.log(n_res)
console.log(s_res)


// function valorNumber(user:number,password:number):void {
//     console.log(somar2(user,password));
// }

// valorNumber(2,2)


// function somar2(n1:number,n2:number):number{
//     let  valor:number;
//     valor = n1 + n2
//     return valor
// }
