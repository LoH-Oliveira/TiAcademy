let str = 'Qualquer conteudo|';

let str2 = 'Uma outra string ${str}';

// let str = " Qualquer conteúdo ";
// let str2 = 'Uma outra string' + str;

// console.log(str2);

// const frutas = ["Uva", " Banana", "Laranja", " Maça"];

// let euGosto = `Eu gosto de ${frutas[2]}`


// // console.log(euGosto);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

const Pessoa = [
    "Claudio",
    25,
    "Solteiro",
    "Esportes", 
    1.81,
    cores = ["Salmão","Preto","Azul","Purpúra"]

];

console.log(Pessoa[5])

 (function(P){
    const Claudio = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]},
    gosto de ${Pessoa[3]} e minha altura é de ${Pessoa[4]}`;

   document.write(Claudio);

 })(Pessoa)

//  console.log(Claudio)