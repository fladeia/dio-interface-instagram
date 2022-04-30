const image = document.querySelector('.image')
const loginInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')
const btnSubmit = document.querySelector('.btnSubmit')
const showPassword = document.querySelector('.showPassword')

const array = [
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png', 
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png', 
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png',
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png', 
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
  passwordInput.type === 'password' ?  passwordInput.type = 'text' : passwordInput.type = 'password'
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
