import { menu } from "./menu.js"

function transform_balls(balls, balls_coint){
    balls[balls_coint].style = `background-color:rgba(255, 255, 255, 0.800);`
    for(let c = 0; c < balls.length; c++){
        if(c != balls_coint){
            balls[c].style.backgroundColor = "rgba(255, 255, 255, 0.05)"
        }
    }
}

//Responsividade
function responsive(){
    const body = document.getElementsByTagName('body')[0]
    
}

export {transform_balls, responsive}
