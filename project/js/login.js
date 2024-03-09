const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const forma = document.querySelector('form')

if(localStorage.getItem('korisnici_projekat') == null) {
    nizKorisnika = [
        {
            isAdmin: true,
            username: 'admin',
            password: 'admin'
        },
        {
            isAdmin: false,
            marked:false,
            firstName: 'Marko',
            lastName: 'A',
            dateOfBirth: '2020',
            phoneNumber: '12345',
            username: 'mojMare',
            email: 'mail@g.com',
            password: 'pass123'
        },
        {
            isAdmin: false,
            marked:false,
            firstName: 'Janko',
            lastName: 'A',
            dateOfBirth: '2020',
            phoneNumber: '12345',
            username: 'mojMareCare',
            email: 'mail2@g.com',
            password: 'pass123'
        }
    ]
    localStorage.setItem('korisnici_projekat', JSON.stringify(nizKorisnika))
} else {
    nizKorisnika = JSON.parse(localStorage.getItem('korisnici_projekat'))
}
inputUsername.addEventListener('focusin',() =>{
    inputUsername.style.border = '1px solid #4f43bc'
}) 
inputPassword.addEventListener('focusin',() =>{
    inputPassword.style.border = '1px solid #4f43bc'
}) 

forma.addEventListener('submit', (event)=>{
    event.preventDefault()

    if(inputUsername.value.trim() === ''){
        alert('polje ne sme biti prazno')
        inputUsername.style.border = '1px solid red'
        return
    }
    if(inputPassword.value.trim() === ''){
        alert('polje ne sme biti prazno')
        inputPassword.style.border = '1px solid red'
        return
    }
    let ulogovani = false
    for(let i = 0; i <nizKorisnika.length; i++){
       if(inputUsername.value === nizKorisnika[i].username){
        if(inputPassword.value === nizKorisnika[i].password){
            let user = nizKorisnika.find(el => el.username === inputUsername.value)
            localStorage.setItem('ulogovaniKorisnik',JSON.stringify(user))
            inputPassword.value = ''
            inputUsername.value = ''
            ulogovani = true
            
            if(user.username === 'admin') {
                window.location.href="../html/admin.html"
            } else {
                window.location.href="../html/site.html"
            }

            break
        }
        break
       } 
    }
    if(!ulogovani){
        alert('proverite unos za vas username i pasword')
    }
})

// const mojUser = nizKorisnika.find(user => user.username === inputUsername.value)
// nizKorisnika.find()

// if(mojUser === undefined)

// if(mojUser.password !== inputPassword.value)
//     alert()

// push na localstorage
// povlacenje sa localstorage na stranici na kojoj su podaci potrebni