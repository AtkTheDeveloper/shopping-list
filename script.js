const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function btnClicked(){
    const value = input.value;
    input.value = '';

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = value;
    button.textContent = "Delete";

    ul.appendChild(li);

    button.addEventListener("click", () => {
        li.remove();
    });

    input.focus();
}

btn.addEventListener("click", btnClicked);