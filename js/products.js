//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var productsList = [];

function showProducts(lista){

    let htmlContentToAppend = "";
    for( let i = 0; i< lista.length; i++){
        let products = lista[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action" onclick="enterProducts('` + products.name + `'>
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `"alt="` + products.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                    <h4 clase="mb-1">` + products.name + `</h4>
                    <small class="text-muted">` + products.productCount + `artículos</small>
                    
                </div>
                <div>
                    <p>` + products.description + `</p>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}                        
    
function enterProducts(products){
    let url;
    if(products==="Autos"){
        url="https://japdevdep.github.io/ecommerce-api/product/all.json";
    } else if(products==="Juguetes"){
        url="../juguetes.json"
    }
    
    getJsonData(url).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsList = resultObj.data;
            showProducts(productsList);
        }

    });
}    
   
function showProducts(lista){
    let htmlContentToAppend = "";
    for(let i=0; i < lista.length; i++){
        let category = lista[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ products.name +`</h4>
                        <small class="text-muted">` + products.soldCount + ` artículos</small>

                    </div>
                    <div>
                        <p>` + products.description + `</p>
                        <p>` + products.currency + ` ` + products.cost + `</p>
                    </div>
                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}
   
document.addEventListener("DOMContentLoaded", function (e) {
    getJsonData(CATEGORIES_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsList = resultObj.date;
            showProducts(lista);
        }
    });

});