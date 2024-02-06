const coisas:string[] = ['corda','Pilha','lampada','chave'];

interface PessoaInterface{
    nome: string;
    altura: number;
}

 class Pessoa implements PessoaInterface{
    nome:string;
    altura:number;
    constructor(n:string,al:number){
        this.nome = n;
        this.altura = al;
    }

};

 class Objeto{
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
};
export default Pessoa;
export {coisas,Objeto}