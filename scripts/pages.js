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

function showCheckboxes() {
  event.target
  if (!expanded) {
    gnssMenu.style.display = 'block';
    event.target.innerHTML = '+&nbsp;&nbsp;&nbsp;GNSS приемники';
    expanded = true;
  } else {
    gnssMenu.style.display = 'none';
    event.target.innerHTML = '-&nbsp;&nbsp;&nbsp;GNSS приемники';
    expanded = false;
  }
}


gnssMenu.querySelectorAll('input').forEach((item) => { item.checked = false; });

gnssMenu.addEventListener('click', (el) => {
  if (el.target.id && !el.target.disabled && el.target.checked) {
    enableColumn(el.target.id);
  } else if (el.target.id && !el.target.checked){
    disableColumn(el.target.id);
  }
  let counter = 0;
  gnssMenu.querySelectorAll('input').forEach((item) => {
    if(item.checked){ counter += 1; }
  });
  gnssMenu.querySelectorAll('input').forEach((item) => {
    if(counter >= 3 && !item.checked) { item.disabled = true; } else { item.disabled = false; }
  });
});

function enableColumn(id) {
  document.querySelectorAll('.' + id).forEach((item) => {
    item.style.display = 'table-cell';
  });
}
function disableColumn(id) {
  document.querySelectorAll('.' + id).forEach((item) => {
    item.style.display = 'none';
  });
}
