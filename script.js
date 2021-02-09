"use strict";
document.querySelector("#calculate").addEventListener("click", takeNumbers);
function takeNumbers() {
    let n1 = Number.parseInt(document.querySelector("#firstnumber").value, 10);
    let n2 = Number.parseInt(document.querySelector("#secondnumber").value,10);
    let operandMath = document.querySelector("#operator").value;
    let result = "";
    if (operandMath == "add") {   
result = n1 + n2;
    }
    else if (operandMath == "sub"){
        result = n1 - n2;
    }
    else if (operandMath == "mul"){
        result = n1 * n2;
    }
    else {
        result = n1 / n2;
    }
console.log(result);
document.querySelector("#firstnumber").value = Number.parseInt(result, 10);

 let parent = document.querySelector("#results");
const li = document.createElement("li");
parent.append(result, li);  
document.querySelector("#clear").addEventListener("click", clearResults); 
}
function clearResults() {
    document.querySelector("#firstnumber").value = "";
    document.querySelector("#secondnumber").value = "";
    document.querySelector("#results").innerHTML = "";
}
