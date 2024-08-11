let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    // Append delete button to the list item
    item.appendChild(delBtn);
    ul.appendChild(item);

    // Log input value to console
    console.log(inp.value);

    // Clear the input field
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    // Check if a delete button was clicked
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});