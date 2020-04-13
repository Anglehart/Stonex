window.onload = uhfCheck()
function uhfCheck() {
  if (document.getElementById('uhfCheck').checked) {
    document.getElementById('price').innerHTML = '276 000 ₽'
  } else {
    document.getElementById('price').innerHTML = '226 000 ₽'
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Закладки
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*Параллакс*/
var body = document.getElementById("tabs-section"),
    startX = -50,
    startY = -50,
    w = document.documentElement.offsetWidth,
    h = document.documentElement.offsetHeight;

body.addEventListener('mousemove', function(evt){
  var posX = Math.round(evt.clientX / w * startX)
  var posY = Math.round(evt.clientY / h * startY)
  document.getElementById("book1").style.margin = posY + 'px ' + posX + 'px'
})

/*Всплывющее окно*/
document.getElementById("callback-button").addEventListener('click', (event) => {
  document.getElementById("message-wrapper").classList.remove('disactive');
  document.getElementById('order-form').reset();
  document.querySelector("#form-file-message p").innerHTML = "Прикрепить реквизиты"
})
document.getElementById("message-wrapper").addEventListener('click', (event) => {
  if (event.target.id == "message-wrapper") document.getElementById("message-wrapper").classList.add('disactive');
})

const dropZone = document.getElementById("form-file");
dropZone.addEventListener('drop', () => {
  setTimeout(() => {
    let backSlash = dropZone.value.lastIndexOf('\\') + 1;
    document.querySelector("#form-file-message p").innerHTML = dropZone.value.slice(backSlash),
    10})
})

// Всплывающее меню
document.getElementById('catalog-link').addEventListener('click', () => {
  if (document.getElementById('catalog-menu').classList.contains('disactive')){
    document.getElementById('catalog-menu').classList.remove('disactive');
  }
})
document.body.addEventListener('click', () => {
  if (event.target.id !== 'catalog-menu' && event.target.id !== 'catalog-link') {
    document.getElementById('catalog-menu').classList.add('disactive');
  } else if(event.target.id == 'catalog-menu') {
    document.getElementById('catalog-link').focus();
  }
})