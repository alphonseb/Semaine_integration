let titreOnglet = document.querySelectorAll('.homepage-products h2')
let productRow = document.querySelectorAll('.homepage-products-row')
let timerIndex = 0

setInterval(
  function(){
    for (var j = 0; j < titreOnglet.length; j++) {
      titreOnglet[j].classList.remove('selected')
      productRow[j].classList.remove('show')
    }
    titreOnglet[timerIndex].classList.toggle('selected')
    productRow[timerIndex].classList.toggle('show')
    timerIndex++
    if (timerIndex === 3) {
      timerIndex = 0
    }
  },
  7000
)

for (let i = 0; i < titreOnglet.length; i++) {
  titreOnglet[i].addEventListener(
    'click',
    function(){
      for (var j = 0; j < titreOnglet.length; j++) {
        titreOnglet[j].classList.remove('selected')
        productRow[j].classList.remove('show')
      }
      titreOnglet[i].classList.toggle('selected')
      productRow[i].classList.toggle('show')
      timerIndex = i+1
      if (timerIndex === 3) {
        timerIndex = 0
      }
    },
    false
  )
}
