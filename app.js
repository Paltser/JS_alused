let val;


val = document.getElementById('task')

val = document.getElementById
('task').id
val = document.getElementById
('task').className

const taskTitle = document.getElementById('task-title')

// stiilitd
taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '5px'
taskTitle.style.display = ''

//content
taskTitle.textContent = 'defined tasks'
taskTitle.innerText = 'my fav text'
taskTitle.innerHTML = `<b style="color: red">My Tasks</b'>`

val = document.querySelector('#task-title')
val = document.querySelector('ul')

val = document.querySelector('li')

val = document.querySelector('li')

// const task = document.querySelector('li')
// task.style.color = 'green'

// val = document.querySelector('li:last-child')
// val = document.querySelector('li:nth-child(odd)').style.background = '#ccc'
// val = document.querySelector('li:nth-child(even)').style.background = '#aaa'

// multiple elements

val = document.querySelectorAll('li')
oddli = document.querySelectorAll('li:nth-child(odd)')

oddli.forEach((li) =>{
    li.style.background = '#ddd'
})

console.log(task)
console.log(val)
