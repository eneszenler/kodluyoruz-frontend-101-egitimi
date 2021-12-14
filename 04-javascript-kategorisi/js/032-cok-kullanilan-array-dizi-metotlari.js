// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let femaleUsers = ["Melisa", "Eylül", "Ayşe"]
let maleUsers = ["Yusuf", "Burak", "Hasan"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length) // Array içerisindeki arrayin uzunluğu 
console.log(items[0][0]) // Array içerisindeki arrayin istediğimiz bilgisi

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(2, 4, "splice ile ekledik")
console.log("newItems:", newItems)
console.log("items:", items)

// Array içerisindeki ögenin index bilgisini bulmak -> indexOf("value")
items.unshift("lorem")
items.push("ipsum")

console.log("ipsum'un index numarası :", items.indexOf("ipsum"))

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items.slice()
console.log("items:", items.length, "copyItems:", copyItems.length)

copyItems.pop()
console.log("pop işleminden sonra copyItems :", copyItems)
console.log("pop işleminden sonra items :", items)

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let es6Items = [...items] // Yeni nesil kopyalama yöntemi 
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers]  // Birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.indexOf("Hasan"), 1, "Mert")
console.log("Hasan'ı Çıkarıp, Mert'i Ekledik :", allUsers)
