//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function validarCampos() {
    var nombre = document.getElementById('nombreCompleto').value;
    var edad = document.getElementById('edad').value;
    var mail = document.getElementById('correo').value;
    var contacto = document.getElementById('contacto').value;

    if( nombre == '' || edad == '' || mail == '' || contacto == ''){
        document.getElementById('valide').innerHTML="Debe llenar todos los campos!";
    }else{
        document.getElementById('valide').innerHTML="Su usuario ha sido modificado con éxito! ";
    }
}//Avisa si quedan campos sin rellenar//


function guardarPerfil(){
  var miPerfil = { 
    "nombre": document.getElementById("nombreCompleto").value,
    "edad": document.getElementById("edad").value,
    "mail": document.getElementById("correo").value,
    "contacto": document.getElementById("contacto").value,
  }

  localStorage.setItem("myProfile", JSON.stringify(miPerfil));
}//Guarda los datos ingresados en los inputs en el localStorage//

function editar(){
    document.getElementById('camposUsuario').disabled = false;
}//Habilita la modificacion de los campos//

function guardar(){
    document.getElementById('camposUsuario').disabled = true;
}//Deshabilita la posibilidad de modificar los campos//


