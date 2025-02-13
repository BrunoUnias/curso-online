const vertical = document.querySelector('.explorar');
const assunto = document.querySelector('.assunto');

vertical.onclick = () => {
    assunto.classList.toggle('.ativo-dois');
    
}