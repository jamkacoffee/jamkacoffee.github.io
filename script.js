
function switchLang(lang){
  document.querySelectorAll('[data-en]').forEach(el=>{
    el.innerHTML = el.getAttribute('data-'+lang);
  });
}

function sendTelegram(){
  let name=document.getElementById('name').value;
  let drink=document.getElementById('drink').value;
  let qty=document.getElementById('qty').value;
  let addr=document.getElementById('addr').value;
  let text=`Order Jamka Coffee%0AName: ${name}%0ADrink: ${drink}%0AQty: ${qty}%0AAddress: ${addr}`;
  window.open('https://t.me/share/url?url=&text='+text,'_blank');
}
