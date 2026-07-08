// Submit the contact form via AJAX so we can show our own /thanks/ page
// (Formspree's _next redirect is a paid feature; AJAX works on the free plan).
// With JavaScript disabled the form falls back to a normal POST.
(function () {
  var form = document.getElementById('fs-frm');
  if (!form || !window.fetch || !window.FormData) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('input[type="submit"]');
    if (btn) { btn.disabled = true; btn.value = 'Sending…'; }
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (r) {
      if (r.ok) { window.location.href = '/thanks/'; return; }
      return r.json().then(function (j) {
        var msg = (j && j.errors) ? j.errors.map(function (er) { return er.message; }).join(', ') : 'submission failed';
        throw new Error(msg);
      });
    }).catch(function (err) {
      if (btn) { btn.disabled = false; btn.value = 'Submit'; }
      var msg = document.getElementById('fs-frm-error');
      if (!msg) {
        msg = document.createElement('p');
        msg.id = 'fs-frm-error';
        msg.setAttribute('role', 'alert');
        msg.style.color = '#b00020';
        form.appendChild(msg);
      }
      msg.textContent = 'Sorry, your message could not be sent (' + err.message + '). Please try again.';
    });
  });
})();
