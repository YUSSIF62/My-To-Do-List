const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter a schedule");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild("li");
    }

    inputBox.value = "";

    
}