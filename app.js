var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

// outputDiv.innerText="Akshay Kamath "

function clickHandler(){
    outputDiv.innerText="sadddvsscd "+txtInput.value;
};
btnTranslate.addEventListener("click",clickHandler)

