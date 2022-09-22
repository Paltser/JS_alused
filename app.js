console.log('for loop')
for (let number = 0; number < 10; number++) {
    if (number == 5){
        // break
        continue
    }
    console.log(number)
}

console.log('while')

let num = 0
while (num < 10){
    console.log(num)
    num++
}

console.log('dowhile')
let num2 = 0
do {
    console.log(num2)
    num2++
}while (num2 < 10)

const cars = ['audi', 'tesla', 'bmw']
cars.forEach((car) => {
    console.log(car)
})

const person = {
    firstname : 'kadi',
    surname : 'tamm',
    age : 40,
}

for (let personKey in person) {
    console.log(person[personKey])
}