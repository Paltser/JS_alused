const form = document.querySelector('form')
const taskinput = document.getElementById('task')
const taskHeading = document.querySelector('#task-title')

form.addEventListener('submit', runevent)

//taskinput.addEventListener('keydown', runevent)
//taskinput.addEventListener('keyup', runevent)
//taskinput.addEventListener('keypress', runevent)

//focus
// taskinput.addEventListener("focus", runevent)
// taskinput.addEventListener("blur", runevent)

//input
// taskinput.addEventListener("paste", runevent)
// taskinput.addEventListener("cut", runevent)
// taskinput.addEventListener("input", runevent)




function runevent(event){
    console.log(`event type: ${event.type}`)
    taskHeading.innerText = event.target.value
    //event.preventDefault()
}

