const createbtn = document.querySelector(".createbtn");
const notescontainer = document.querySelector(".notes-container");
const inputbox = document.querySelectorAll(".input-box");

function createnotes(){
    let note = document.createElement("p");
    let img = document.createElement("img");
    note.className = "input-box";
    note.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notescontainer.appendChild(note).appendChild(img);
}

createbtn.addEventListener("click", createnotes);

notescontainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "P")
        {
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup = function(){
                    updatestorage();
                }
            })
        }
})

function updatestorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}

function shownotesafterrelode(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}

shownotesafterrelode();

document.addEventListener("keydown",event => {
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})