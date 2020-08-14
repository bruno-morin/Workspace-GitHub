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
  
/*function validar() {
    var login = document.getElementById('formulario');
    var boton = document.getElementById('btn');

    var validarEmail= function(){
        if (login.email.value == 0) {
            document.getElementById('email_null').innerHTML='Debe ingresar su email'
        }
    }
}*/























/*let email = document.getElementById("email").value;
let contraseña = document.getElementById("password").value;

function validarEmail(e1){
    if(e1 == "") {
        document.getElementById("email_null").innerHTML = 'Debe ingresar su email';
    } else {
        document.getElementById("email_null").innerHTML = '';
    }
}

function validarPassword(e2){
    if(e2 == "") {
        document.getElementById("password_null").innerHTML = 'Debe ingresar su contraseña';
    } else {
        document.getElementById("password_null").innerHTML = '';
    }
}



/*document.addEventListener("DOMContentLoaded", function(e){

});

function validarEmail(email){
    if( email.value === null || email.value ===""){
        document.getElementById("email_null").innerHTML= "Ingrese su email";
    } else document.getElementById("email_null").innterHTML = "";
    
}

function validarPassword(password){
    if( password.value === null || password.value ===""){
        document.getElementById("password_null").innerHTML= "Ingrese su contraseña";
    } else document.getElementById("password_null").innerHTML= "";
}

document.addEventListener("onclick")*/
