let hunger = 100;
let happy = 100;
let clean = 100;

const hungerText = document.getElementById("hunger");
const happyText = document.getElementById("happy");
const cleanText = document.getElementById("clean");

const hamster = document.getElementById("hamster");

function updateStats(){

    hungerText.textContent = hunger;
    happyText.textContent = happy;
    cleanText.textContent = clean;

    updateImage();
}

function updateImage(){

    if(hunger < 30){
        hamster.src = "images/hungry.png";
    }
    else if(happy < 30){
        hamster.src = "images/sad.png";
    }
    else if(clean < 30){
        hamster.src = "images/dirty.png";
    }
    else{
        hamster.src = "images/normal.png";
    }

}

function feed(){
    hunger += 20;

    if(hunger > 100){
        hunger = 100;
    }

    updateStats();
}

function play(){
    happy += 20;

    if(happy > 100){
        happy = 100;
    }

    updateStats();
}

function wash(){
    clean += 20;

    if(clean > 100){
        clean = 100;
    }

    updateStats();
}

setInterval(()=>{

    hunger -= 2;
    happy -= 1;
    clean -= 1;

    if(hunger < 0) hunger = 0;
    if(happy < 0) happy = 0;
    if(clean < 0) clean = 0;

    updateStats();

},3000);

updateStats();
