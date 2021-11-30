window.onload = function () {
    
    function addNewElement(event) {
        event.preventDefault(); // Prevents from page refresh

        // 1. CREATE A NEW TODO
        let ul = document.querySelector("ul");
        let userInput = document.querySelector("#toDo").value;
        // console.log(userInput);
        let alertWarning = document.querySelector("#alert");

        let li = document.createElement("li");


        // 2. CREATE CHECK ICON
        let box = document.createElement("a");
        let boxIcon = document.createElement("i");

        box.className = "boxToCheck";
        boxIcon.className = "far fa-square";

        box.appendChild(boxIcon);
        li.appendChild(box);

        let newToDo = document.createTextNode(userInput);
        li.appendChild(newToDo);


        // IF CONDITION IF USER CLICKS ON ADD BTN
        if (userInput === "") {
            alertWarning.style.display = "inline";
        } else {
            alertWarning.style.display = "none";
            ul.appendChild(li);
            document.querySelector("#toDo").value = "";
        }

        
        // IF USER CLICKS ON BOX ICON, TEXT IS CROSSED
        let checkedBox = document.querySelectorAll(".boxToCheck");
        console.log(checkedBox);
        for (let y = 0; y < checkedBox.length; y++) {
            checkedBox[y].addEventListener("click", function () {
                // alert("test");
                let parentOfCheckedBox = this.parentElement;
                console.log(parentOfCheckedBox);
                parentOfCheckedBox.style.textDecoration = "line-through";
                parentOfCheckedBox.style.color = "#5f27cd";
            })
        }

        
        // 3. ADD TRASH ICON
        let aTag = document.createElement("a");
        let icon = document.createElement("i");

        aTag.className = "delete-icon";
        icon.className = "far fa-trash-alt";

        aTag.appendChild(icon);
        li.appendChild(aTag);

        let deleteIcon = document.querySelectorAll(".delete-icon");

        // DELETE AFTER CLICKING ON TRASH ICON
        for (let i = 0; i < deleteIcon.length; i++) {
            deleteIcon[i].addEventListener("click", function () {
                let parentOfDelete = this.parentElement;
                parentOfDelete.style.display = "none";
            })
        }   

    }

    let form = document.querySelector("form");
    // console.log(form);
    form.addEventListener("submit", addNewElement);

}
