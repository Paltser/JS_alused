//object

const person = {
    firstname : 'Kadi',
    surname : 'Tamm',
    age: 40,
    email: 'kadi.tamm@gmail.com',
    hobbies: ['tennis','korvpall'],
    address : {
        city: 'Voru',
        country:'Vorumaa'
    },
    GetBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person
val = person.firstname
val = person['surname']
val = person['hobbies'][1]
val = person.hobbies[1]
val = person.address.city
val = person.address['city']

val = person.GetBirthYear()
// console.log(val)


for (let i = 0; i < person.hobbies.length; i++){
    console.log(person.hobbies[1])
}

person.hobbies.forEach((hobbie, index ) => {
    console.log(hobbie + 'on elemint indeksiga ' + index)
})
