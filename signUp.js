const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const btnSubmit = document.querySelector('.btnSubmit')
const showPassword = document.querySelector('.showPassword')

let email = false
let name = false
let username = false
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

emailInput.addEventListener('input', (e) => {
  if(e.target.value.length > 3) {
    email = true
  } else {
    email = false
    disableBtn()
  }

  if(email && name && username && password) {
    enableBtn()
  }
})

nameInput.addEventListener('input', (e) => {
  if(e.target.value.length > 3) {
    name = true
  } else {
    name = false
    disableBtn()
  }

  if(email && name && username && password) {
    enableBtn()
  }
})

usernameInput.addEventListener('input', (e) => {
  if(e.target.value.length > 3) {
    username = true
  } else {
    username = false
    disableBtn()
  }

  if(email && name && username && password) {
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
  
  if(email && name && username && password) {
    enableBtn()
  }
})

showPassword.addEventListener('click', () => {
  showPassword.innerHTML === 'Mostrar' ?  showPassword.innerHTML = 'Ocultar' : showPassword.innerHTML = 'Mostrar'
  // passwordInput.type === 'password' ?  passwordInput.type = 'text' : passwordInput.type = 'password'
})
