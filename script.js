let display = document.getElementById("display");

 function appendTodisplay(input){
    display.value= display.value + input;
 }

 function backspace(){
    display.value= display.value.slice(0,-1);
 }
 function clearDisplay(){
    display.value="";
 }

function calculate(){
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}


 