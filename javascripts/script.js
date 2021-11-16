console.log(document.getElementById("toDo").textContent);

// Create a new <li> after clicking on "Add" button
function newElement() {
    // event.preventDefault();
    let li = document.createElement("li"); // 1. Create a new <li>
    let inputValue = document.querySelector("#toDo").value; // 2. Get the input from user by targeting the input element
    console.log("inputValue =", inputValue);

    let text = document.createTextNode(inputValue); // 3. Create a text with user input
    li.appendChild(text); // 4. Append the variable "text" to the <li>

    if (inputValue === '') { // 5. If the user do not writes any text in the input...
        alert("You must write something");
    } else {
        document.querySelector("ul").appendChild(li); // ... else: we append the variable "li" to the <ul>
    }

    document.querySelector("#toDo").value = "";
}
