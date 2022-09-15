var borrar_iconos=true;
function SacarNavMovil() {
    let caja_iconos_sociales=document.getElementsByClassName("social-icons")[0];
    if(borrar_iconos==true){
        caja_iconos_sociales.setAttribute("style","display:none;");
        borrar_iconos=false;
    }else{
        caja_iconos_sociales.setAttribute("style","display:block;");
        borrar_iconos=true;
    }
  }