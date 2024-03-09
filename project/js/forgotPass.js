const forma = document.querySelector('form')
const inputEmail = document.querySelector('#mail')
const inputNewPassword = document.querySelector('#newPassword')
const inputConfirmNewPassword = document.querySelector('#confirmNewPassword')

const nizKorisnika = JSON.parse(localStorage.getItem('korisnici_projekat'))

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    if(inputEmail.value.trim() === '') {
        alert('Morate uneti Vas email!')
        return
    }

    const user = nizKorisnika.find(el => el.email === inputEmail.value)

    if(user === undefined) {
        alert('Ne postoji korisnik sa navedenom email adresom!')
        return
    }

    if(inputNewPassword.value.trim() === '') {
        alert('Morate uneti novu sifru')
        return
    }

    if(inputConfirmNewPassword.value.trim() === '') {
        alert('Morate potvrditi novu sifru')
        return
    }

    user.password = inputNewPassword.value
    nizKorisnika.splice(nizKorisnika.findIndex(el => el.email === inputEmail.value), 1, user)
    window.location.href='../html/login.html'
    localStorage.setItem('korisnici_projekat', JSON.stringify(nizKorisnika))
})

// ispisati poruku za uspesnu promenu
// redirektovati na login da se uloguje sa novim podacima