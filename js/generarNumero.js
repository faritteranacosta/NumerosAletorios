var numeroAleatorio;
var listaIntentos = [];
function generarNumero() {
    if (document.getElementById("intentos").innerHTML == 0) {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        console.log(numeroAleatorio);
    }
}
function comparar() {
        let entrada = document.getElementById("numero").value;
        console.log(entrada);
        if(entrada == ""){
            playAudio("error");
            Swal.fire({
                text: "Se debe ingresar un numero",
                icon: "warning",
                confirmButtonText: "Aceptar",
                showConfirmButton: false,
                timer: 2000
            });
        }else{
            document.getElementById("intentos").innerHTML++;
            document.getElementById("ultimo-intentos").innerHTML = entrada;
            listaIntentos.push(entrada);
            
            if (entrada == numeroAleatorio) {
                playAudio("win");
                document.getElementById("resultado").innerHTML = "Correcto";
                Swal.fire({
                    title: "BOOYAH",
                    text: "Felicidades adivino el numero magico",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }).then((result)=> {
                    if(result.isConfirmed) {
                        location.reload();
                    }
                });
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
        Swal.fire({
            title: "GAME OVER",
            text: "El numero magico era: "+numeroAleatorio,
            icon: "error"
        }).then((result)=> {
            if(result.isConfirmed) {
                location.reload();
            }
        });
    } else if (document.getElementById("intentos").innerHTML == 5) {
        playAudio("al");
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Te quedan 5 intentos escoge bien tu siguiente numero",
            showConfirmButton: false,
            timer: 2000
          });
    }
}

