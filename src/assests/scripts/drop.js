const drop = document.querySelector('.servico');
const lista = document.querySelector('.lista-secundaria');

drop.onclick = () => {
    lista.classList.toggle('.ativo');

}