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
