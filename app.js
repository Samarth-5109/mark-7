//for selecting button
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";


function getTranslationalURL(text){
    return serverURL + "?" + "text=" + text;

}

function errorHandler(error){
    console.log("error occured" + error)
}


btnTranslate.addEventListener("click", function clickEventHandler() {
   

    var inputText = txtInput.value; // taking input

    fetch(getTranslationalURL(inputText)) //calling server for processing
    .then(response=>response.json())
    .then(json=>{
        var translatdText = json.contents.translated;
        outputDiv.innerText = translatdText;
    })
    .catch(errorHandler)
  
});