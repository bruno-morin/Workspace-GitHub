var comprados = [];

function showCarrito(comprados) {

    let htmlContentToAppend = "";
    for (let i = 0; i < comprados["articles"].length; i++) {
        let compra = comprados["articles"][i];

        htmlContentToAppend = `
    <div class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-3">
            <img src="` + compra.src + `" class="img-thumbnail">
        </div>
        <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ compra.name + `</h4>
                    <small class="text-muted">` + `<span id="cant"></span>` + ` artículos</small>

                </div>
                <div>
                    <p>` + compra.currency + ` <span id="costoUnit">` + compra.unitCost + `</span> </p>
                </div>
                <div>
                   <span>Costo total:</span> <p id="inputTotalUnidad"></p>
                </div>
            </div>
        </div>
    </div>
</a>
`
        document.getElementById('purchased').innerHTML = htmlContentToAppend;
    }
}

/*Utilicé la función que aparece en products.js, y la adapté para llamar al json del artículo comprado.*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comprados = resultObj.data;
            showCarrito(comprados);
        }
    });
});


function cambiarCantidad(){
    var x = document.getElementById("inputCantidad").value;
    document.getElementById("cant").innerHTML= x;
}

function calcularCosto(){
    var x = document.getElementById("inputCantidad").value;
    document.getElementById("inputTotalUnidad").innerHTML = x*100 + " "+ "pesos";
}

function subtotal(){
    var x = document.getElementById("inputCantidad").value;
    document.getElementById("subtotal").innerHTML= x*100 + " "+ "pesos";
}

/*Estas funciones solo muestran el subtotal para el producto cargado en el Json, 
para que sirvan para cualquier producto creo que debería utilizarse un ciclo for, pero no lo he resuelto*/