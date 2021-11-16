console.log(document.getElementById("toDo").textContent);

// Create a new <li> after clicking on "Add" button
function newElement() {
    // event.preventDefault();
    let li = document.createElement("li"); // 1. Create a new <li>
    let inputValue = document.querySelector("#toDo").value; // 2. Target the input element in which user will enter a todo
    console.log("inputValue =", inputValue);

    let text = document.createTextNode(inputValue); // 3. Get the user input
    li.appendChild(text); // 4. Append the variable "text" to the <li>
}
