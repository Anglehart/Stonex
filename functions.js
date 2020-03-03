window.onload = uhfCheck()
function uhfCheck() {
  if (document.getElementById('uhfCheck').checked) {
    document.getElementById('price').innerHTML = '230 000 ₽'
  } else {
    document.getElementById('price').innerHTML = '226 000 ₽'
  }
}

function allPhotos() {
  let addPics = document.getElementsByClassName('addpic');
  let allPhotos = document.getElementsByClassName('photos');
  if (document.getElementsByClassName('photogallery-inner')[0].style.width != "100%"){
    document.getElementById('arrow').style.transform = "rotate(180deg)";
    document.getElementsByClassName('photogallery-inner')[0].style.width = "100%";
    allPhotos[0].style.marginLeft = "calc(50% - 450px)";
    allPhotos[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    allPhotos[0].style.gridTemplateAreas = "'pic1 pic2 pic3 pic8' 'pic4 pic2 pic5 pic9' 'pic6 pic6 pic7 pic10' 'pic6 pic6 pic11 arrow'"
    allPhotos[0].style.width = "900px";
    for (let i = 0; i < addPics.length; i++) {
      document.getElementsByClassName('addpic')[i].style.display = "block";
    }
  } else {
    document.getElementsByClassName('photogallery-inner')[0].style = "none";
    allPhotos[0].style = "none";
    document.getElementById('arrow').style = "none";
    for (let i = 0; i < addPics.length; i++) {
      document.getElementsByClassName('addpic')[i].style = "none";
    }
  }
}
