var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
var tmp = "";
function genratePass(pLength){
    tmp = ""
    for (i=0; i<pLength; i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp;
}

function populateForm(enterLength){
    document.passGen.output.value = genratePass(enterLength)
}

function copyText() {
    // Get the text field
    var copyText = document.getElementById("passString");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }