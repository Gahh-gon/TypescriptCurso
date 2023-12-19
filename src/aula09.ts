enum diasSema{
    domigo= 0,
    segunda= 1,
    terca= 2,
    quarta= 3,
    quinta= 4,
    sexta= 5,
    sabado= 6
} 
// console.log( diasSema[1]);

// const d = new Date()
// console.log(d.getDate())
// console.log(diasSema[d.getDay()])

enum cores{
    branco = '#fff',
    preto = '#000',
    vermelho = '#f00',
    verde = '#0f0',
    azul = '#00f',

}

enum TipoUser{
    admin = 10,
    user = 200,
    super = 3000,
}

// console.log(cores.branco)
// console.log(cores['branco'])
// console.log(TipoUser.admin)
let p:TipoUser = 200