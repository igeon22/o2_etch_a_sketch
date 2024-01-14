
let generateButton = document.querySelector(".generate");
let slider = document.querySelector("#size");
let boxSizeDisplay = document.querySelector("#size-display");
let container = document.querySelector(".container");



slider.addEventListener("change",()=>{
    boxSizeDisplay.textContent = `Grid Numbers: ${slider.value}x${slider.value}`;
})

function generateGrids(size){
    clearBoard();
    for(let i = 0;i<size;i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j< size;j++){
            let grid = document.createElement("div");
            grid.classList.add("block");

            
            row.append(grid);
            grid.addEventListener("mouseover",(e)=>{
                if(grid.style.background === ""){
                    grid.style.background = randomizeColor();
                }
                grid.style.border = "1px solid transparent";
                

                
            })
        }

        container.append(row);
    }
}

function clearBoard(){
    let grids = document.querySelectorAll(".row");

    if(grids.length>0){
        grids.forEach((grid)=>{
            grid.remove();
        })
    }

    
}


generateButton.addEventListener("click",()=>{
    generateGrids(slider.value)

});


function randomizeColor(){
    let number = Math.floor(Math.random()*100);
    let color = "";

 
        if (number<30){
            color = "#fca5a5";
        }else if (number>=30 && number <50){
            color = "#fcd34d";
        }
        else if (number>=50 && number <70){
            color = "#4ade80";
        }
    
        else if (number>=70 && number<90){
            color = "#22d3ee";
        }
        else if (number>=90){
            
            color = "#38bdf8";
        }

    return color;
}

