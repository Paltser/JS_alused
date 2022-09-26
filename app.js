function greeting(name){
    // console.log(`hello, ${name}!`)
    return `hello, ${name}!`
}
// greeting('markos')
let greet = greeting('markos')
console.log(greet)

const square = function (number) {
    return number * number
}
let result = square(3)
console.log(result)

const todo = {
    add: function () {
        console.log('add dodo..')
    },
    edit: function (){
        console.log('edit')
    delete function () {
            console.log("delete")
    }
    }
}