
/*MENU HAMBÚRGUER HEADER*/
/*declaração de variáveis*/
var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .cabecalho-menu-hamburguer');
var onMenu = document.querySelector('nav .cabecalho-menu-hamburguer img');

menuBar.addEventListener('click', function(){
    menu.classList.toggle('active'); /*faz com que o clique funcione*/
})


/*CARROSSEL NOSSOS SERVIÇOS*/