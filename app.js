let val

//number -> string
val = String(555)
val = String(4+4)
val = String(5.8)

//bootean => stromg

val = String(true)
val = String(false)

// Object -> string
val = String(new Date())

//null ->
val = String(null)

val = String(1, 2, 3, 4, 5)

//undefined -> string
val = String(undefined)

//tostring
val = (true).toString()
console.log(val)

//string -> number
val = Number(5)
//bolean to -> number
val = Number(true)
val = Number(false)

//null number
val = Number(null)
// string number
val = Number('tere')
//array number
val = Number([1,2,3,4])


val = parseInt('100.3')
val = parseFloat('100.30')
console.log(val)