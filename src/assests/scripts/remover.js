
const remover = document.getElementById("item").addEventListener("click", function (){
    var rew = document.getElementById("blue");

    rew.parentNode.removeChild(rew)

})

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