var relatedProducts = [];
var comments = [];

function showImagenes(array){

    let htmlContentToAppend ="";

    for(let i= 0; i < array.length; i++){
        let imagenes = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imagenes + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImg").innerHTML = htmlContentToAppend;
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let pName = document.getElementById("productName");
            let pDescription = document.getElementById("productDescription");
            let pCosto = document.getElementById("productCost");
            let pCount = document.getElementById("productSoldCount");
            let pCategory = document.getElementById("productCat");
        
            pName.innerHTML = product.name;
            pDescription.innerHTML = product.description;
            pCosto.innerHTML = product.currency + ' ' + product.cost;
            pCount.innerHTML = product.soldCount;
            pCategory.innerHTML = product.category;

            showImagenes(product.images);
        }
    });

});

function leerComentarios(objetos){

    let htmlContentToAppend = "";

    for(let i = 0 ; i < objetos.length; i++){
        let comentos = objetos[i];

        htmlContentToAppend += `
            <div class="row">
                <div class="col-3">
                    <p>` + comentos.score + `` + comentos.description + `</p>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ comentos.user +`</h4>
                        <small class="text-muted">` + comentos.dateTime + ` </small>
                    </div>
                </div>
            </div>
        </a>
        `
        document.getElementById("comenta").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            objetos = resultObj.data;
            leerComentarios(objetos);
        }
    });
});

function showRelated(rel){

    let htmlContentToAppend = "";
    for(let i = 1; i < relatedProducts.length; i++){
        let relacionados = relatedProducts[i];

        

            htmlContentToAppend += `
                <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + relacionados.imgSrc + `" alt="` + relacionados.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ relacionados.name +`</h4>
                                <small class="text-muted">` + relacionados.soldCount + ` artículos</small>

                            </div>
                            <div>
                                <p>` + relacionados.description + `</p>
                                <p>` + relacionados.currency + ` ` + relacionados.cost + `</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            `
        }

        document.getElementById("related").innerHTML = htmlContentToAppend;
    }


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            relatedProducts = resultObj.data;
            showRelated(relatedProducts);
        }
    });
});


function comentario(){

    var comentario = document.getElementById("comment").value;
    var puntuacion = document.getElementById("score").value;

    if (comentario == ""){
        document.getElementById("commentError").innerHTML = "No ha ingresado nada aun";
    } else if ( puntuacion == ""){
        document.getElementById("scoreError").innerHTML ="No quieres ingresar una puntuación?";
    } else {
        document.getElementById("enviado").innerHTML = "Gracias por tu comentario!";
        document.getElementById("refresh").remove();
    };
}


