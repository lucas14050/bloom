let total = 0;

function adicionarCarrinho(nome, preco){

    const lista =
    document.getElementById("lista-carrinho");

    const item =
    document.createElement("p");

    item.innerText =
    nome + " - R$ " + preco.toFixed(2).replace(".", ",");

    lista.appendChild(item);

    total += preco;

    document.getElementById("total")
    .innerText = total.toFixed(2).replace(".", ",");
}

function finalizarCompra(){

    if(total === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra finalizada com sucesso!");

    document.getElementById("lista-carrinho").innerHTML = "";

    total = 0;

    document.getElementById("total")
    .innerText = "0,00";
}