let prevDiv = document.querySelector('.homepage-products-row')
let prevDivHeight = prevDiv.clientHeight
let margin = prevDivHeight + 50

let footer = document.querySelector('footer')
footer.style.marginTop = `${margin}px`

window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});
