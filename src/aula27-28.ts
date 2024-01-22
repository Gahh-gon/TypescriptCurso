interface curso{
titulo:string;
des:string;
iniciarCurso?(teste:string):void;
}
interface cursoProg extends curso{
    aula:number;
    maximoAlunos?:number;
}
interface cursoArtes extends curso{
    aula:number;
    maximoAlunos?:number;
}
let curso1:cursoProg
let curso2:cursoProg
let curso3:cursoArtes

function iniciarCurso(s:string):void{
console.log('teste')
}

curso1={
    titulo: 'Typescript',
    des: 'Curso de typescript',
    aula:100,
    maximoAlunos:50
}
curso2={
    titulo: 'Javascript',
    des: 'Curso de Javascript',
    aula:250,
    maximoAlunos:80
}
curso3={
    titulo: 'c++',
    des: 'Curso de C++',
    aula:200,
  }
console.log( curso1);
console.log(curso2);''
console.log(curso3);

