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
let gnssExpanded = false;
let contrExpanded = false;
const gnssMenu = document.getElementById('gnss-checkboxes');
const contrMenu = document.getElementById('controller-checkboxes');
const diffButton = document.getElementById('diffBox');
const gnssBox = document.getElementById('gnss-box');
const contrBox = document.getElementById('controller-box');
document.addEventListener('click', (el) => {
  if(el.target.id === 'gnss-box' || el.target.parentNode.parentNode.id  === 'gnss-checkboxes'){
    gnssMenu.style.display = 'block';
    gnssBox.innerHTML = '+&nbsp;&nbsp;&nbsp;GNSS приемники';
    gnssBox.classList.add('active-button');
    gnssExpanded = true;
  } else {
    gnssMenu.style.display = 'none';
    gnssBox.innerHTML = '&minus;&nbsp;&nbsp;&nbsp;GNSS приемники';
    gnssBox.classList.remove('active-button');
    gnssExpanded = false;
  }

  if (el.target.id === 'controller-box' || el.target.parentNode.parentNode.id  === 'controller-checkboxes'){
    contrMenu.style.display = 'block';
    contrBox.innerHTML = '+&nbsp;&nbsp;&nbsp;Контроллеры';
    contrBox.classList.add('active-button');
    contrExpanded = true;
  } else {
    contrMenu.style.display = 'none';
    contrBox.innerHTML = '&minus;&nbsp;&nbsp;&nbsp;Контроллеры';
    contrBox.classList.remove('active-button');
    contrExpanded = false;
  }
})

gnssMenu.querySelectorAll('input').forEach((item) => { item.checked = false; });
contrMenu.querySelectorAll('input').forEach((item) => { item.checked = false; });

gnssMenu.addEventListener('click', (event) => {
  if (!event.target.disabled && event.target.id){
    document.querySelectorAll('#controller-checkboxes input').forEach((item) => {
      disableColumn(item.id);
      disableColumn('main-controller');
      item.checked = false;
      item.disabled = false;
      item.parentNode.style.color = "#000";
    })
    gnssMenu.querySelectorAll('input').forEach((el) => {
      if (el.checked) {
        enableColumn('main-gnss');
        enableColumn(el.id);
        checboxCounter();
      } else if (!el.checked){
        disableColumn(el.id);
        checboxCounter();
      }
    });
  }
});

contrMenu.addEventListener('click', (event) => {
  if (!event.target.disabled && event.target.id) {
    document.querySelectorAll('#gnss-checkboxes input').forEach((item) => {
      disableColumn(item.id);
      disableColumn('main-gnss');
      item.checked = false;
      item.disabled = false;
      item.parentNode.style.color = "#000";
    })
    contrMenu.querySelectorAll('input').forEach((el) => {
      if (el.checked) {
        enableColumn('main-controller');
        enableColumn(el.id);
        checboxCounter();
      } else if (!el.checked){
        disableColumn(el.id);
        checboxCounter();
      }
    });
  }
});

document.getElementById('clearBox').addEventListener('click', () => {
  document.querySelectorAll('#gnss-checkboxes input, #controller-checkboxes input').forEach((item) => {
    item.checked = false;
    item.disabled = false;
    item.parentNode.style.color = "#000";
    diffButton.classList.remove('active-button');
    diffButton.classList.add('inactive-button');
    document.querySelector('.compare-wrapper').classList.remove('wrapperH');
    disableColumn(item.id);
    disableColumn('main-gnss');
    disableColumn('main-controller');
  });
})

const visibleCols = document.querySelectorAll('.show-column');

function showDiff(){
  diffButton.classList.add('active-button');
  document.querySelectorAll('tr').forEach((item, i) => {
    if (i > 1) {
      let temp = [];
      item.querySelectorAll('td').forEach((elem) => {
        if (!elem.classList.contains('main-gnss') && !elem.classList.contains('main-controller') && elem.classList.contains('show-column')){
          temp.push(elem.innerText);
        }
      });
      if (temp[0] === temp[1] && temp[0] === temp[temp.length - 1]) {
        item.classList.add('hide-row');
      }
    }
  });
}

document.querySelectorAll('.minus-button').forEach((item) => {
  item.addEventListener('click', (el) => {
    const id = el.target.id.slice(0, -1);
    diffButton.classList.remove('active-button');
    disableColumn(id);
    document.getElementById(id).checked = false;
    checboxCounter();
  })
})

function checboxCounter() {
  let counterGnss = 0;
  let counterContr = 0;

  gnssMenu.querySelectorAll('input').forEach((item) => {
    if(item.checked){ counterGnss += 1; }
  });
  gnssMenu.querySelectorAll('input').forEach((item) => {
    if(counterGnss >= 3 && !item.checked) {
      item.disabled = true;
      item.parentNode.style.color = "#ccc";
    } else {
      item.disabled = false;
      item.parentNode.style.color = "#000";
    }
  });

  contrMenu.querySelectorAll('input').forEach((item) => {
    if(item.checked){ counterContr += 1; }
  });
  contrMenu.querySelectorAll('input').forEach((item) => {
    if(counterContr >= 3 && !item.checked) {
      item.disabled = true;
      item.parentNode.style.color = "#ccc";
    } else {
      item.disabled = false;
      item.parentNode.style.color = "#000";
    }
  });

  if(counterGnss > 1 || counterContr > 1) {
    diffButton.classList.remove('inactive-button');
  } else {
    diffButton.classList.add('inactive-button');
    diffButton.classList.remove('active-button');
  }

  if(counterGnss === 0) {
    disableColumn('main-gnss');
  }
  if(counterContr === 0) {
    disableColumn('main-controller');
  }

  if(counterContr === 0 && counterGnss === 0) {
    document.querySelector('.compare-wrapper').classList.remove('wrapperH');
  }
}

function enableColumn(id) {
  diffButton.classList.remove('active-button');
  document.querySelectorAll('.' + id).forEach((item) => {
    item.classList.add('show-column');
    item.parentNode.classList.remove('hide-row');
    document.querySelector('.compare-wrapper').classList.add('wrapperH');
  });
}
function disableColumn(id) {
  document.querySelectorAll('.' + id).forEach((item) => {
    item.classList.remove('show-column');
    item.parentNode.classList.remove('hide-row');
  });
}
