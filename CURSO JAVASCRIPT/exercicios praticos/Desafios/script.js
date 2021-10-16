window.onload = function () {

let Produtos = [
    {descricao: 'Mamão Papaia', preco: 2.30},
    {descricao: 'Laranja', preco: 5.30},
    {descricao: 'Manga', preco: 3.80},
    {descricao: 'Melão', preco: 2.70},
    {descricao: 'Melancia', preco: 4.60},
]

const listaProdutos =  document.querySelector("#Produtos");

(
    ()=>{

    for( let pro of Produtos ){
        const produLi = document.createElement('li');
        for( ListaP in pro ){
            if( ListaP == 'preco' ){
                listaProdutos.appendChild(produLi).setAttribute('data-preco',pro[ListaP])

            } else {
                listaProdutos.appendChild(produLi).textContent = `${pro[ListaP]}` ;
            }
        }
    }
}
)(Produtos);

const cestaDoCliente =  document.querySelector("#cestaDoCliente");
const totalCompra = document.querySelector ("#totalCompra");
const cestinha=[];
let total=0;

const preco = document.querySelectorAll("#listaProdutos > li");

listaProdutos.addEventListener('click', function(Produtos){
    // console.log(Produtos.target.textContent);
    // console.log(cestinha.indexOf(Produtos.target.textContent));
    if(cestinha.indexOf(Produtos.target.textContent) == -1){
        cestinha.push(Produtos.target.textContent)
        let li = document.createElement('li');

        cestaDoCliente.appendChild(li).textContent = Produtos.target.innerHTML;
        cestaDoCliente.appendChild(li).setAttribute('data-codigo', Produtos.target.dataset.codigo);
        total  += Number(Produtos.target.dataset.preco) ;
        totalCompra.value = total.toFixed(2);
    } else {
        alert("Este item já está na cesta");
    }
}); }