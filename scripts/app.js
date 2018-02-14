let leftArrow = document.querySelector('.slider-arrow-left')
let rightArrow = document.querySelector('.slider-arrow-right')

let img = document.querySelectorAll('.slider-content img')


leftArrow.addEventListener(
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
        img[indexVisible+1].classList.add('is-visible')

    }
  },
  false
)

rightArrow.addEventListener(
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
        img[indexVisible-1].classList.add('is-visible')

    }


  },
  false
)
