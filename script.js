document.addEventListener("DOMContentLoaded", function(){

    var currentColor = "white"

    var canvasHolder = document.getElementById("canvas")
    var paletteHolder = document.getElementById("palette")

    var colorsToAdd = ["white","red","orange","yellow","green","blue","indigo","violet"]

    // var canvasWidth = 20
    // var canvasLength = 20
    var canvasWidth = window.prompt("how tall? (use reasonable numbers or i'll kill you(also nothing will show))")
    var canvasLength = window.prompt("how long?")

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