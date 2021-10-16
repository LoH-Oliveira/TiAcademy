//while

// let loop=0;
// let cores = ["verde","vermelho"]

// while( loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }

// let teste = 0;

// do{
//  teste = Number( prompt("Digite 0 para sair"));
    
//     switch (teste) {

//         case 0:
//             alert("Saindo do sistema...")
//             break;

//         case 1:
//             alert("Cadastrando...")
//             break;

//             case 2:
//                 alert("Consultando...")
//                 break;
    
//         default:
//             alert(" Opção inválida")
//             break;
//     }

// } while( teste !=0)

let frutas = [
    {Fruta: " Mamão Papaia", preço: 3.60},
        {Fruta: " Laranja", preço: 2.70},
        {Fruta: " Manga", preço: 4.90},
        {Fruta: " Melão ", preço: 3.70},
        {Fruta: " Melancia", preço: 5.90},

]



function listaFrutas(f){

    for ( let produto of f){
        for( let p in produto)
        document.write(` ${p} -> ${produto[p]} </br>`)
    }
}

listaFrutas( frutas );

let soma = [ function frutas(preço) {
    
} (preço[3]) + (preço[5])

]
console.log(soma);