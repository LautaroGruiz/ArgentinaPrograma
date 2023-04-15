function notification(){
    swal("Oh no 😢", "...No tenemos disponible ningun C.V para descargar");
}

function notificationgit(){
    swal("Oh no 😢", "...No tenemos disponible un enlace para mostrar");
}

/* var fotos = document.getElementById("imgprofile")


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
        }, 4000); */


const datos = [
    {
        src: "perfil-lautaro.png",
        name: "Lautaro Gonzalez Ruiz"
    },
    {
        src: "perfil-matias.jpg",
        name: "Matias Chanquia",
    },
    {
        src: "perfil-lucasm.jpg",
        name: "Lucas Monzón",
    }
]


window.addEventListener("load", () => {
    const img = document.querySelector("#imgprofile");
    let indiceImg = 0;
    let primeraCarga = true;

    function cambiarImagen() {
        if(primeraCarga) {
            primeraCarga = false;
        } else {
            img.style.opacity = 0;
        }
        setTimeout(() => {
            
            if (indiceImg === datos.length) {
                indiceImg = 0;
            }
            img.src = `./image/${datos[indiceImg].src}`;
            img.alt = `${datos[indiceImg].name}`;
            img.style.opacity = 1;
            indiceImg++;
        }, 500);
    }

    cambiarImagen();
    setInterval(cambiarImagen, 3000);

    const contentModal = document.querySelector(".content-modal");
    const modal = document.querySelector(".modal");
    const btnCerrarModal = document.querySelector(".btn-cerrar-modal");
    const imgModal = document.querySelector(".content-modal > img");
    const nombreModal = document.querySelector(".content-modal > p");

    const cambiarSizeContent = () => {
        if(window.innerHeight < 630) {
            if(window.innerHeight > window.innerWidth) {
                contentModal.style.height = "auto";
                contentModal.style.width = "90%";
            } else {
                contentModal.style.width = "auto";
                contentModal.style.height = "90%";
            }
        } else {
            contentModal.style.height = "auto";
            contentModal.style.width = "90%";
        }
    };

    cambiarSizeContent();
    window.addEventListener("resize", cambiarSizeContent);

    const cerrarModal = () => {
        modal.style.display = "none";
        imgModal.src = "";
        nombreModal.textContent = "";
        document.body.style.overflow = "visible";
    }
    
    const abrirModal = () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        let indice;
        if(indiceImg === 0) {
            indice = 0;
        } else {
            indice = indiceImg - 1;
        }
        imgModal.src = `./image/${datos[indice].src}`;
        imgModal.alt = datos[indice].name;
        nombreModal.textContent = datos[indice].name;
    }
    
    window.addEventListener("click", (e) => {
        if(e.target === modal) {
            cerrarModal();
        }
    });
    
    btnCerrarModal.addEventListener("click", cerrarModal)
    
    img.addEventListener("click", abrirModal);
});