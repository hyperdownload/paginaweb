const iconoMenu = document.querySelector("#icono-menu"),
        menu = document.querySelector("#menu");

iconoMenu. addEventListener ("click", (e) => {

    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");

    const rutaActual = e.target.getAttribute("src");

    if(rutaActual =='img/2099153.png'){
        e.target.setAttribute("src","img/8637657.png");
    }
    else{
        e.target.setAttribute("src","img/2099153.png");
    }
});
