window.onload = uhfCheck()
function uhfCheck() {
  if (document.getElementById('uhfCheck').checked) {
    document.getElementById('price').innerHTML = '230 000 ₽'
  } else {
    document.getElementById('price').innerHTML = '226 000 ₽'
  }
}

function allPhotos() {
  if (document.getElementsByClassName('photogallery-inner')[0].style.width != "100%"){
    document.getElementsByClassName('photogallery-inner')[0].style.width = "100%";
    document.getElementsByClassName('photos')[0].style.margin = "auto";
    document.getElementById('arrow').style.transform = "rotate(180deg)";
  } else {
    document.getElementsByClassName('photogallery-inner')[0].style.width = "55.5%";
    document.getElementsByClassName('photos')[0].style.margin = "0";
    document.getElementById('arrow').style.transform = "rotate(0deg)";
  }
}
