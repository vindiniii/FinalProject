let todo = []
const ul = document.createElement("ul");
const body = document.querySelector("body");
let count = 0;

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();
    let item = document.querySelector("#todo").value;
    count++;

    const li = document.createElement("li");
    li.innerHTML = item + " <button id = \"complete" + count + "\">✔</button> <button id = \"delete" + count + "\">🗙</button>";

    ul.appendChild(li);
    body.appendChild(ul);

    //resets input field to blank for new values to be entered
    document.querySelector('#todo').value = "";

    //removes todo element
    document.querySelector('#delete' + count).addEventListener("click", function(event) {

        event.target.parentElement.remove();
    
    
    })
    
    //marks todo element as complete
    document.querySelector('#complete' + count).addEventListener("click", function(event) {
    
        event.target.parentElement.setAttribute("style", "text-decoration-line:line-through;");
    
    })

})





