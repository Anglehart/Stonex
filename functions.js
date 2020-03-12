window.onload = uhfCheck()
function uhfCheck() {
  if (document.getElementById('uhfCheck').checked) {
    document.getElementById('price').innerHTML = '276 000 ₽'
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

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*Функция для смены фона в закладке Документы*/
document.getElementById("tab").addEventListener('click', (event) => {
  document.getElementById("tabs-section").style.backgroundImage = "none";
  if (event.target.id == "docs-button"){
    document.getElementById("tabs-section").style.backgroundImage = "url(../assets/docs-back.png)";
  }
})

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
    document.getElementById("book2").style.margin = -posY + 'px ' + posX + 'px'
  })
