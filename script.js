document.addEventListener("DOMContentLoaded", function(){

    var currentColor = "white"

    var canvasHolder = document.getElementById("canvas")
    var paletteHolder = document.getElementById("palette")

    console.log(canvasHolder)
    console.log(paletteHolder)

    for(let i = 0;i < canvasHolder.getElementsByClassName("pixel").length;i++){

        canvasHolder.getElementsByClassName("pixel")[i].addEventListener("click", function() {

            console.log("hey you clicked this div: " + i + " which is" + canvasHolder.childNodes[i])
            var temp = canvasHolder.getElementsByClassName("pixel")[i]
            temp.id = currentColor
            
        })
    }


    for(let i = 0;i < paletteHolder.getElementsByClassName("color").length;i++){

        paletteHolder.getElementsByClassName("color")[i].addEventListener("click", function() {

            console.log("hey you clicked this div: " + i + " which is" + canvasHolder.childNodes[i])
            var temp = paletteHolder.getElementsByClassName("color")[i]
            currentColor = temp.id
            console.log(currentColor)
            
        })
    }

    
})