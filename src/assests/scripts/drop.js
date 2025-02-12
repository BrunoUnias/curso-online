const drop = document.querySelector('.servico');
const lista = document.querySelector('.lista-secundaria');

drop.onclick = () => {
    lista.classList.toggle('.ativo');

}

const vertical = document.querySelector('.explorar');
const assunto = document.querySelector('.assunto');

vertical.onclick = () => {
    assunto.classList.toggle('.ativo-dois');
    
}