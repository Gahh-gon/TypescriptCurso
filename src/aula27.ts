interface curso{
titulo:string;
des:string;
aula:number;
maximoAlunos?:number
}

let curso1:curso
let curso2:curso
let curso3:curso

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
console.log(curso2);
console.log(curso3);

