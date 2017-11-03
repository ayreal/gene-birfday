// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

// VANILLA SOLUTION
let zombie = document.getElementById("foreground");
let button = document.getElementById("save_lincoln");
button.addEventListener("click", function(e) {
  let time = parseInt(document.querySelector("input").value);
  fadeOutEffect(time / 100);
});

function fadeOutEffect(time) {
  var fadeEffect = setInterval(function() {
    if (!zombie.style.opacity) {
      zombie.style.opacity = 1;
    }
    if (zombie.style.opacity < 0.01) {
      clearInterval(fadeEffect);
    } else {
      zombie.style.opacity -= 0.01;
    }
  }, time);
}
