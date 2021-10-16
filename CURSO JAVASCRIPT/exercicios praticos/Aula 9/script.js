function valorImc(nome, altura, peso){
    a = Number(altura);
    p = Number(peso);


    let imc = p / (a*2);
    console.log("Nome...: ", nome);
    console.log("Altura..: ", altura);
    console.log("Peso..: ", peso);
    console.log("IMC..: ", imc);
}

    pesoPessoa = prompt ("Digite seu peso");
    alturaPessoa = prompt ("Digite sua altura");
    nomePessoa = prompt ("Digite seu nome");

    valorImc(nomePessoa, alturaPessoa, pesoPessoa)