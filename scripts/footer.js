let prevDiv = document.querySelector('.homepage-products-row')
let prevDivHeight = prevDiv.clientHeight
let margin = prevDivHeight + 60

let reassurance = document.querySelector('#firstPage')
reassurance.style.marginTop = `${margin}px`

window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});
