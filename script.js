let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")

let newBtn = document.querySelector("#new-btn") //newGame
let msgContainer = document.querySelector(".msg-container")

let turnO = true;
// let turnX = false;

const winPatrn = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log(' box was clicked');
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

//checkFor draw
const isDraw = () =>{
    let draw = true;
    boxes.forEach((box) =>{
        if( box.disabled == false){
            draw = false
        }
    })

    if(draw == true) return true;
    else return false;
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showDraw = () =>{
    msgContainer.children[0].textContent = "Draw"
    msgContainer.classList.remove("hide")
}



const showWinner = (winner) =>{
    msgContainer.children[0].innerText = `${winner} is winner !`;
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner = () => {
    for(let patrn of winPatrn){
        // console.log(patrn[0], patrn[1], patrn[2]);
        // console.log(boxes[patrn[0]], boxes[patrn[1]], boxes[patrn[2]]);
        // console.log(boxes[patrn[0]].innerText, boxes[patrn[1]].innerText, boxes[patrn[2]].innerText);
        let p1 = boxes[patrn[0]].innerText;
        let p2 = boxes[patrn[1]].innerText;
        let p3 = boxes[patrn[2]].innerText;
        
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 == "O" && p2 == "O" && p3 == "O"){
                console.log("O is winnnerr");
                showWinner(p1);
                break;
            }else if(p1 == "X" && p2 == "X" && p3 == "X"){
                console.log("X is winnnerr");
                showWinner(p1);
                break;
            }else{
                console.log("not yet");
                // break; //! bsdk
                let x = isDraw();
                if(x == true){
                    showDraw();
                    break;
                }
            }
        }
    }
}

//! reseing
resetBtn.addEventListener('click',()=>{
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false;
    })
    msgContainer.classList.add("hide")
    turnO = true; // just as first
})