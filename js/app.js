//leer en el local storage si almacenamos un color de theme
let temaConfigurado = JSON.parse(localStorage.getItem (`tema`))|| `dark`;
console.log(temaConfigurado)
cambiarTema(temaConfigurado)

let btnThemeLight = document.querySelector(`#btnThemeLight`)
let btnThemeDark = document.querySelector(`#btnThemeDark`)

btnThemeLight.addEventListener(`click`,()=> cambiarTema (`light`))
btnThemeDark.addEventListener(`click`,()=> cambiarTema(`dark`));


function cambiarTema(color){
document.querySelector(`body`).setAttribute(`data-bs-theme`, color) ;


//GUARDAR EN LOCAL STORAGE como string
//localStorage.setItem(`tema`, color);

//GUARDAR EN LOCAL STORAGE como json donde color seguramente es un array
localStorage.setItem(`tema`, JSON.stringify(color));

//ACTUALIZAR EL ICONO
}