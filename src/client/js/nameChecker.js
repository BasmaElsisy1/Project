 function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

  
    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
var inputName = document.getElementById('name');
inputName.addEventListener("blur", onBlur, true);
function onBlur() {
        
    document.getElementById("name").style.background = "red";
  }
export { checkForName , onBlur }
