// Definindo jogadorDaVez
let jogadorDaVez = "X";

// Capturando os botões
let botoes = document.querySelectorAll('#tabuleiro button');

// Associando eventos
for(let botao of botoes){
    botao.addEventListener('click', quandoBotaoForClicado);
    console.log(botao)
}

// Definindo a função quandoBotaoForClicado
function quandoBotaoForClicado(evt){

    let botao = evt.target;
    if(botao.innerHTML == ''){
        botao.innerHTML = jogadorDaVez;
        trocaVez();
    }

}

// Definindo a função trocaVez
function trocaVez(){
    if(jogadorDaVez == "X"){
        jogadorDaVez = "O"
    } else {
        jogadorDaVez = "X"
    }
}