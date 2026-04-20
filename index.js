// Servidor basico
const http = require("http");
const {port, environment} = require('./config').getEnv();

http.createServer().listen(port, async () => {
    console.log(`env ${environment}`)
    console.log(`server is running on port ${port}`)
}).on('error', (e) => console.log(e));


// Funcion basica para mostrar u ocultar contenido de forma dinamica
function hideContent(num) {
    var contentToHide = document.getElementById(`content-to-hide-${num}`)
    if(contentToHide.style.display === "none"){
        contentToHide.style.display = "block";
    } else {
        contentToHide.style.display = "none";
    }
}

function checkInput(){

}

function hideContentSpecial(num, input){
    // La box de input que necesita una password, aparece en pantalla
      var inputBox = document.getElementById("input-box")
      if(inputBox.style.display === "none"){
        contentToHide.style.display = "block";
      }
      // Logica para mostrar o no los misterios 
      var contentToHide = document.getElementById(`content-to-hide-${num}`)
    if(contentToHide.style.display === "none"){
        contentToHide.style.display = "block";
    } else {
        contentToHide.style.display = "none";
    }
}

