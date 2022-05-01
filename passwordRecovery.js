const loginInput = document.querySelector('#login')
const btnSubmit = document.querySelector('.btnSubmit')
const showPassword = document.querySelector('.showPassword')


let login = false

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

  if(login) {
    enableBtn()
  }
})
