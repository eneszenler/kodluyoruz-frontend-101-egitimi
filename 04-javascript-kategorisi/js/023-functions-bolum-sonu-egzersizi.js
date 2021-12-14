let countDefault = document.querySelector("#counter")
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")

let count = localStorage.getItem("LastInfo")

increase.addEventListener("click", countEvent)
decrease.addEventListener("click", countEvent)
reset.addEventListener("click", countEvent)

countDefault.innerHTML = count

function countEvent() {
    console.log(this.id)
        if (this.id == "increase") {
            count ++;
         }
        else if (this.id == "decrease") {
            count --;
        }
        else {
            count = 0
        }
    countDefault.innerHTML = count
    localStorage.setItem("LastInfo", count)
    localStorage.getItem("LastInfo")
}























