import {keyList} from "./lists.js";
import * as timer from "./timer.js";

function randomElement(notes){
    return Math.floor(Math.random() * notes.length);
}


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let imgStaff = new Image();
imgStaff.src = "../icons/staff2.png";
let imgWhole = new Image();
imgWhole.src = "../icons/Whole.png";
let imgFlat = new Image();
imgFlat.src = "../icons/flat.png";
let imgSharp = new Image();
imgSharp.src = "../icons/sharp.png";

function renderStaff(){
    context.drawImage(imgStaff,0,60,700,400)
}
renderStaff();
/*
const selectItem = document.getElementById('practice-type')
let index = selectItem.selectedIndex;
selectItem.addEventListener('change', () => {
    index = selectItem.selectedIndex;
})*/

let numberOfPractice=5;
let counter;
let randomNote;
let PracticeOn=false;
let textInterval=null;
let notesPracticingInterval=null;
let chordsPracticingInterval=null;
let delay=timer.TIME_LIMIT*1000;
let searchIndex;
window.onload = function() {
    renderStaff();
    drawSupportLines();
    let a = document.getElementById('button-practice');
    a.onclick = function (){
        if(PracticeOn===false) {
            PracticeOn = true;
            counter = 0;
            startPracticing();
        }
    }
}

export let rightClick=true;
export function setRightClick(value) {
    rightClick = value;
}

window.addEventListener("keydown", matching);


function dyingKeys(name){
    document.querySelectorAll(`[note='${name}']`).forEach(function(element) {
        if (element.classList.contains("key-white")) {
            element.style.backgroundColor = "rgb(105,154,79)";
            setTimeout(()=>
            {element.style.backgroundColor = "rgb(255,255,255)";
            }, 1500);
        } else if (element.classList.contains("key-black")) {
            element.style.backgroundColor = "rgb(10,101,22)";
            setTimeout(()=>
            {element.style.backgroundColor = "rgb(44,52,61)";
            }, 1500);
        }
    });
}
function matching(e) {
    searchIndex = keyList.findIndex((keyList) => keyList.shortcut === e.key);
    let namePressedNote = keyList.at(searchIndex).note;
    let nameCorrectNote = keyList.at(randomNote).note;

    if (PracticeOn === true) {

        //practice-box
        //if (e.key !== keyList.at(randomNote).shortcut) {
        if (e.key === "1"){
            clearInterval(notesPracticingInterval);
            notesPracticingIteration();
            timer.createTextRight(keyList.at(randomNote).note);
            //interacting with keyboard right choice
            dyingKeys(nameCorrectNote);
        } else {
            clearInterval(textInterval);
            timer.createTextWrong(keyList.at(searchIndex).note);
            //if (counter<=numberOfPractice) {
            //    setTimeout(practiceIteration,timer.timeLeft*1000);
            //}
            //interacting with keyboard wring choice
            document.querySelectorAll(`[note='${namePressedNote}']`).forEach(function(element) {
                if (element.classList.contains("key-white")) {
                    element.style.backgroundColor = "rgb(171,28,28)";
                    setTimeout(()=>
                    {element.style.backgroundColor = "rgb(255,255,255)";
                    }, 1500);
                } else if (element.classList.contains("key-black")) {
                    element.style.backgroundColor = "rgb(159,10,10)";
                    setTimeout(()=>
                    {element.style.backgroundColor = "rgb(44,52,61)";
                    }, 1500);
                }
            });
            dyingKeys(nameCorrectNote);

        }

        clearInterval(textInterval);

        textInterval = setInterval(() => {
            timer.deleteElements()
        }, 2000);
    } else {
        return false
    }
}
function notesPracticingIteration() {

    if (counter<=numberOfPractice) {
        counter++;
        let checkDoubling = randomNote;
        do {
            randomNote = randomElement(keyList);
        } while (randomNote === checkDoubling)

        timer.drawTimer();
        timer.startTimer();

        drawNote(randomNote);
    }
    else
    {
        clearInterval(notesPracticingInterval);
        document.getElementById("app").style.display = 'none';
        PracticeOn=false;
    }
}
function chordsPracticingIteration(notes){
    if (counter<=numberOfPractice) {
        counter++;
        for(let i =0;i<notes.length;i++){
            drawNote(randomNote);
        }
    }
    else
    {
        clearInterval(chordsPracticingInterval);
        document.getElementById("app").style.display = 'none';
        PracticeOn=false;
    }
}
function startPracticing(){
    let chord="C E G#";
    let notes = chord.split(' ');


    if (PracticeOn===true) {
        //Notes
        if (document.getElementById("practice-type").options.selectedIndex === 0) {
            notesPracticingIteration();
            counter++;
            notesPracticingInterval=setInterval(notesPracticingIteration,delay)
            console.log('42');
        }
        //Chords
        else if (document.getElementById("practice-type").options.selectedIndex === 1) {
            chordsPracticingIteration(notes);
            counter++;
            chordsPracticingInterval=setInterval(chordsPracticingIteration,delay)
            console.log('42');
        }
    }
    else {
        console.log("Err is in window.onload choosing practice type")
    }

}

/*
function startPractice(){
        if (PracticeOn===true) {
            if (rightClick===false)
            {
                startPractice();
            }
            let checkDoubling = randomNote;
            do {
                randomNote = randomElement(keyList);
            } while (randomNote === checkDoubling)

            console.log('42');
            timer.drawTimer();
            timer.startTimer();
            //Notes
            if (document.getElementById("practice-type").options.selectedIndex === 0) {
                drawNote(randomNote);
            }
            //Chords
            else if (document.getElementById("practice-type").options.selectedIndex === 1) {

            }
            else {
                console.log("Err is in window.onload choosing practice type")
            }

            else{
                setTimeout(()=> {document.getElementById("app").style.display = 'none';
                PracticeOn=false;}

            , timer.TIME_LIMIT*1000);
            }
        }
        else{
            return false
        }


}*/
function drawLine(x1,x2,y){
    context.lineWidth = 2;
    context.moveTo(x1, y);
    context.lineTo(x2, y);
    context.stroke();
}
function drawSupportLines(){

    let x=250;
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
        console.log('42');
    }*/
}

function drawNote(note) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imgStaff, 0, 60, 700, 400)
    drawSupportLines();
    let c = keyList.at(note).position;
    console.log(c);
    if (keyList.at(note).label.includes('#')) {
        console.log('sharp');
        if (c < 17) {
            context.drawImage(imgSharp, 215 + 10 * c, 3 + 14.5 * c, 44, 44);
        }
        if (c >= 17) {
            context.drawImage(imgSharp, 215 + 10 * c, 14.5 * c + 14.5 * 2, 44, 44);
        }
    }
    if (c < 17) {
        context.drawImage(imgWhole, 250 + 10 * c, 3 + 14.5 * c, 44, 44);
    }
    if (c >= 17) {
        context.drawImage(imgWhole, 250 + 10 * c, 14.5 * c + 14.5 * 2, 44, 44);
    }
}



