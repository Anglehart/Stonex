window.onload = uhfCheck()
function uhfCheck() {
  if (document.getElementById('uhfCheck').checked) {
    document.getElementById('price').innerHTML = '230 000 ₽'
  } else {
    document.getElementById('price').innerHTML = '226 000 ₽'
  }
}
