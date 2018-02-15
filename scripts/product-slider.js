let slider = document.querySelector('.product-slider')

let img = document.querySelectorAll('.product-slider div')
let index = 0


let sliderTimer = setInterval(
    function(){ slidePerm()},
    5000
  )

function slidePerm(){
  // let indexVisible = 0
  //
  // for (let i = 0; i < img.length; i++) {
  //   if (img[i].classList.contains('is-visible')) {
  //     indexVisible = i
  //     }
  //   }
  if (index < img.length-1) {
    let val = 100*(index+1)
    for (let i = 0; i < img.length; i++) {
      img[i].style.transform = `translateX(-${val}%)`
      }


    // // img[indexVisible].classList.remove('is-visible')
    // sliderIndex[indexVisible].classList.remove('pink-background')
    // img[indexVisible+1].classList.add('is-visible')
    // sliderIndex[indexVisible+1].classList.add('pink-background')
  }
  else {
    let currentTranslateValue = -100*(index)
    let newTranslateValue = currentTranslateValue + 100
    for (let i = 0; i < img.length; i++) {
      img[i].style.transform = `translateX(${newTranslateValue}%)`
      }

    // img[indexVisible].classList.remove('is-visible')
    // sliderIndex[indexVisible].classList.remove('pink-background')
    // img[indexVisible-1].classList.add('is-visible')
    // sliderIndex[indexVisible-1].classList.add('pink-background')
  }
  index++
  if (index === 4) {
    index = 0
  }
  // if (index === 0) {
  //   leftArrow.style.display = 'none'
  // }
  // else if (index === 3) {
  //   rightArrow.style.display = 'none'
  // }
  // else if(leftArrow.style.display !== 'none' && rightArrow.style.display !== 'none')  {
  //   leftArrow.style.display = 'block'
  //   rightArrow.style.display = 'block'
  }
