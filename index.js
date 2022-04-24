const image = [...document.querySelectorAll('.image')]
const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const image3 = document.querySelector('.image3')
const image4 = document.querySelector('.image4')

// image.map((item) => {
//   setInterval(() => {
//     if(item.classList.contains('show')) {
//       console.log(item)
//     }
//   }, 333000)
// })

// setInterval(() => {
//   if(image1.classList.contains("show")) {
//     image1.classList.remove("show")
//   } else {
//     image1.classList.add("show")
//   }
// }, 3000)

// setInterval(() => {
//   if(image2.classList.contains("show")) {
//     image2.classList.remove("show")
//   } else {
//     image2.classList.add("show")
//   }
// }, 3000)

// setInterval(() => {
//   if(image3.classList.contains("show")) {
//     image3.classList.remove("show")
//   } else {
//     image3.classList.add("show")
//   }
// }, 3000)

const imageOne = () => {
  setTimeout(() => {
    if(image1.classList.contains("show")) {
      image1.classList.remove("show")
    } else {
      image1.classList.add("show")
    }
  }, 3000)
}



const imageTwo = () => {
  setTimeout(() => {
    if(image2.classList.contains("show")) {
      image2.classList.remove("show")
    } else {
      image2.classList.add("show")
    }
  }, 3000)
}



const imageThree = () => {
  setTimeout(() => {
    if(image3.classList.contains("show")) {
      image3.classList.remove("show")
    } else {
      image3.classList.add("show")
    }
  }, 6000)
}



const imageFour = () => {
  setTimeout(() => {
    if(image4.classList.contains("show")) {
      image4.classList.remove("show")
    } else {
      image4.classList.add("show")
    }
  }, 9000)
}

imageOne()
imageTwo()
setTimeout(imageTwo, 3000)
imageThree()
setTimeout(imageThree, 3000)
imageFour()

// imageOne()
// imageTwo()
// setTimeout(imageTwo, 3000)
// imageThree()
// setTimeout(imageThree, 3000)
// imageFour()
