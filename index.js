//     var para = document.querySelector(".para");
//     var btn1 = document.querySelectorAll("button")[0];
//     var btn2 = document.querySelectorAll("button")[1];

// function myMessage(){
    
//     btn1.addEventListener("click",function(){
//         para.innerHTML = "This is Para"
//     })
    
// } 

// function removeBtn(){
// btn2.addEventListener("click",function(){
//     para.innerHTML = "";
// })
// }
// myMessage();



let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}



























