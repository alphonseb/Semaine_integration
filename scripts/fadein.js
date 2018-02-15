let el1 = document.querySelector('main div div p')
let el2 = document.querySelector('.first')
let el3 = document.querySelector('.second')
let el4 = document.querySelector('.third')
let el5 = document.querySelector('.fourth')

window.addEventListener(
  'scroll',
  function(){
    el1.classList.add('fade-in')
    el2.classList.add('fade-in')
    el3.classList.add('fade-in')
    el4.classList.add('fade-in')
    el5.classList.add('fade-in')
  },
  false
)
