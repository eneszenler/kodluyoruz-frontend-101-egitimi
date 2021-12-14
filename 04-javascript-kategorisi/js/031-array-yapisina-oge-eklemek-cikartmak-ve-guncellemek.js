// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items-ilk hali:", items)

// Array -> Sona eleman eklemek -> Push 
items.push(50)
console.log("50:", items)

// Array -> Başa eleman eklemek -> unshift
items.unshift(-10)
console.log("-10:", items)

// Array -> Sondaki elemanı çıkartmak -> pop
let lastItem = items.pop()
console.log("lastItem :", lastItem, "items :", items)

// Array -> Baştaki elemanı çıkartmak -> shift
let firstItem = items.shift()
console.log("firstItem :", firstItem, "items :", items)

// Array içerisindeki bir ögenin bilgilerinin değiştirilmesi

// İlk elemeanın değiştirilmesi
items[0] = 5
console.log("İlk elemanı değiştirdik :", items)

// Son elemeanın değiştirilmesi
items[items.length - 1] = 45
console.log("Son elemanı değiştirdik :", items)