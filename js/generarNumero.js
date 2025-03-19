let numeroAleatorio;
let listaIntentos = [];
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
            playAudio("error");
            alert("Se debe ingresar un numero");
        }else{
            document.getElementById("intentos").innerHTML++;
            document.getElementById("ultimo-intentos").innerHTML = entrada;
            listaIntentos.push(entrada);
            
            if (entrada == numeroAleatorio) {
                playAudio("win");
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
            console.log(listaIntentos);
        }
}

function playAudio(au) {
    let audio = document.getElementById(au);
    audio.play();
}

function gameover() {
    if (document.getElementById("intentos").innerHTML >= 10) {
        document.getElementById("numero").disabled = true;
        playAudio("gameOver");
        alert("GAME OVER"+"\nEl numero era: "+numeroAleatorio);
    } else if (document.getElementById("intentos").innerHTML == 5) {
        playAudio("al");
        alert("Te quedan 5 intentos escoge bien tu siguiente numero");
    }
}

