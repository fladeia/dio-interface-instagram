const image = document.querySelector('.image')

const array = [
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png', 
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png', 
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png',
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png', 
]

let i = 0
setInterval(() => {
  if(i < array.length) {
    image.setAttribute('src', array[i++])
    image.addEventListener("load", () => {
      image.setAttribute('style', 'opacity: 0.5') 
    })
  } else {
    i = 0
    image.setAttribute('src', array[i++])
  }
}, 5000)
