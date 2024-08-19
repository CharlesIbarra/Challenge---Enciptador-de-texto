// Selección de Elementos//
const botonEncriptar = document.querySelector(".boton__encriptar");
const textoEncriptar = document.querySelector(".input_texto_area");
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".evaluar");
const contenido1 = document.querySelector(".texto__uno");
const contenido2 = document.querySelector(".texto__dos");
const mostrarCopiar = document.querySelector(".buton__copiar");
const botonDesencriptar = document.querySelector(".boton__desencriptar");

// Botón de Encriptar//
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let variableTexto = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(variableTexto);


    
    if(texto == ""){
        aviso.style.color = "#B22222";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo no debe estar vacío.";

        setTimeout(() => {
        aviso.removeAttribute("style");
        },3500);
    }
        else if(texto !== variableTexto){
            aviso.style.color = "#B22222";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No se admiten acentos ni caracteres especiales.";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
            },3500);
    }
        else if(texto !== texto.toLowerCase()){
        aviso.style.color = "#B22222";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Todo el texto debe ser en minúsculas.";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
            },3500);
    }
        else{

            let encriptador = {
                'a':'ai',
                'e':'enter',
                'i':'imes',
                'o':'ober',
                'u':'ufat'
            }
            encrypt = texto.replace(/[eioua]/g, match => encriptador[match]);

            respuesta.innerHTML = encrypt;
            mostrarCopiar.style.visibility = "inherit";
            contenido1.remove();
            contenido2.remove();
            
        }
});


// Botón de Desencriptar//
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let variableTexto = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(variableTexto);

    if(texto == ""){
        aviso.style.color = "#B22222";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo no debe estar vacío.";

        setTimeout(() => {
        aviso.removeAttribute("style");
        },3500);
    }
        else if(texto !== variableTexto){
            aviso.style.color = "#B22222";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No se admiten acentos ni caracteres especiales.";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
            },3500);
    }
        else if(texto !== texto.toLowerCase()){
        aviso.style.color = "#B22222";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Todo el texto debe ser en minúsculas.";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
            },3500);
    }
        else{
            texto = texto.replace(/imes/gi,"i");
            texto = texto.replace(/enter/gi,"e");
            texto = texto.replace(/ober/gi,"o");
            texto = texto.replace(/ufat/gi,"u");
            texto = texto.replace(/ai/gi,"a");

            respuesta.innerHTML = texto;
            mostrarCopiar.style.visibility = "inherit";
            contenido1.remove();
            contenido2.remove();
            
        }
    });

    //---Botón de Copiar ----//
    mostrarCopiar.addEventListener("click", e=>{
        e.preventDefault();
        let copiar = respuesta;
        copiar.select();
        document.execCommand("copy");
    });