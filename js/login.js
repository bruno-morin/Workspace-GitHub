//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){

});

function replace(){
    window.location.href="welcome.html";
  }

function acceder(){

    var email  = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var acceder = document.getElementById('btn');
  
    if (email !==''  && password !=='') {
      replace();
    } else {
      document.getElementById("error").innerHTML='Debe llenar los campos requeridos'
    }
  }
  

