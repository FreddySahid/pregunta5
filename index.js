
var lista = document.createElement("li");
 
var listaR = document.getElementById("listaR")


cargar.addEventListener("click", function(){
    
    
    axios.get(" https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then(function (response) {
        console.log(response.data);
        lista = response.data;
        listaR.appendChild(lista)

    })

        
});