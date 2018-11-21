document.addEventListener("DOMContentLoaded", function(){

    var currentColor = "white"
    var canvasHolder = document.getElementById("canvas")
    var paletteHolder = document.getElementById("palette")
    var colorsToAdd = ["white","red","orange","yellow","green","blue","indigo","violet"]
    var canvasWidth = window.prompt("How tall? (Please use reasonable numbers for the time being.", 20)
    var canvasLength = window.prompt("How long?", 20)

    for(let i = 0;i < canvasLength;i++){
        var rowGen = document.createElement("div")
        for(let j = 0;j < canvasWidth;j++){
            let tempBox = document.createElement("div")
            tempBox.classList.add("pixel","white")
            rowGen.appendChild(tempBox)
        }
        document.getElementById("canvas").appendChild(rowGen)
    }

    for(let i = 0;i < colorsToAdd.length;i++){
        var newColor = document.createElement("div")
        newColor.classList.add("color",colorsToAdd[i])
        paletteHolder.appendChild(newColor)
    }

    for(let i = 0;i < canvasHolder.getElementsByClassName("pixel").length;i++){
        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("click", function() {
            var temp = canvasHolder.getElementsByClassName("pixel")[i]
            temp.classList.replace(temp.classList[1],currentColor)
        })
    }

    for(let i = 0;i < paletteHolder.getElementsByClassName("color").length;i++){
        paletteHolder.getElementsByClassName("color")[i].addEventListener("click", function() {
            var temp = paletteHolder.getElementsByClassName("color")[i]
            currentColor = temp.classList[1]
        })
    }
})

//TO DO: Move loops out of the onload as anonymous functions and declare them as functions. Per James:
// If you want this to look even cleaner, moving all of your for loops out of the onload and making 
// the functions then calling them inside the onload instead. Yours works great and looks good but if you want 
// to make things easier to read and make things more manageable with larger code, divide you code into smaller
// reusable functions.

//Implement the color selector mentioned in the prompt to work around implementing every single color in css
//Implement the other drawing methods (holding down and dragging, maybe filling) mentioned in the readme

//Stretch: Local storage, saving paintings. Make the mouse pointer look like a brush.