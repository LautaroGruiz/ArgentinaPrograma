function notification(){
    swal("Oh no 😢", "...No tenemos disponible ningun C.V para descargar");
}

function notificationgit(){
    swal("Oh no 😢", "...No tenemos disponible un enlace para mostrar");
}

var i = 1
var fotos = document.getElementById("imgprofile")


        setTimeout(() => {
            if ( i = 1){
            fotos.src="./image/perfil-lucasm.jpg"
            i = 2
            }
        }, 2000);
    
    
        setTimeout(() => {
            if ( i = 2){
            fotos.src="./image/perfil-lautaro.png"
            }
        }, 4000);