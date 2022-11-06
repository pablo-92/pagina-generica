//MENU SMARTPHONE
let nav = document.querySelector("nav");
let boton_menu = document.querySelector("#boton-menu");
let menu = document.querySelector(".menu-smartphone");
let menu_proyectos = document.querySelector(".proyectos");
let flecha = document.querySelector(".flecha");
let submenu = document.querySelector(".submenu");

boton_menu.addEventListener('click', desplegar_menu);
function desplegar_menu() {
    menu.classList.toggle("menu-desplegado");
    nav.classList.toggle("nav-menu-desplegado");
    submenu.style.height = "0px";
    flecha.classList.remove("flecha-girada");
};

function desplegar_submenu() {
    flecha.classList.toggle("flecha-girada");
    let height = 0;
    if (submenu.style.height == "0px") {
        height = submenu.scrollHeight;
    };
    submenu.style.height = height + "px";
};
menu_proyectos.addEventListener("click", desplegar_submenu);


//MENU DESKTOP
let menu_desk_proyectos = document.querySelector(".menu-desk-proyectos");
let menu_desk_div_submenu = document.querySelector(".menu-desk-div-submenu");
let flecha_desk = document.querySelector(".flecha-desk");

function desplegar_submenu_desk() {
    menu_desk_div_submenu.classList.toggle("menu-desk-div-submenu-desplegado");
    flecha_desk.classList.toggle("flecha-girada");
};
menu_desk_proyectos.addEventListener("click", desplegar_submenu_desk);


let san = document.querySelector(".san");
if (location.pathname == '/pagina-generica/arquitectura.html') {
    san.style.color = "var(--color-arquitectura)"
}

if (location.pathname == '/pagina-generica/productos.html') {
    san.style.color = "var(--color-productos)"
}

if (location.pathname == '/pagina-generica/abstracto.html') {
    san.style.color = "var(--color-abstracto)"

}
