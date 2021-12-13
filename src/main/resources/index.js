
var lista = document.createElement("li");


cargar.addEventListener("click", function(){
    
    
    axios.get(" https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {
        pregunta : document.getElementById("pregunta").value,
        video : TmpPath 

 
        
    })
    .catch(function (error) {
        console.log(error);

        
    })
});