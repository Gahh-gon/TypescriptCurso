function f_teste<T,U>(valor:T,r:U):U{
return r 
} 

console.log(f_teste<Number, string>(10,'10'))
console.log(f_teste<String,Number>('10',10))
console.log(f_teste<boolean,boolean>(true,false))

class ClassTest<T>{
public valor:T
    constructor(valor:T){
        this.valor = valor
}
}
const ct1 = new ClassTest<number>(10)
const ct2 = new ClassTest<string>('O de cima e um valor de objeto instaciando de uma classe ')
console.log(ct1.valor)
console.log(ct2.valor)