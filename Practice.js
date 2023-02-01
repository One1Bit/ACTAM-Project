import { keyList } from "./Lists.js";

function randomElement(notes){
    return Math.floor(Math.random() * notes.length);
}


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let imgStaff = new Image();
imgStaff.src = "icons/staff2.png";
let imgWhole = new Image();
imgWhole.src = "icons/Whole.png";

function renderStaff(){
   context.drawImage(imgStaff,0,60,700,400)
}
renderStaff();

window.onload = function() {
    renderStaff();
    drawSupportLines();

    //button func
    //let notes=['C','D','E','F','G','A','B','C#','D#','F#','G#','A#','Db','Eb','Gb','Ab','Bb'];
    let type='note';
    let a = document.getElementById('button-practice');
            a.onclick = function() {
                let note=randomElement(keyList);
                startPractice(type,note);
            }

}
function startPractice(practiceType, noteNumber){
    switch (practiceType) {
        case "note":
            drawNote(noteNumber);
            console.log(keyList.at(noteNumber).note);
            break;

        case "chord":
            alert('f');
    }

}
function drawLine(x1,x2,y){
    context.lineWidth = 2;
    context.moveTo(x1, y);
    context.lineTo(x2, y);
    context.stroke();
}
function drawSupportLines(){

    let x=200;
    drawLine(x,600,26);
    drawLine(x,600,55);
    drawLine(x,600,84);
    drawLine(x,600,258);
    drawLine(x,600,458);
    drawLine(x,600,487);
    /*
    let yy=29;
    for(let i=0;i<800/yy;i++){
        drawLine(430,600,yy*i-3);
        console.log('1');
    }*/
}

function drawNote(note){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imgStaff,0,60,700,400)
    drawSupportLines();
    let c= keyList.at(note).position;
    console.log(c);
    if (c<17) {
        context.drawImage(imgWhole,250 + 10 * c,3 + 14.5 * c,44,44);

    }
    if (c>=17) {
        context.drawImage(imgWhole,250 + 10 * c,14.5 * c + 14.5 * 2,44,44);

    }
}
///draw all whole notes
/*
    let nn=31;
    for(let i=0;i<nn;i++){
        if (i<17) {
            drawNote(250 + 10 * i, 3 + 14.5 * i);
        }
        if (i>=17)
        {
            drawNote(250 + 10 * i,   14.5 * i + 14.5*2);
        }//keyList.at(noteNumber).x  .y
        console.log('1');
    }//17 mid C
/*

function showHint(){
    context.textAlign = "center";
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.fillText("15 120",50,57)
}
/*
function tick(dt) {
    renderStaff();
    window.requestAnimationFrame(tick);
}

tick(0)*/