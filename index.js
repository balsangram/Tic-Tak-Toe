// let music = new Audio("");
let audioTurn = new Audio("turn.wav");
let gameover = new Audio("gameover.wav");
let turn = 'x.png';
let isgameover = false;
let image1 = new Image();
image1.src = 'x.png';
let image2 = new Image();
image2.src = 'o.png';

// change the turn
const changeTurn = ()=>{
    return turn === 'x.png' ? 'o.png' : 'x.png';
    // return turn === "X"?"0": "X"
    // ternary operator
}

// check for a win
const checkWin = ()=>{
let boxtext = document.querySelectorAll('.tttimg');
let wins = [
    [0,1,2 ,5,5,0],
    [3,4,5 ,5,15,0],
    [6,7,8 ,5,25,0],
    [0,3,6 ,-5,15,90],
    [1,4,7 ,5,15,90],
    [2,5,8 ,15,15,90],
    [0,4,8 ,5,15,45],
    [2,4,6 ,5,15,135],
]
wins.forEach(e=>{
    if((boxtext[e[0]].src === boxtext[e[1]].src) && (boxtext[e[2]].src === boxtext[e[1]].src) && (boxtext[e[0]].src !== "")){document.querySelector('.info').src = boxtext[e[0]].src + "Won"
    gameover.play()
        isgameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector(".line").style.width = "20vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

    }
})
}

// game logic

// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    let img = boxtext.querySelector('.tttimg');
    element.addEventListener('click', ()=>{
        if(img.src === ''){
            img.src = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
            document.getElementsByClassName("info")[0].innerText ="Turn for" + turn;
        } 
        } 
        console.log(img);  
        })
})

// add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let image = document.querySelectorAll('.tttimg');
    Array.from(image).forEach(element =>{
        element.removeAttribute('src')
    });
    turn = "x.png";
    isgameover = false
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText ="Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})