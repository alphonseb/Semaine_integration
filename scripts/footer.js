let prevDiv = document.querySelector('.homepage-products-row')
let prevDivHeight = prevDiv.clientHeight
let margin = prevDivHeight + 60
let width = window.innerWidth

let reassurance = document.querySelector('.reassure')
reassurance.style.marginTop = `${margin}px`

window.addEventListener('resize', function () {
    "use strict";
    if (window.innerWidth!==width) {
      window.location.reload();
    }

});
