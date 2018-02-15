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
    10000
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
  else if(leftArrow.style.display !== 'none' && rightArrow.style.display !== 'none')  {
    leftArrow.style.display = 'block'
    rightArrow.style.display = 'block'
  }
}


rightArrow.addEventListener(
  'click',
  function(){
    slideRight()
  },
  false
)

leftArrow.addEventListener(
  'click',
  function(){
    slideLeft()
  },
  false
)



slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            slideRight()/* left swipe */
        } else {
            slideLeft()/* right swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

function slideRight(){
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
      else if(leftArrow.style.display !== 'none' && rightArrow.style.display !== 'none'){
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'block'
      }
  }

}

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
    else if(leftArrow.style.display !== 'none' && rightArrow.style.display !== 'none') {
      leftArrow.style.display = 'block'
      rightArrow.style.display = 'block'
    }
  }

}
