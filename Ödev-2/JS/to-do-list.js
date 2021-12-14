let taskDOM = document.querySelector("#task")
let btnDOM = document.querySelector("#inputBTN")
let listDOM = document.querySelector("#list")
let ulLength = document.getElementsByTagName("li")


for (let i = 0; i < ulLength.length; i++) {
    let closeBTN = document.createElement("span")
    closeBTN.textContent = "\u00D7"
    closeBTN.classList.add("close")
    closeBTN.onclick = removeButton
    ulLength[i].append(closeBTN)
    ulLength[i].onclick = check
}

function removeButton() {
    this.parentElement.remove()
}

function check() {
    this.classList.toggle("checked")
}


btnDOM.addEventListener("click", ekle)

function ekle() {

    if (taskDOM.value == "") {
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");

        let liDOM = document.createElement("li")
        listDOM.append(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.value = "";

        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
    }
}

