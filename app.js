/*
if(conditional) {
    // if statments
} else {
    //else statments
}

== equal     ->   ===
!= not equal ->  !==
 */


let personID;

if (typeof personID !== 'indefined'){
    console.log('id is not correct')
} else {
    console.log('id is ${personID}')
}

console.log(personID)

/*
if(conditional) {
    // if statments
} else if(conditional){
    //if1 statments
} else {
    else statment
}
 */

// const color = 'green'
//
// if (color === 'red'){
//     console.log('stop!')
// } else if (color === 'yellow') {
//     console.log('attention!')
// } else if (color === 'green') {
//         console.log('go!')
// } else {
//     console.log('error')
// }

const name = 'kadi'
const age = 40

if (age > 0 && age <= 12 ){
    console.log('laps')
}else if (age > 12 && age < 18){
    console.log('teen')
}else {
    console.log('t2iskasvanud')
}

let id = 15

console.log(id === 100 ? 'ok' :'not ok' )


//swithc
const color = 'blue'
switch (color) {
    case "red":
        console.log('stop')
        break;
    case "yellow":
        console.log('attention')
        break;
    case "green":
        console.log('go')
        break;
    default:
        console.log('error')
}