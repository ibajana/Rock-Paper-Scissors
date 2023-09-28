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
    //se hace mayuscula la primera letra y el restante minuscula al igual que los elementos de la lista
    seleccion= seleccion[0].toUpperCase()+seleccion.slice(1).toLowerCase() 
    return seleccion // se retorna el valor que introduce el jugador
}

// funcion game para jugar 5 rondas
function game(){
    let win=0
    let loose=0
    let tie=0
    for (let i = 1; i <= 5; i++) {
        let [victoria,empate,derrota]=playRound(getPlayerSelection(),getComputerchoice(lista));
        win=win+ Number(victoria)
        loose=loose+ Number(derrota)
        tie=tie+ Number(empate)
    }
    console.log(win+"--"+loose+"--"+tie) // muestra el conteo de los resultados de las rondas,victoria, derrota, empate
    // condicion para evaluar la victoria
    if (win>tie && win>loose){
        console.log("You Win The Game!!!!")
    }
    // condicion para evaluar la derrota
    else if (loose>tie && loose>win){
        console.log("Sorry But you Loose")
    }
    // todo lo demas se considera un empate
    else{
        console.log("It's a TIE!!")
    }
}

//Funcion que corra una simple ronda y obtiene 2 parametros playerselection,computer choice
function playRound(player1,cpu){
    //El primer if contempla los empates
    if (player1==cpu){
        console.log("Player 1: "+player1)
        console.log("Computer: "+cpu)
        console.log("It's a tie")
        let win=0
        let loose=0
        let tie=1
        return[win,tie,loose]
    }
    //Cuando player 1 juega Rock
    else if (player1=="Rock"){
        if (cpu=="Paper"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You loose "+cpu+" beats "+player1)
            let win=0
            let loose=1
            let tie=0
            return[win,tie,loose]
        }
        else if (cpu=="Scissors"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You win "+player1+" beats "+cpu)
            let win=1
            let loose=0
            let tie=0
            return[win,tie,loose]
        }
    }
    // Cuando el player 1 juega Paper
    else if (player1=="Paper"){
        if (cpu=="Scissors"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You loose "+cpu+" beats "+player1)
            let win=0
            let loose=1
            let tie=0
            return[win,tie,loose]
        }
        else if (cpu=="Rock"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You win "+player1+" beats "+cpu)
            let win=1
            let loose=0
            let tie=0
            return[win,tie,loose]
        }
    }
    // Cuando el player 1 juega Scissors
    else if (player1=="Scissors"){
        if (cpu=="Rock"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You loose "+cpu+" beats "+player1)
            let win=0
            let loose=1
            let tie=0
            return[win,tie,loose]
        }
        else if (cpu=="Paper"){
            console.log("Player 1: "+player1)
            console.log("Computer: "+cpu)
            console.log("You win "+player1+" beats "+cpu)
            let win=1
            let loose=0
            let tie=0
            return[win,tie,loose]
        }
    }
}

// se ejecuta la funcion playround para conocer el resultado del juego
game()