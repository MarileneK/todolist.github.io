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


        // IF USER CLICKS ON BOX ICON, TEXT IS CROSSED + ICON IS CHECKED
        let checkedBox = document.querySelectorAll(".boxToCheck");
        console.log("log de checkedBox =>", checkedBox);
        // console.log("checkedBox.lastChildClasses", checkedBox[0].lastChild);
        // console.log("checkedBox.lastElementChild", checkedBox[0].lastElementChild);

        for (let y = 0; y < checkedBox.length; y++) {

            checkedBox[y].addEventListener("click", function () {

                let parentOfCheckedBox = this.parentElement;
                // console.log("log de parentOfCheckedBox =>", parentOfCheckedBox);
                

                // console.log("checkedBox[y] =>", checkedBox[y]);
                // console.log("lastChildOfCheckedBox =>", this.lastChild);
                let lastChildOfCheckedBox = this.lastChild;
                let lastElementChildOfCheckedBox = this.lastElementChild;
                // console.log("lastElementChildOfCheckedBox", lastElementChildOfCheckedBox);
                
                // console.log("Au 1er clic classList =>", lastChildOfCheckedBox.classList);
                let lastChildClasses = lastChildOfCheckedBox.classList;
                let checkedIcon = ["far", "fa-check-square"];
                let squareIcon = ["far", "fa-square"];
                
                // console.log(bonIconList);

                if (parentOfCheckedBox.classList.contains("checkedText")) {

                    // parentOfCheckedBox.classList.replace("checkedText", "normalText");
                    parentOfCheckedBox.classList.remove("checkedText");
                    // console.log("lastElementChildOfCheckedBox[1]", lastElementChildOfCheckedBox[1].classList);
                    // console.log("boxIcon", boxIcon.classList[1]);
                    // boxIcon.classList[1].replace("fa-check-square", "fa-square");
                    // boxIcon.classList[1].remove("fa-check-square");
                    // boxIcon.classList[1].add("fa-square");
                    // console.log("boxIcon", boxIcon.classList[1]);
                    // lastElementChildOfCheckedBox.className = "far fa-square";
                    // lastElementChildOfCheckedBox[1].classList.replace = "far fa-square";
                    // boxIcon.className = "far fa-square";
                    // lastChildClasses.replace(checkedIcon, squareIcon);
                    // lastChildClasses.replace(["far", "fa-check-square"], ["far", "fa-square"]);

                    // lastElementChildOfCheckedBox.classList.replace(checkedIcon, squareIcon);


                    // boxIcon.classList.remove(checkedIcon);
                    // boxIcon.classList.add(squareIcon);
                    // boxIcon.classList.remove("fa-check-square");
                    // boxIcon.classList.replace("fa-check-square", "fa-square");
                    // boxIcon.classList[1] = "fa-square";
                    // boxIcon.classList.remove("fa-check-square");

                    boxIcon.classList.remove("fa-check-square");
                    boxIcon.classList.add("fa-square");


                    // boxIcon.classList.replace("far fa-check-square", "far fa-square");
                    // boxIcon.classList.add("far");
                    // console.log("log de parentOfCheckedBox dans if condition", parentOfCheckedBox);
                    console.log("Au 2e click class =>", lastChildClasses);
                } else {
                    parentOfCheckedBox.className = "checkedText";
                    boxIcon.className = "far fa-check-square";
                }

                
                // console.log("boxIcon.className =>", boxIcon.className);
                // console.log("log de parentOfCheckedBox =>", parentOfCheckedBox);

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
