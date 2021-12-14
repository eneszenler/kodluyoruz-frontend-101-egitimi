// Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
  "lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"
]



// for (; counter < 10; counter++) {
//   console.log(counter)
//   if (counter === 5) {break}
// }


// for (; counter < 10; counter++) {
//   if (counter === 5) {continue}
//   console.log(counter)
// }

const UL_DOM = document.querySelector("#userList")

let index = 0;


// for (; index < LOREM_LIST.length; index++) {
  //   if (LOREM_LIST[index] == "dolor") {break}
  //   let LI_DOM = document.createElement('li')
  //   LI_DOM.innerHTML = LOREM_LIST[index]
  //   UL_DOM.append(LI_DOM)
  // }
  
  for (index; index<=LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] === "dolor") {continue}
    let liDom = document.createElement("li") 
    liDom.innerHTML = LOREM_LIST[index]
    UL_DOM.append(liDom)
  }
  