const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function show() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

show();

btn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P" && e.target.classList.contains("inputbox")) {

        e.target.onkeyup = function () {
            updateStorage();
        };
    }
});
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorage(); 
    }
});
