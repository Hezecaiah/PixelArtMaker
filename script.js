document.addEventListener("DOMContentLoaded", function(){

    var currentColor = "white"

    var canvasHolder = document.getElementById("canvas")
    var paletteHolder = document.getElementById("palette")

    var canvasWidth = 20
    var canvasLength = 20
    // var canvasWidth = window.prompt("how tall? (use reasonable numbers or i'll kill you(also nothing will show))")
    // var canvasLength = window.prompt("how long?")

    for(let i = 0;i < canvasLength;i++){
        var rowGen = document.createElement("div")

        for(let j = 0;j < canvasWidth;j++){
            let tempBox = document.createElement("div")
            tempBox.classList.add("pixel")
            rowGen.appendChild(tempBox)
        }

        document.getElementById("canvas").appendChild(rowGen)
    }

    //generate the colors here
    

    for(let i = 0;i < canvasHolder.getElementsByClassName("pixel").length;i++){
        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("click", function() {
            console.log("hey you clicked this div: " + i + " which is" + canvasHolder.childNodes[i])
            var temp = canvasHolder.getElementsByClassName("pixel")[i]
            temp.classList.add(currentColor) = currentColor
        })
    }

    for(let i = 0;i < paletteHolder.getElementsByClassName("color").length;i++){
        paletteHolder.getElementsByClassName("color")[i].addEventListener("click", function() {
            console.log("hey you clicked this div: " + i + " which is" + canvasHolder.childNodes[i])
            var temp = paletteHolder.getElementsByClassName("color")[i]
            currentColor = temp.classList[1]
        })
    }

    
})