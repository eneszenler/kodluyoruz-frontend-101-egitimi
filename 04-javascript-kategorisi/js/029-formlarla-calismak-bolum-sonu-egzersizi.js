// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userForm = document.querySelector("#userForm")
document.addEventListener("submit", formHandler)
let alertDOM = document.querySelector("#alert")
const alertFunction = (title, message) => `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector('#score')
    localStorage.setItem("username", USER_NAME.value)
    localStorage.setItem('score', SCORE.value)

    if (USER_NAME.value && SCORE.value) {
        addItem(username.value, score.value)
        username.value = ""
        score.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction("HATA", "Eksik Bilgi Girdiniz")
    }
}

let userListDOM = document.querySelector("#userList")

const addItem = (username, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
        ${username}
        <span class="badge bg-primary rounded-pill"> ${score} </score>
    `
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM)
}


