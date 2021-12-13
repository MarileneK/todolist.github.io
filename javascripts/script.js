window.onload = function () {

    function addNewElement(event) {
        event.preventDefault(); // Prevents from page refresh

        // 1. TARGET FORM TAGS
        let ul = document.querySelector("ul");
        let userInput = document.querySelector("#toDo").value;
        let alertWarning = document.querySelector("#alert");


        // 2. CREATE <LI> + CHECK ICON
        let li = document.createElement("li");
        let box = document.createElement("a");
        let boxIcon = document.createElement("i");
        let newToDo = document.createTextNode(userInput);

        box.className = "boxToCheck";
        boxIcon.className = "far fa-square";

        box.appendChild(boxIcon);
        li.appendChild(box);
        li.appendChild(newToDo);


        // IF USER CLICKS ON ADD BTN
        if (userInput === "") {
            alertWarning.style.display = "inline";
        } else {
            alertWarning.style.display = "none";
            ul.appendChild(li);
            document.querySelector("#toDo").value = "";
        }


        // IF USER CLICKS ON BOX ICON, TEXT IS COLORED & CROSSED + ICON IS CHECKED
        let checkedBox = document.querySelectorAll(".boxToCheck");

        for (let y = 0; y < checkedBox.length; y++) {

            checkedBox[y].addEventListener("click", function () {

                let parentOfCheckedBox = this.parentElement;

                // if (parentOfCheckedBox.classList.contains("checkedText")) {
                //     parentOfCheckedBox.classList.remove("checkedText");
                //     boxIcon.classList.remove("fa-check-square");
                //     boxIcon.classList.add("fa-square");
                // } else {
                    parentOfCheckedBox.className = "checkedText";
                    // boxIcon.className = "far fa-check-square";
                // }
            })
        }


        // 3. ADD TRASH ICON
        let aTag = document.createElement("a");
        let icon = document.createElement("i");

        aTag.className = "delete-icon";
        icon.className = "far fa-trash-alt";

        aTag.appendChild(icon);
        li.appendChild(aTag);

        // DELETE AFTER CLICKING ON TRASH ICON
        let deleteIcon = document.querySelectorAll(".delete-icon");

        for (let i = 0; i < deleteIcon.length; i++) {
            deleteIcon[i].addEventListener("click", function () {
                let parentOfDelete = this.parentElement;
                parentOfDelete.style.display = "none";
            })
        }
    }

    let form = document.querySelector("form");
    form.addEventListener("submit", addNewElement);

}
