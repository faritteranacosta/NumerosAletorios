# NumerosAletorios
Desarrolla de manera individual una versión web del Juego del Número Mágico. El objetivo es que el jugador adivine un número aleatorio entre 1 y 100 en un máximo de 10 intentos. Después de cada intento, deberás informarle si el número es correcto, mayor o menor, y mostrarle los números que ya ha intentado. El juego terminará cuando el jugador acierte o agote sus intentos, y se le ofrecerá la opción de jugar de nuevo.

Requisitos:
Generar el número aleatorio:
El juego debe generar un número aleatorio entre 1 y 100 al inicio.

Control de intentos:
Lleva un registro de los intentos del jugador, comenzando en 1. El jugador tiene un máximo de 10 intentos.

Entrada de números:
El jugador debe poder ingresar su conjetura (número) a través de un campo de entrada en la página.

Registro de intentos anteriores:
Muestra una lista de los números que el jugador ha intentado previamente.

Validación de acierto:

Si el jugador acierta:
Muestra un mensaje de felicitaciones.
Deshabilita el campo de entrada para que el jugador no pueda seguir ingresando números.
Muestra un botón para volver a jugar.
Si el jugador falla y le quedan intentos:
Informa al jugador si el número es mayor o menor que su conjetura.
Permite seguir ingresando conjeturas, incrementando el contador de intentos.
Si el jugador falla y ya no le quedan intentos:
Muestra un mensaje indicando que el juego ha terminado.
Informa cuál era el número correcto.
Deshabilita el campo de entrada y muestra el botón para volver a jugar.
Reinicio del juego:
Cuando el jugador elija volver a jugar, el juego debe reiniciarse completamente: el número aleatorio debe ser nuevo, el contador de intentos debe reiniciarse y la lista de intentos previos debe borrarse.

Especificaciones técnicas:
La interfaz debe ser simple pero funcional. Incluye un campo de entrada para el número, un botón para enviar el número, una sección para mostrar el historial de intentos, y un mensaje de feedback que le diga al jugador si su conjetura es correcta o no.
Debes implementar el juego utilizando HTML, CSS y JavaScript.
El diseño debe ser adaptable y funcional y verse bien hasta en dispositivos móviles.
Considera una experiencia de usuario fluida y clara, proporcionando mensajes de retroalimentación en cada intento.
Pasos del Algoritmo:
Generar el número aleatorio entre 1 y 100 al iniciar el juego.
Registro de intentos: Comenzar con el intento 1.
Input del jugador: El jugador ingresa un número.
Verificar la conjetura:
Si es correcta:
Mostrar un mensaje de felicitaciones.
Detener el juego.
Mostrar opción de reiniciar el juego.
Si es incorrecta y quedan intentos:
Indicar al jugador que falló y si el número es mayor o menor.
Mostrar los intentos anteriores.
Incrementar el contador de intentos.
Si no quedan intentos:
Informar que el juego ha terminado y mostrar el número correcto.
Mostrar opción de reiniciar el juego.
Reinicio: Cuando el jugador elija reiniciar, restablece la lógica del juego y la interfaz de usuario.
Entrega:
La entrega debe incluir:
Código fuente completo en HTML, CSS y JavaScript.
Comentarios en el código explicando los bloques principales.
Capturas de pantalla del juego en funcionamiento.
Enlace a una versión desplegada (si es posible) en GitHub Pages, Netlify u otro servicio de hosting gratuito.
Criterios de evaluación:
Funcionamiento correcto del juego de acuerdo con los pasos descritos.
Claridad y fluidez en la interfaz de usuario.
Eficiencia y organización del código.
Uso adecuado de HTML, CSS y JavaScript.
Creatividad en el diseño del juego e interacción del usuario.