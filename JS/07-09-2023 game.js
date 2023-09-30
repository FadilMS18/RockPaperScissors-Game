let gameContainer = document.querySelector("#biggest-container")
const batu = document.querySelector(`.beats[name="batu"]`)
const gunting = document.querySelector(`.beats[name="gunting"]`)
const kertas = document.querySelector(`.beats[name="kertas"]`)
const computerOption = new Array(batu, gunting, kertas)
const beats = document.querySelectorAll(".beats")
const  arrBeats = Array.from(beats)
const playerScore = document.querySelector("#player")
const computerScore = document.querySelector("#computer")
const historyBox = document.querySelector("#history-tracker")


let gameContainerClass = gameContainer.classList

function bringUpGame(){
    if(gameContainerClass.contains("opacityZero")){
        gameContainerClass.remove("opacityZero")
    }
    else return
}

let nom = 0
let nomCom = 0 

function playRock(){
    let randomChoice = computerOption[Math.floor( Math.random() * computerOption.length)]
    let computerChoice = randomChoice

    switch(computerChoice){
        case(gunting):{
            nom++
            playerScore.textContent = `${nom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Batu vs Computer Gunting, Player Wins!"
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
        case(kertas):{
            nomCom++
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Batu vs Computer Kertas, Computer Wins!";
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
        case(batu):{
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Batu vs Computer Batu, Draw!!"
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
    }
  
    if(nom == 5 || nomCom == 5){
        if(nom >= 5){
            nom = 0
            nomCom = 0
            alert("Player Win!!")
        }
        else if(nomCom >= 5){
            nom = 0
            nomCom = 0
            alert("Computer Win!!")
        }

        playerScore.textContent = `0`
        computerScore.textContent= `0`          
    }
}

function playScissorrs(){
    let randomChoice = computerOption[Math.floor( Math.random() * computerOption.length)]
    let computerChoice = randomChoice

    switch(computerChoice){
        case(gunting):{
            playerScore.textContent = `${nom}`
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Gunting vs Computer Gunting, Draw!!"
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
        case(kertas):{
            nom++
            playerScore.textContent = `${nom}`
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Gunting vs Computer Kertas, Player Wins!";
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
        case(batu):{
            nomCom++
            playerScore.textContent = `${nom}`
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Gunting vs Computer Batu, Computer Wins!!"
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
    }
  
    if(nom == 5 || nomCom == 5){
        if(nom >=5){
            nom = 0
            nomCom = 0
            alert("Player Win!!")
        }
        else if(nomCom >= 5){
            nom = 0
            nomCom = 0
            alert("Computer Win!!")
        } 

        playerScore.textContent = `0`
        computerScore.textContent= `0`          
    }
}

function playPaper(){
    let randomChoice = computerOption[Math.floor( Math.random() * computerOption.length)]
    let computerChoice = randomChoice

    switch(computerChoice){
        case(gunting):{
            nomCom++ 
            playerScore.textContent = `${nom}`
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Kertas vs Computer Gunting, Computer Win!!"
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
        case(kertas):{
            playerScore.textContent = `${nom}`
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Kertas vs Computer Kertas, Draw!!";
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
        case(batu):{
            nom++
            playerScore.textContent = `${nom}`
            computerScore.textContent = `${nomCom}`
            const makePara = document.createElement("p")
            historyBox.appendChild(makePara)
            makePara.textContent ="Player memilih Kertas vs Computer Batu, Player Wins!!"
            historyBox.scrollTop = historyBox.scrollHeight
            break;
        }
    }
  
    if(nom >= 5 || nomCom >= 5){
        if(nom >= 5){
            nom = 0
            nomCom = 0
            alert("Player Win!!");
        } 
        else if(nomCom >= 5){
            nom = 0
            nomCom = 0
            alert("Computer Win");
        }
        playerScore.textContent = `0`
        computerScore.textContent= `0`          
    }


}


function playGame(){
    if(pilihanPlayer === "batu"){
        // console.log(pilihanPlayer)
        playRock()
    }
    else if(pilihanPlayer === "gunting"){
        // console.log(pilihanPlayer)
        playScissorrs()
        // console.log(elem)
    }
    else if(pilihanPlayer === "kertas"){
        // console.log(pilihanPlayer)
        playPaper()
        // console.log(elem)
    }

}
var pilihanPlayer = ""

arrBeats.forEach((elemen) =>{
    let id = elemen.id
    if(id === "batu"){
        // pilih = `${id}`
        elemen.addEventListener("click", ()=>{
            pilihanPlayer = `${id}`
            playGame()
        })
    }
    else if( id === "gunting"){
        pilih = `${id}`
        elemen.addEventListener("click", ()=>{
            pilihanPlayer = `${id}`
            playGame()
        })
    }
    else if(id === "kertas"){
        pilih = `${id}`
        elemen.addEventListener("click", ()=>{
            pilihanPlayer = `${id}`
            playGame()
        })
    }

})