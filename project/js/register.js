function parsirajBrojTelefona(brojTelefona) {
    return '+381' + brojTelefona.substring(1)
}

function checkUser(nizKorisnika, inputUsername) {
    for (let i = 0; i < nizKorisnika.length; i++) {
        if (inputUsername.value === nizKorisnika[i].username) {
            zauzetUser = true
            break
        }
    }

    if (inputUsername.value === '' || zauzetUser) {
        inputUsername.style.border = '2px solid #f00'
    } else {
        inputUsername.style.border = '2px solid #0f0'
    }
}

const forma = document.querySelector('form')
const inputFirstName = document.querySelector('#firstName')
const inputLastName = document.querySelector('#lastName')
const inputDateOfBirth = document.querySelector('#dateOfBirth')
const inputPhoneNumber = document.querySelector('#phoneNumber')
const inputUsername = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputConfirmPassword = document.querySelector('#confPassword')

let nizKorisnika = JSON.parse(localStorage.getItem('korisnici_projekat'))
let zauzetUser = false

let dan = (new Date().getDate()) < 10 ? "0" + new Date().getDate() : new Date().getDate()
let mesec = (new Date().getMonth() + 1) < 10 ? "0" + new Date().getMonth() : new Date().getMonth()
let godina = new Date().getFullYear()

inputDateOfBirth.setAttribute("max", `${godina}-${mesec}-${dan}`)


inputUsername.addEventListener('focusout', checkUser.bind(null, nizKorisnika, inputUsername))

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    if (inputFirstName.value.trim() === '') {
        alert('Unesite ime!')
        return
    }

    if (inputLastName.value.trim() === '') {
        alert('Unesite prezime!')
        return
    }

    if (inputPhoneNumber.value.length !== 9 && inputPhoneNumber.value.length !== 10) {
        alert('Neodgovarajuci broj telefona!')
        return
    }

    if (inputUsername.value.trim() === '') {
        alert('Unesite username!')
        return
    }

    if (zauzetUser) {
        alert('Izaberite jedinstven username!')
        return
    }

    if (inputEmail.value.trim() === '') {
        alert('Unesite email!')
        return
    }

    if (inputPassword.value.trim() === '') {
        alert('Unesite password!')
        return
    }

    if (inputPassword.value !== inputConfirmPassword.value) {
        alert('Proverite unos za sifre!')
        return
    }

    let noviKorisnik = {
        isAdmin: false,
        marked:false,
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        dateOfBirth: inputDateOfBirth.value,
        phoneNumber: parsirajBrojTelefona(inputPhoneNumber.value),
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    nizKorisnika.push(noviKorisnik)

    localStorage.setItem('korisnici_projekat', JSON.stringify(nizKorisnika))
})