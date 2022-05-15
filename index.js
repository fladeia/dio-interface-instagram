const image = document.querySelector('.image')
const loginInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')
const btnSubmit = document.querySelector('.btnSubmit')
const showPassword = document.querySelector('.showPassword')

const array = [
  './assets/images/illustration2.png', 
  './assets/images/illustration3.png', 
  './assets/images/illustration4.png',
  './assets/images/illustration1.png', 
]

let login = false
let password = false

function enableBtn() {
  btnSubmit.removeAttribute('disabled')
  btnSubmit.style.backgroundColor = "var(--blue-2)"
  btnSubmit.style.cursor = "pointer"
  showPassword.setAttribute('style', 'visibility: visible')
}

function disableBtn() {
  btnSubmit.setAttribute('disabled', 'true')
  btnSubmit.style.backgroundColor = "var(--blue-1)"
  btnSubmit.style.cursor = "auto"
  showPassword.setAttribute('style', 'visibility: hidden')
}

loginInput.addEventListener('input', (e) => {
  if(e.target.value.length > 3) {
    login = true
  } else {
    login = false
    disableBtn()
  }

  if(login && password) {
    enableBtn()
  }
})

passwordInput.addEventListener('input', (e) => {
  if(e.target.value.length > 3) {
    password = true
  } else {
    password = false
    disableBtn()
  }
  
  if(login && password) {
    enableBtn()
  }
})

showPassword.addEventListener('click', () => {
  showPassword.innerHTML === 'Mostrar' ?  showPassword.innerHTML = 'Ocultar' : showPassword.innerHTML = 'Mostrar'
  // passwordInput.type === 'password' ?  passwordInput.type = 'text' : passwordInput.type = 'password'
})

let i = 0
setInterval(() => {
  if(i < array.length) {
    image.setAttribute('src', array[i++])
    image.addEventListener("load", () => {
    })
  } else {
    i = 0
    image.setAttribute('src', array[i++])
  }
}, 5000)
