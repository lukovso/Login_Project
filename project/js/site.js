const pPoruka = document.querySelector('p')

const user = JSON.parse(localStorage.getItem('ulogovaniKorisnik'))
pPoruka.textContent = `Pozdrav ${user.username}`
