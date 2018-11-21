var currentColor = "white"
var clickHeld = false;
var canvasHolder = document.getElementById("canvasFinder")
var paletteHolder = document.getElementById("paletteFinder")
var colorsToAdd = ["white","red","orange","yellow","green","blue","indigo","violet"]
var canvasWidth = window.prompt("How tall? (Please use reasonable numbers for the time being.", 20)
var canvasLength = window.prompt("How long?", 20)

document.addEventListener("DOMContentLoaded", function(){
    generateCanvas()
    generatePalette()
    assignClickListeners()
    assignClickHeldListeners()
    assignPaletteListeners()
    document.addEventListener("mouseup", function(){
        clickHeld = false
    })
})

function generateCanvas(){
    for(let i = 0;i < canvasLength;i++){
        var rowGen = document.createElement("div")
        for(let j = 0;j < canvasWidth;j++){
            let tempBox = document.createElement("div")
            tempBox.classList.add("pixel","white")
            tempBox.addEventListener("mousedown", function(){
                clickHeld = true
            })
            rowGen.appendChild(tempBox)
        }
        canvasHolder.appendChild(rowGen)
    }
}

function generatePalette(){
    for(let i = 0;i < colorsToAdd.length;i++){
        var newColor = document.createElement("div")
        newColor.classList.add("color",colorsToAdd[i])
        paletteHolder.appendChild(newColor)
    }
    var indicator = document.createElement("p")
    indicator.id = "colorIndicator"
    indicator.innerText = "Current Brush Color: "
    paletteHolder.appendChild(indicator)
    var colorDisplay = document.createElement("div")
    colorDisplay.classList.add("color", currentColor)
    colorDisplay.id = "colorDisplay"
    colorDisplay.addEventListener("onchange", function(){
        colorDisplay.classList[1] = currentColor
    })
    paletteHolder.appendChild(colorDisplay)
}

function assignClickListeners(){
    for(let i = 0;i < canvasHolder.getElementsByClassName("pixel").length;i++){
        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("mousedown", function() {
            var temp = canvasHolder.getElementsByClassName("pixel")[i]
            temp.classList.replace(temp.classList[1],currentColor)
        })
    }
}

function assignClickHeldListeners(){
    for(let i = 0;i < canvasHolder.getElementsByClassName("pixel").length;i++){
        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("mouseover", function() {
            if(clickHeld){
                var temp = canvasHolder.getElementsByClassName("pixel")[i]
                temp.classList.replace(temp.classList[1],currentColor)
            }
        })
    }
}

function assignPaletteListeners(){
    for(let i = 0;i < paletteHolder.getElementsByClassName("color").length;i++){
        paletteHolder.getElementsByClassName("color")[i].addEventListener("click", function() {
            var temp = paletteHolder.getElementsByClassName("color")[i]
            currentColor = temp.classList[1]
            var display = document.getElementById("colorDisplay")
            display.classList.replace(display.classList[1],currentColor)
        })
        
    }
}

//TO DO:
//Implement the fill drawing method
//Implement the color selector mentioned in the prompt to work around implementing every single color in css
//  -> Adjust current color event to work with color selector

//Stretch: Local storage, saving paintings. Make the mouse pointer look like a brush.
//Implement bounding catches for the canvas size