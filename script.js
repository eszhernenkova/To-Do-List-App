const inputBox = document.getElementById("inpur-box");
const listConteiner = document.getElementById("list-conteiner");

function addTask() {
    if(inputBox.value === ''){
        alert("Напишите что-то");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConteiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listConteiner.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

document.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        addTask(inputBox.value);
    }
 })

function saveData(){
    localStorage.setItem("data", listConteiner.innerHTML);
}

function showTask(){
    listConteiner.innerHTML = localStorage.getItem("data");
}

showTask();