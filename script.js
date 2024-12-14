const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function showCreatedMsg(messageText){

    const message = document.createElement("h2");
    message.textContent = messageText;
    message.classList.add("message");
    ul.parentNode.insertBefore(message, ul);

    setTimeout(() =>{
        message.classList.add("fade-out");
        message.addEventListener("transitionend", () =>{
            message.remove();
        })
    }, 2000);
}
function showDeletedMsg(messageText){

    const message = document.createElement("h2");
    message.textContent = messageText;
    message.classList.add("del-msg");
    ul.parentNode.insertBefore(message, ul);

    setTimeout(() =>{
        message.classList.add("fade-out");
        message.addEventListener("transitionend", () =>{
            message.remove();
        })
    }, 2000);
}
function btnClicked(){
    const value = input.value;
    input.value = '';

    if(!value){
        alert("Please Enter An Item");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = value;
    span.classList.add("span");
    button.textContent = "Delete";
    button.classList.add("del-btn");

    ul.appendChild(li);
    ul.classList.add("card-container");
    li.classList.add("card");

    setTimeout(() =>{
        li.classList.add("show");
    }, 10);

    showCreatedMsg("Item Created Successfully");
   
    button.addEventListener("click", () => {
        let deleted = confirm("Are You sure You Want To Delete This Item");
        if(deleted){
            li.classList.add("deleted");
            li.addEventListener("transitionend", () =>{
                li.remove();
                showDeletedMsg("Item Deleted Successfully");
            });
        }

    });

    input.focus();
    
}

btn.addEventListener("click", btnClicked);

