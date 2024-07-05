
function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function exibirMensagemNaTela(id, texto){
    let resultado = document.getElementById(id);
    resultado.innerHTML = texto; 
}

function sortear() {
    document.getElementById("btn-reiniciar").removeAttribute("disabled");
    document.getElementById("btn-reiniciar").setAttribute("class", "container__botao");
    let sorteados = []; 
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (quantidade < ate - de + 1) {

        for (let i = 0; i < quantidade; i++) {
            numeroSorteado = gerarNumeroAleatorio(ate, de);
            sorteados.includes(numeroSorteado) ? i-- + sortear() : sorteados.push(numeroSorteado);
        }

        exibirMensagemNaTela("mensagem_resultado", "Números sorteados: " + sorteados);
    }

    else{
        
        if (quantidade == ate - de + 1) {
            exibirMensagemNaTela("mensagem_resultado", "A quantidade solicitada é igual a quantidade de números entre " + de +" e " + ate + " reinicie e tente novamente")
        }

        else{
           exibirMensagemNaTela("mensagem_resultado", "A quantidade solicitada excede a quantidade de números entre " + de +" e " + ate + " reinicie e tente novamente")
        }
    }
}

function limparCampo(id){
    id = document.getElementById(id);
    id.value = " ";
}

function reiniciar(){
    document.getElementById("btn-reiniciar").setAttribute("disabled", true);
    document.getElementById("btn-reiniciar").setAttribute("class", "container__botao-desabilitado");
    limparCampo("quantidade");
    limparCampo("de");
    limparCampo("ate");
    exibirMensagemNaTela("mensagem_resultado", "Números sorteados:  nenhum até agora");
}

