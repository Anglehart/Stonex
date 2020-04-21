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

// Всплывющее окно
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
