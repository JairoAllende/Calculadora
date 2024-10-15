const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;
         
        if(boton.id === "c"){
            pantalla.textContent = "0"
            return;
        }

        if(boton.id === "delete"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1); 
            }
            return;
        }

        if(boton.id === "equal"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent = "Error!"
            }
            
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado
        } else{
            pantalla.textContent += botonApretado;
        }
    })
})

console.log("Hola!")

let numeroString = "2"

let numeroInt = 2

if(numeroString === numeroInt){
    console.log("Coinciden")
} else{
    console.log("No coinciden")
}

const color = document.querySelector(".changeColor")

function cambiarColor(){
    color.addEventListener("click", ()=>{
        console.log("botonapretado")
    })
}