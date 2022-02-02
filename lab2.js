function modifyInto() {
    document.getElementById("p").innerHTML = "wow, changed";
}

function num(){
    var number = document.getElementById("number").value;
    submit = "true";

    if (number < 10){
    alert("Input is out of range, not valid.");
    }

    if (number > 15){
        alert("Input is out of range, not valid.");
    }

    if (number ==10){
        alert("Input is OK")

    }
}