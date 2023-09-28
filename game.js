console.log("javascript first game")

let lista=["Rock","Scissors","Paper"] //lista con elementos a escoger aleatoriamente
//let playerSelection = getPlayerSelection() //Se ejecuta la funcion para obenet el valor inicial del jugador


//Funcion para que la pc elija su juego
function getComputerchoice(list){
    aleatorio=Math.floor(Math.random()*list.length)// Escogiendo el indice de a lista
    valor=list[aleatorio] //escogiendo el valor que corresponde al indice aleatorio
    return valor
}


// Funcion para que el jugador introduzca su valor
function getPlayerSelection(){
    let seleccion=prompt("Rock, Scissors or Paper?: ","Rock")
    // Case sensitive
    seleccion= seleccion[0].toUpperCase()+seleccion.slice(1).toLowerCase()
    return seleccion // se retorna el valor que introduce el jugador
}


//Funcion que corra una simple ronda y obtiene 2 parametros playerselection,computer choice
function playRound(player1,cpu){
    //El primer if contempla los empates
    if (player1==cpu){
        console.log("Player 1: "+player1)
        console.log("Computer: "+cpu)
        console.log("It's a tie")
    }
    //Cuando player 1 juega Rock
    else if (player1=="Rock"){
        if (cpu=="Paper"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You loose "+cpu+" beats "+player1)
        }
        else if (cpu=="Scissors"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You win "+player1+" beats "+cpu)
        }
    }
    // Cuando el player 1 juega Paper
    else if (player1=="Paper"){
        if (cpu=="Scissors"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You loose "+cpu+" beats "+player1)
        }
        else if (cpu=="Rock"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You win "+player1+" beats "+cpu)
        }
    }
    // Cuando el player 1 juega Scissors
    else if (player1=="Scissors"){
        if (cpu=="Rock"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You loose "+cpu+" beats "+player1)
        }
        else if (cpu=="Paper"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You win "+player1+" beats "+cpu)
        }
    }
}

// se ejecuta la funcion playround para conocer el resultado del juego
playRound(getPlayerSelection(),getComputerchoice(lista))
playRound(getPlayerSelection(),getComputerchoice(lista))
playRound(getPlayerSelection(),getComputerchoice(lista))
playRound(getPlayerSelection(),getComputerchoice(lista))
playRound(getPlayerSelection(),getComputerchoice(lista))