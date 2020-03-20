function hideAll(){
    document.getElementById('contact-map').querySelectorAll('div').forEach(item => {item.classList.add('hidden-map')});
}
function mskclick(){
  hideAll();
  document.getElementById('msk-map').classList.remove('hidden-map');
}
function spbclick(){
  hideAll();
  document.getElementById('spb-map').classList.remove('hidden-map');
}
function klgclick(){
  hideAll();
  document.getElementById('klg-map').classList.remove('hidden-map');
}
