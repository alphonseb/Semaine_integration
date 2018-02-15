let prevDiv = document.querySelector('.homepage-products-row')
let prevDivHeight = prevDiv.clientHeight
let margin = prevDivHeight + 60
let width = window.width()

let reassurance = document.querySelector('#firstPage')
reassurance.style.marginTop = `${margin}px`

window.addEventListener('resize', function () {
    "use strict";
    if (window.width()!==width) {
      window.location.reload();
    }

});
