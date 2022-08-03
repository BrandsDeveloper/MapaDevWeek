const btnAvancar = document.getElementById('avancar');
let cardAtual = 0;
const btnVoltar = document.getElementById('voltar');
const cartoes = document.querySelectorAll('li');


btnAvancar.addEventListener('click', function(){

    if (cardAtual === cartoes.length - 1) return;
        const cardSelect = document.querySelector(".select");
        cardSelect.classList.remove('select');

        cardAtual++;
        cartoes[cardAtual].classList.add('select');

})

btnVoltar.addEventListener('click', function(){
    if (cardAtual === 0) return;
    const cardSelect = document.querySelector(".select");
    cardSelect.classList.remove('select');

    cardAtual--;
    cartoes[cardAtual].classList.add('select');
})

