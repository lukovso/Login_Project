const tabelaKorisnici = document.querySelector('.korisnici')
const btnDelete = document.querySelector('button')

let nizKorisnici = JSON.parse(localStorage.getItem('korisnici_projekat'))

function ispisKorisnici(nizKorisnici) {
    tabelaKorisnici.textContent = ''
    nizKorisnici.forEach((user,index) => {
        if(index == 0)
            return
        const trUser = document.createElement('tr')
        trUser.className = 'korisnik'

        const pUsername = document.createElement('td')
        pUsername.textContent = user.username

        const pFirstName = document.createElement('td')
        pFirstName.textContent = user.firstName

        const pLastName = document.createElement('td')
        pLastName.textContent = user.lastName

        const pEmail = document.createElement('td')
        pEmail.textContent = user.email

        const pPassword = document.createElement('td')
        pPassword.textContent = user.password

        const pPhone = document.createElement('td')
        pPhone.textContent = user.phoneNumber

        const pBirthday = document.createElement('td')
        pBirthday.textContent = user.dateOfBirth


        trUser.append(pUsername, pFirstName, pLastName, pEmail, pPassword, pPhone, pBirthday)
        tabelaKorisnici.appendChild(trUser)

        trUser.addEventListener('click',(event) => {
            let kor = nizKorisnici.find(element => element.username === event.target.parentElement.children[0].textContent)
            kor.marked = !kor.marked
            if(kor.marked === true)
                trUser.style.backgroundColor = 'red'
            else
                trUser.style.backgroundColor = 'transparent'

        })

        btnDelete.addEventListener('click',() => {
            for(let i = 0; i < nizKorisnici.length; i++) {
                if(nizKorisnici[i].marked === true) {
                    nizKorisnici.splice(i, 1)
                    i--
                }
            }

            localStorage.setItem('korisnici_projekat' ,JSON.stringify(nizKorisnici))
            ispisKorisnici(nizKorisnici)


            // nizKorisnici.filter(element => element.marked === true).forEach(korisnik => {
            //     nizKorisnici.splice(nizKorisnici.findIndex(element => element.email === korisnik.email), 1)
            // })

            // nizKorisnici.splice(nizKorisnici.findIndex(element => element.marked === true), 1)
            // ispisKorisnici(nizKorisnici)
        })
    })
}
ispisKorisnici(nizKorisnici)


