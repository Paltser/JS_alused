const li = document.createElement('li')

li.className = 'collection-item'
// const text //document.createTextNode('Study element creation')
// li.appendChild(text)

const a = document.createElement('a')
a.className ='blue-text text-darken aligin right'
const text = document.createTextNode('x')
a.appendChild(text)
a.setAttribute('href', '#')

li.appendChild(a)

const list = document.querySelector('ul')


console.log(a)