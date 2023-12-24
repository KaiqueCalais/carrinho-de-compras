const produtosNoCarrinho = document.querySelector('#lista-produtos');
let textoDoValorTotal = document.querySelector('#valor-total');
let valorTotal = parseInt(textoDoValorTotal.textContent.split('R$')[1])

function adicionar() {
    let produto = document.querySelector('#produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let quantidade = document.querySelector('#quantidade');

    if (quantidade.value != '' && parseInt(quantidade.value) != 0) {
        produtosNoCarrinho.innerHTML += `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
            </section>`;
    } else {
        alert('ERRO: a quantidade deve ser um número positivo.');
    }

    valorTotal += valorProduto * quantidade.value;
    textoDoValorTotal.textContent = 'R$' + valorTotal;

    quantidade.value = '';
}

function limpar() {
    valorTotal = 0;
    produtosNoCarrinho.innerHTML = ``;
    textoDoValorTotal.textContent = 'R$0';
    quantidade.value = '';
}
