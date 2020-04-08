function hideAll(){
  Array.from(document.getElementsByClassName('map-area')).forEach(item => {item.classList.add('hidden-map')});
  Array.from(document.getElementsByClassName('info-map')).forEach(item => {item.classList.add('hidden-info')});
  Array.from(document.getElementsByClassName('yandex-map')).forEach(item => {item.classList.add('disactive')});
}
function mskclick(){
  hideAll();
  document.getElementById('msk-map').classList.remove('hidden-map');
  document.getElementById('msk-info').classList.remove('hidden-info');
  document.getElementById('alex-yandex-map').classList.remove('disactive');
  alexclick();
}
function spbclick(){
  hideAll();
  document.getElementById('spb-map').classList.remove('hidden-map');
  document.getElementById('spb-info').classList.remove('hidden-info');
  document.getElementById('spb-yandex-map').classList.remove('disactive');
}
function klgclick(){
  hideAll();
  document.getElementById('klg-map').classList.remove('hidden-map');
  document.getElementById('klg-info').classList.remove('hidden-info');
  document.getElementById('klg-yandex-map').classList.remove('disactive');
}
function alexclick(){
  hideAll();
  document.getElementById('msk-map').classList.remove('hidden-map');
  document.getElementById('msk-info').classList.remove('hidden-info');
  document.getElementById('alex-yandex-map').classList.remove('disactive');
  document.getElementById('alex-button').classList.add('metro-button-active');
  document.getElementById('vdnh-button').classList.remove('metro-button-active');
}
function vdnhclick(){
  hideAll();
  document.getElementById('msk-map').classList.remove('hidden-map');
  document.getElementById('msk-info').classList.remove('hidden-info');
  document.getElementById('vdnh-yandex-map').classList.remove('disactive');
  document.getElementById('alex-button').classList.remove('metro-button-active');
  document.getElementById('vdnh-button').classList.add('metro-button-active');
}
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

// Выпадающий список чекбоксов
var expanded = false;
const gnssMenu = document.getElementById('gnss-checkboxes');

document.addEventListener('click', (el) => {
  if(el.target.id === 'gnss-box' || el.target.parentNode.parentNode.id  === 'gnss-checkboxes'){
    gnssMenu.style.display = 'block';
    document.getElementById('gnss-box').innerHTML = '+&nbsp;&nbsp;&nbsp;GNSS приемники';
    expanded = true;
  } else {
    gnssMenu.style.display = 'none';
    document.getElementById('gnss-box').innerHTML = '&minus;&nbsp;&nbsp;&nbsp;GNSS приемники';
    expanded = false;
  }
})

gnssMenu.querySelectorAll('input').forEach((item) => { item.checked = false; });

gnssMenu.addEventListener('click', (el) => {
  if (el.target.id && !el.target.disabled && el.target.checked) {
    enableColumn(el.target.id);
    checboxCounter();
  } else if (el.target.id && !el.target.checked){
    disableColumn(el.target.id);
    checboxCounter();
  }
});

document.getElementById('clearBox').addEventListener('click', () => {
  gnssMenu.querySelectorAll('input').forEach((item) => {
    item.checked = false;
    item.disabled = false;
    disableColumn(item.id);
    disableColumn('main-gnss');
  });
})

document.querySelectorAll('.minus-button').forEach((item) => {
  item.addEventListener('click', (el) => {
    const id = el.target.id.slice(0, -1);
    disableColumn(id);
    document.getElementById(id).checked = false;
    checboxCounter();
  })
})

function checboxCounter() {
  let counter = 0;
  gnssMenu.querySelectorAll('input').forEach((item) => {
    if(item.checked){ counter += 1; }
  });
  gnssMenu.querySelectorAll('input').forEach((item) => {
    if(counter >= 3 && !item.checked) {
      item.disabled = true;
      item.parentNode.style.color = "#ccc";
    } else {
      item.disabled = false;
      item.parentNode.style.color = "#000";
    }
  });
  if(counter === 0) {
    disableColumn('main-gnss');
  } else {
    enableColumn('main-gnss');
  }
}

function enableColumn(id) {
  document.querySelectorAll('.' + id).forEach((item) => {
    item.style.position = 'inherit';
    item.classList.add('show-column');
  });
}
function disableColumn(id) {
  document.querySelectorAll('.' + id).forEach((item) => {
    item.classList.remove('show-column');
    setTimeout(() => item.style.position = 'absolute', 300);
  });
}
