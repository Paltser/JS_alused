const firstname = 'Markos'
const surname = 'Paltser'
const email = 'Markos.Paltse@voco.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li><b>Name<b/> ' +firstname +'</li>' +
    '<li>Surname'+ surname +'</li>' +
    '<li>Email'+ email +'</li>' +
    '<li>Department'+ department+'</li>' +
    '<ul/>'

result = `
    <ul>
        <li><b>Name: <b/>${firstname}</li>
        <li><b>Surname: </b>${surname}</li>
        <li>Email: ${email}</li>
        <li>Department: ${department}</li>

    <ul/>`


console.log(result)
document.body.innerHTML = result