let button = document.getElementById("button");
let menu = document.getElementById("menu");

button.addEventListener("click", function () {
    if(menu.style.display === "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block"
    }

})

let exibir = document.getElementById("explorar");
let vert = document.getElementById("menuVertical");

exibir.addEventListener("click", function () {
    if(vert.style.display === "block") {
        vert.style.display = "none";

    } else {
        vert.style.display = "block"
    }

})

let removeElemento = document.getElementById("blue");

console.log(removeElemento);

removeElemento.addEventListener("click" , function() {
    removeElemento.remove();

})