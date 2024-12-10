const display=document.getElementById("display");

function append(input){
    display.value+=input;
}

function calculate(){
    display.value=eval(display.value);
}

function Clearall(){
    display.value="";
}

function Delete(){
    display.value=display.value.toString().slice(0,-1);
}