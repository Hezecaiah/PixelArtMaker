var currentColor = "white"
var clickHeld = false;
var canvasHolder = document.getElementById("canvasFinder")
var paletteHolder = document.getElementById("paletteFinder")
var colorsToAdd = ["white","red","orange","yellow","green","blue","indigo","violet"]
var canvasWidth = window.prompt("How tall? (Please use reasonable numbers for the time being.)", 20)
var canvasLength = window.prompt("How long?", 20)

document.addEventListener("DOMContentLoaded", function(){
    generateCanvas()
    generatePalette()
    assignColorPickerListener()
    document.addEventListener("mouseup", function(){
        clickHeld = false
    })
})

function generateCanvas(){
    for(let i = 0;i < canvasLength;i++){
        var rowGen = document.createElement("div")
        for(let j = 0;j < canvasWidth;j++){
            let tempBox = document.createElement("div")
            tempBox.classList.add("pixel")
            tempBox.style.backgroundColor = currentColor
            tempBox.addEventListener("mousedown", function(){
                clickHeld = true
            })
            rowGen.appendChild(tempBox)
        }
        canvasHolder.appendChild(rowGen)
    }
    for(let i = 0;i < canvasHolder.getElementsByClassName("pixel").length;i++){
        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("mousedown", (event) =>{
            event.target.style.backgroundColor = currentColor
        })
        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("mouseover", (event) => {
            if(clickHeld){
                event.target.style.backgroundColor = currentColor
            }
        })
    }
}

function generatePalette(){
    for(let i = 0;i < colorsToAdd.length;i++){
        var newColor = document.createElement("div")
        newColor.classList.add("color")
        newColor.style.backgroundColor = colorsToAdd[i]
        paletteHolder.appendChild(newColor)
    }
    var indicator = document.createElement("p")
    indicator.id = "colorIndicator"
    indicator.innerText = "Current Brush Color: "
    paletteHolder.appendChild(indicator)
    var colorDisplay = document.createElement("div")
    colorDisplay.classList.add("color")
    colorDisplay.style.backgroundColor = currentColor
    colorDisplay.id = "colorDisplay"
    colorDisplay.addEventListener("onchange", function(){
        colorDisplay.classList[1] = currentColor
    })
    paletteHolder.appendChild(colorDisplay)
    for(let i = 0;i < paletteHolder.getElementsByClassName("color").length;i++){
        paletteHolder.getElementsByClassName("color")[i].addEventListener("click", function() {
            var temp = paletteHolder.getElementsByClassName("color")[i]
            currentColor = temp.style.backgroundColor
            var display = document.getElementById("colorDisplay")
            display.style.backgroundColor = currentColor
        })
    }
}

function assignColorPickerListener(){
    var pickerListener = document.getElementById("colorPicker")
    pickerListener.addEventListener("change", (event) =>{
        currentColor = event.target.value
        document.getElementById("colorDisplay").style.backgroundColor = currentColor
    })
}

//TO DO:
//Implement the fill drawing method

//Stretch: Local storage, saving paintings. Make the mouse pointer look like a brush.
//Implement bounding catches for the canvas size