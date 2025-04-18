let display = document.querySelector(".display h1");
let keys = document.querySelectorAll(".key");
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let evl = document.getElementById("result");
let display_string = "";
let result = 0;
keys.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("op")){
            display_string +=  ` ${btn.textContent} `;
            // console.log("yes")
        }
        else{
            display_string +=  btn.textContent;
        }
        updateDisplay();
    })
})

ac.addEventListener("click", ()=>{
    display_string = "";
    updateDisplay();
})

del.addEventListener("click", ()=>{
    if(display_string.endsWith(" ")){
        display_string = display_string.slice(0,-3);
    }
    else{
        display_string = display_string.slice(0,-1);
    }
    updateDisplay();
    
})
evl.addEventListener("click", ()=>{
    let arr = display_string.trim().split(" ");
    // console.log(arr);
    
    let oper = "+"
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "+" || arr[i] == "-" || arr[i] == "/" || arr[i] == "*"){
            oper = arr[i]
        }
        else{
            evaluate(oper, parseFloat(arr[i]))
        }
    }
    display_string = result
    updateDisplay();
    result = 0
})

function evaluate(operator, num){
    if(operator == "+"){
        result += num;
    }
    else if(operator == "-"){
        result -=num;
    }
    else if(operator == "*"){
        result *= num;
    }
    else{
        result = (result/num).toFixed(4);
    }

}

function updateDisplay() {
    requestAnimationFrame(() => {
        display.textContent = display_string;
    });
}