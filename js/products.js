const ORDER_ASC_BY_COST = "De menor a mayor";
const ORDER_DESC_BY_COST = "De mayor a menor";
const ORDER_BY_SOLD_COUNT = "Por relevancia";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a,b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a,b) {
            if ( a.cost > b.cost ){ return -1; }  
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_SOLD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCost === undefined) || (minCost != undefined && parseInt(product.soldCount) >= minCost)) && 
            ((maxCost === undefined) || (maxCost != undefined && parseInt(product.soldCount) <= maxCost))){

       
                htmlContentToAppend += `
                <div class="col-md-4 col-12 p-1">
                    <a href="product-info.html" class="list-group-item-action card">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                        <div class="card-body" style="height:200px;">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="card-title">`+ product.name + `</h4>
                                <small class="text-muted">` + product.soldCount + ` artículos</small>
                            </div>
                            <div>
                                    <p>` + product.description + `</p>
                                    <p>` + product.currency + ` ` + product.cost + `</p>
                            </div>
                        </div>
                    </a>
                </div>
                `
            }
    
            document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
        }
    }

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria =sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    showProductsList();
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAscCost").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDescCost").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCost").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_SOLD_COUNT);
    });

    document.getElementById("clearRangeFilterCost").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductsList();
    });
});
