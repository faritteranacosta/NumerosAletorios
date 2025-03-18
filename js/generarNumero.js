let numeroAleatorio;
function generarNumero() {
    if (document.getElementById("intentos").innerHTML == 0) {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        console.log(numeroAleatorio);
    } else {
        console.log("Ya se genero un numero");
    }
}
function comparar() {
        let entrada = document.getElementById("numero").value;
        console.log(entrada);
        if(entrada == ""){
            alert("Se debe ingresar un numero");
        }else{
            document.getElementById("intentos").innerHTML++;
            document.getElementById("ultimo-intentos").innerHTML = document.getElementById("numero").value;

            if (entrada == numeroAleatorio) {
                document.getElementById("resultado").innerHTML = "Correcto";
                alert("Felicidades has adivinado el numero");
                location.reload();
                return;
            } else if (entrada > numeroAleatorio) {
                document.getElementById("resultado").innerHTML = "Te doy una pista el numero es menor que " + entrada;
            } else {
                document.getElementById("resultado").innerHTML = "Te ayudo un poco el numero es mayor que " + entrada;
            }
            gameover();
        }
}

function gameover() {
    if (document.getElementById("intentos").innerHTML == 10) {
        alert("GAME OVER"+"\nEl numero era: "+numeroAleatorio);
        location.reload();
    } else if (document.getElementById("intentos").innerHTML == 5) {
        alert("Te quedan 5 intentos escoge bien tu siguiente numero");
    }
}

