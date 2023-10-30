
/*MENU HAMBÚRGUER HEADER*/
/*declaração de variáveis*/
var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .cabecalho-menu-hamburguer');
var onMenu = document.querySelector('nav .cabecalho-menu-hamburguer img');

menuBar.addEventListener('click', function(){
    menu.classList.toggle('active'); /*faz com que o clique funcione*/
})


/*BOTÃO EXPANDIR PORTFOLIO*/
const card = document.querySelector(".cards-portfolio");
const cardsInitialHeight = card.clientHeight;
const overflow = document.querySelector(".overflow");
const toggle = document.querySelector(".toggle");

button.addEventListener("click", initButton);

function initToggle(e){
    card.style.maxHeight = 
    e.target.dataset.state === "more"
    ? '${card.scrollHeight}rem'
    : '${cardInitialHeight}rem';

    e.target.setAttribute(
        "data-state",
        e.target.dataset.state === "more" ? "less" : "more"
    );

    e.target.innerHTML = 
    e.target.dataset.state === "more" ? "Show more" : "Show Less";
    
    overflow.setAttribute(
        "data-state",
        e.target.dataset.state === "more" ? "visible" : "hidden"
    );
}