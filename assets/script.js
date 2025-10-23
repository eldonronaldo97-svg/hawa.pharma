
function scrollToForm() {
  document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function(){
  // Offer selection  // Facebook Pixel Code
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '856038584254898');
  fbq('track', 'PageView');
  // End Facebook Pixel Code

  document.querySelectorAll('[data-offer]').forEach(btn => {
    btn.addEventListener('click', function(){
      document.getElementById('offerInput').value = this.dataset.offer;
      scrollToForm();
    });
  });

  // Countdown
  const countdown = document.getElementById('offer2-countdown');
  if(countdown){
    let end = localStorage.getItem('bella_offer2_end');
    if(!end){ end = Date.now() + 24*60*60*1000; localStorage.setItem('bella_offer2_end', end); }
    setInterval(()=>{
      const diff = end - Date.now();
      if(diff <= 0){ countdown.textContent = 'انتهى العرض'; return; }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      countdown.textContent = `العرض ينتهي خلال ${h}س ${m}د ${s}ث`;
    }, 1000);
  }

  // Submit form
  const form = document.getElementById('orderForm');
  const btn = document.getElementById('submitBtn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    btn.textContent = 'انتظر قليلاً...';
    btn.classList.add('disabled');
    btn.disabled = true;
    const formData = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzVchRkPF0HHBycnsYtt1O8v795d__dq99IUL5Nqc4GjodQYhADkHSyNVWX3r5Bq1Lr/exec', {
      method:'POST', body:formData
    })
    .then(r=>r.text())
    .then(()=>{
      btn.textContent = 'تم تأكيد طلبك ✓';
      btn.classList.remove('disabled');
      btn.classList.add('success');
    })
    .catch(()=>{
      alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
      btn.textContent = 'تأكيد الطلب الآن';
      btn.classList.remove('disabled');
      btn.disabled = false;
    });
  });
});
