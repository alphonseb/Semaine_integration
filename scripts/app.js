let leftArrow = document.querySelector('.slider-arrow-left')
let rightArrow = document.querySelector('.slider-arrow-right')
let slider = document.querySelector('.slider-content')

let img = document.querySelectorAll('.slider-content div')
let sliderIndex = document.querySelectorAll('.slider-index div')
let index = 0
leftArrow.style.display = 'none'
sliderIndex[0].classList.add('pink-background')

let sliderTimer = setInterval(
    function(){ slidePerm()},
    5000
  )

function slidePerm(){
  let indexVisible = 0

  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('is-visible')) {
      indexVisible = i
      }
    }
  if (index < img.length-1) {
    let val = 100*(indexVisible+1)
    for (let i = 0; i < img.length; i++) {
      img[i].style.transform = `translateX(-${val}%)`
      }


    img[indexVisible].classList.remove('is-visible')
    sliderIndex[indexVisible].classList.remove('pink-background')
    img[indexVisible+1].classList.add('is-visible')
    sliderIndex[indexVisible+1].classList.add('pink-background')
  }
  else {
    let currentTranslateValue = -100*(indexVisible)
    let newTranslateValue = currentTranslateValue + 100
    for (let i = 0; i < img.length; i++) {
      img[i].style.transform = `translateX(${newTranslateValue}%)`
      }

    img[indexVisible].classList.remove('is-visible')
    sliderIndex[indexVisible].classList.remove('pink-background')
    img[indexVisible-1].classList.add('is-visible')
    sliderIndex[indexVisible-1].classList.add('pink-background')
  }
  index++
  if (index === 6) {
    index = 0
  }
  if (index === 0) {
    leftArrow.style.display = 'none'
  }
  else if (index === 3) {
    rightArrow.style.display = 'none'
  }
  else {
    leftArrow.style.display = 'block'
    rightArrow.style.display = 'block'
  }
}



// slider.addEventListener(
//   'mouseenter',
//   function(){
//     sliderStop()
//   },
//   false
// )
//
// slider.addEventListener(
//   'mouseleave',
//   function(){
//     let sliderTimer = setInterval(
//         function(){ slidePerm()},
//         5000
//       )
//   }
// )

rightArrow.addEventListener(
  'click',
  function slideLeft(){
    let indexVisible = 0
    for (let i = 0; i < img.length; i++) {
      if (img[i].classList.contains('is-visible')) {
        indexVisible = i
      }
    }
    if (indexVisible!==img.length-1) {
      let val = 100*(indexVisible+1)
      for (let i = 0; i < img.length; i++) {
        img[i].style.transform = `translateX(-${val}%)`
      }


        img[indexVisible].classList.remove('is-visible')
        sliderIndex[indexVisible].classList.remove('pink-background')
        img[indexVisible+1].classList.add('is-visible')
        sliderIndex[indexVisible+1].classList.add('pink-background')
        index = indexVisible+1
        if (index === 3) {
          rightArrow.style.display = 'none'
        }
        else {
          leftArrow.style.display = 'block'
          rightArrow.style.display = 'block'
        }
    }

  },
  false
)

leftArrow.addEventListener(
  'click',
  function slideLeft(){
    let indexVisible = 0
    for (let i = 0; i < img.length; i++) {
      if (img[i].classList.contains('is-visible')) {
        indexVisible = i
      }
    }
    if (indexVisible!==0) {
      let currentTranslateValue = -100*(indexVisible)
      let newTranslateValue = currentTranslateValue + 100
      for (let i = 0; i < img.length; i++) {
        img[i].style.transform = `translateX(${newTranslateValue}%)`
      }


      img[indexVisible].classList.remove('is-visible')
      sliderIndex[indexVisible].classList.remove('pink-background')
      img[indexVisible-1].classList.add('is-visible')
      sliderIndex[indexVisible-1].classList.add('pink-background')
      index = indexVisible-1
      if (index === 0) {
        leftArrow.style.display = 'none'
      }
      else {
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'block'
      }
    }

  },
  false
)

function sliderStop(){
  clearInterval(sliderTimer)
}

// for (let k = 0; k < sliderIndex.length; k++) {
//   sliderIndex[k].addEventListener(
//     'click',
//     function moveTo(){
//       let indexVisible = 0
//       for (let j = 0; j < img.length; j++) {
//         if (img[j].classList.contains('is-visible')) {
//           indexVisible = j
//         }
//       }
//       let newTranslateValue = -k*100
//
//       for (let j = 0; j < img.length; j++) {
//         img[j].style.transform = `translateX(${newTranslateValue}%)`
//       }
//       img[indexVisible].classList.remove('is-visible')
//       sliderIndex[indexVisible].classList.remove('pink-background')
//       img[k].classList.add('is-visible')
//       sliderIndex[k].classList.add('pink-background')
//       index = k
//     },
//     false
//   )
// }
