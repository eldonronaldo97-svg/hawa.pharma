const PIXEL_ID = '1302281691617529';
let WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyzcJ9ql30GaE6yzbOgeDo4ESnh0A4WAjV4LNZqwqpoLwHNyl927dzG43zSsg1Rp365/exec';
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', PIXEL_ID);
fbq('track', 'PageView');
const orderForm = document.getElementById('order-form');
if(orderForm){orderForm.addEventListener('submit', async (e)=>{e.preventDefault();const data = Object.fromEntries(new FormData(orderForm).entries());data.date = new Date().toLocaleString();try{const res = await fetch(WEB_APP_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const json=await res.json();if(json.status==='success'){fbq('track','Lead');document.getElementById('form-message').textContent='تم إرسال الطلب بنجاح!';orderForm.reset();}else{document.getElementById('form-message').textContent='حدث خطأ أثناء الإرسال.';}}catch(err){document.getElementById('form-message').textContent='تأكد من إعداد Google Script.';}});}
