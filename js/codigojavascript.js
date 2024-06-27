            function aleatorio (min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            function eleccion (jugada) {
                    let resultado = ""
                    if (jugada==1) {
                        resultado = " Piedra 🪨"
                    }
                    else if(jugada==2) {
                        resultado = " Papel 📃"
                }
                else if  (jugada==3) {
                        resultado =  " Tijera ✂️"
                }
                else {
                    resultado =  " La CARLITOS mi Brodi"
                }
                    return resultado
            }
            // 1 es Piedra, 2 es Papel y 3 es Tijera
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0

            while  (triunfos < 3 && perdidas < 3) {
                pc = aleatorio(1,3)
                // let nombrejugador = prompt("Cual es tu nombre CHE? ") 
                jugador = parseInt(prompt("Elije: 1 para Piedra, 2 para Papel, 3 para tijera"))
                
                alert("La Pc eligió: " + eleccion(pc))
                alert("Elegiste: " + eleccion(jugador)) //llamo a la funcion
               
                //COMBATE ENTRE JUGADOR Y PC

                if(pc == jugador){
                    alert("EMPATARON")
                }
                else if (jugador == 1 && pc == 3){
                    alert("GANASTE")
                    triunfos = triunfos + 1
                }
                else if(jugador == 2 && pc == 1) {
                    alert("GANASTE")
                    triunfos = triunfos + 1
                }
                else if(jugador == 3 && pc == 2) {
                    alert("GANASTE")
                    triunfos = triunfos + 1
                }
                else {
                    alert("PERDISTE")
                    perdidas = perdidas + 1
                }
            }
            alert ("La Pc Ganó " + perdidas)
            alert("Yo gané " + triunfos)
   