//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

/*function replace(){
    window.location.href="welcome.html";
  }*/

function acceder() {

    var email  = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (email =='' || password =='') {
      document.getElementById("error").innerHTML='Debe llenar los campos requeridos';
      } else {
      sessionStorage.setItem("usuario", email);
      window.location.href="welcome.html";
    }

    /*var miStorage = window.sessionStorage;
    miStorage.setItem('keyEmail, email');
    miStorage.setItem('keyPassword, password');

    alert(miStorage.getItem('keyNombre'));*/
}
  



  

