// Selector
const inputName = document.querySelector("#input-name")
const buttonName = document.querySelector("#first-layer-button")
const firstLayerContainer = document.querySelector("#first-layer-container")
const firstLayerParentContainer = document.querySelector("#first-layer-parent-container")


// InputName transform
inputName.addEventListener("click", ()=>{
    if(inputName.classList.contains("inputName-boxShadow")){
        inputName.classList.remove("inputName-boxShadow");
        inputName.classList.add("input-name-transform");        
    }
    setTimeout(()=>{
        inputName.classList.remove("input-name-transform")
        inputName.classList.add("inputName-boxShadow");
    },300)

})

// KEyPress Transition
inputName.addEventListener("keypress",()=>{
    if(inputName.classList.contains("inputName-boxShadow")){
        inputName.classList.remove("inputName-boxShadow");
        inputName.classList.add("input-name-transform");        
        
        setTimeout(()=>{
            inputName.classList.remove("input-name-transform")
            inputName.classList.add("inputName-boxShadow");
        },150)
    }
})



// firstLayer Opacity 0
buttonName.addEventListener("click", ()=>{
    namaPlayer = inputName.value;
    console.log(namaPlayer)
    firstLayerContainer.classList.add("opacityZero")

    setTimeout(secondLayer, 500)                
})

// FirstLayer Opacity 0 jika enter ditekan
inputName.addEventListener("keypress", (e)=>{
    if(e.code !== "Enter" ) return // akan return jika bukan Enter
    if(e.code = "Enter"){
        namaPlayer = inputName.value;
        console.log(namaPlayer)
        firstLayerContainer.classList.add("opacityZero")
    
        setTimeout(secondLayer, 500) 
    }

})

// Layer ke2
function secondLayer(){
    let introContainer = document.createElement("div")
    introContainer.setAttribute("id", "first-layer-container")
    introContainer.classList.add("opacityZero")
    let intro = document.createElement("h3")
    intro.setAttribute("id", "first-layer-title")
    
    firstLayerParentContainer.appendChild(introContainer)
    introContainer.appendChild(intro)
    intro.textContent = `Baiklah ${namaPlayer}, kita akan bermain Rock Paper Scissors with the Computer first to 5 will win`
        
    setTimeout(()=>{
        introContainer.classList.remove("opacityZero")
    },100)

    // TimeOut Layer ke 2 untuk keluar
    setTimeout(()=>{
        introContainer.classList.add("opacityZero")
    },2000)

    // TimeOut yang akan memunculkan gamenya
    setTimeout(bringUpGame, 2600)
}

