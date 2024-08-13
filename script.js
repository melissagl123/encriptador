var mensaje="";
var mensajeCopiado="";

function asignarTexto(id,texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

function cambioInfo(){
    asignarTexto("noEncontrado","El mensaje encriptado es:");
    asignarTexto("info",mensaje);
    document.getElementById("imagen").style.display = "none";
    document.getElementById("copiarMensaje").style.display= "block";
}

function encriptar(){
    mensaje=document.getElementById("entradaTexto").value;
    if (mensaje==""){
        alert("Debe introducir un mensaje para su encriptación")
    }else{
        mensaje=mensaje.replaceAll('e','enter');
        mensaje=mensaje.replaceAll('i', 'imes');
        mensaje=mensaje.replaceAll('a', 'ai');
        mensaje=mensaje.replaceAll('o','ober');
        mensaje=mensaje.replaceAll('u','ufat');
        cambioInfo();
    }
}

function desencriptar(){
    mensaje=document.getElementById("entradaTexto").value;
    if (mensaje==""){
        alert("Debe introduicr un mensaje para su desencriptación");
    }else{
        mensaje=mensaje.replaceAll('enter','e');
        mensaje=mensaje.replaceAll('imes', 'i');
        mensaje=mensaje.replaceAll('ai', 'a');
        mensaje=mensaje.replaceAll('ober','o');
        mensaje=mensaje.replaceAll('ufat','u');
        cambioInfo();
    }

}

function copiarMensaje(){
    mensajeCopiado=document.getElementById("info").innerText;
    navigator.clipboard.writeText(mensajeCopiado);
}  
