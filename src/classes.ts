interface PessoaInterface{
    nome: string;
    altura: number;
}

export class Pessoa implements PessoaInterface{
    nome:string;
    altura:number;
    constructor(n:string,al:number){
        this.nome = n;
        this.altura = al;
    }

}

export class Objeto{
    nome:string;
    constructor(nome:string){
        this.nome = nome
    }
}