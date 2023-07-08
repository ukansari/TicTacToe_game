let music= new Audio("music.mp3")
let ting= new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")

let turn ="X";
let isgameover=false;
const changeTurn=()=>{
    return turn === "X"?"0":"X"
}

const checkWin =()=>{
    let boxtext=document.getElementsByClassName('gridtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-6,15,90],
        [1,4,7,4,15,90],
        [2,5,8,14,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !==""){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won";
            gameover.play();
            isgameover=true;
             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
             document.querySelector('.line').style.width='22vw';
             document.querySelector('.line').style.transform= `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
             
        }
    })
}

// game logic 
let boxes= document.getElementsByClassName('grid')
Array.from(boxes).forEach(element =>{
    let gridtext=element.querySelector(".gridtext");
    element.addEventListener('click',()=>{
        if(gridtext.innerText === ''){
            gridtext.innerText= turn;
            turn=changeTurn();
            ting.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
            }
        }
    })  
})

// onclick listener on reset button

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.gridtext');
    Array.from(boxtext).forEach(e=>{
        e.innerText="";
    });
    turn="X";
    document.querySelector('.line').style.width='0vw';
    document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
    document.getElementsByTagName('img')[0].style.width=0
})