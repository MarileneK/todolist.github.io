// Create a new <li> after clicking on "Add" button
function newElement() {
    let li = document.createElement("li"); // 1. Je crée un nouveau <li>
    let inputValue = document.querySelector("#toDo").value; // 2. Je récupère la valeur saisie par l'utilisateur
    console.log("inputValue =", inputValue);

    let text = document.createTextNode(inputValue); // 3. Je crée du texte qui correspond à la valeur saisie par l'utilisateur + picto poubelle
    li.appendChild(text); // 4. Je rattache ma variable "text" au <li> que j'ai créé
    console.log("log de li.appendChild(text)", li.appendChild(text));

    if (inputValue === '') { // 5. Si l'utilisateur laisse le champ vide, je l'en informe 
        alert("You must write something");
    } else {
        document.querySelector("ul").appendChild(li); // ... AUTREMENT : je rattache le <li> au <ul>
    }

    document.querySelector("#toDo").value = "";


    let span = document.createElement("span"); // Je crée un <span>
    span.className = "delete-icon";
    let i = document.createElement('i');
    i.className = "far fa-trash-alt";
    span.appendChild(i);
    li.appendChild(span);

    let close = document.querySelectorAll(".delete-icon");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let parentOfClose = this.parentElement;
            parentOfClose.style.display = "none";
        }
    }
}

// Add a trash on each new <li>
let liElements = document.querySelector("li");



