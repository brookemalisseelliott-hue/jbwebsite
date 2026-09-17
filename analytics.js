/* JB Contracting ATX, shared analytics + conversion tracking.
 *
 * IMPORTANT: replace the placeholder IDs in BOTH the script tag in your HTML
 * and the gtag('config', ...) call below with your real Google Analytics 4
 * Measurement ID (format: G-QEZESKC3B6).
 */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-QEZESKC3B6', {
    anonymize_ip: true,
    send_page_view: true
  });

  // jbTrack: site-wide conversion helper. Call from form submits, button taps,
  // anywhere you want to record an event.
  // Example: jbTrack('generate_lead', { service: 'deck' });
  window.jbTrack = function (eventName, params) {
    try { gtag('event', eventName, params || {}); } catch (e) { /* no-op */ }
  };

  // Auto-track every phone-link click as "phone_call_click". Calls are the
  // #1 conversion path for a contractor site, every tap should be counted.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (a) { window.jbTrack('phone_call_click', { phone: a.getAttribute('href') }); }
  }, true);

  // jbSubmitQuote: the shared handler behind every subpage quote form
  // (onsubmit="return jbSubmitQuote(event)"). Posts to Web3Forms, fires the
  // generate_lead conversion, then swaps the form for its success block.
  // Labelled lead_source, never source: GA4 reserves source for attribution.
  window.jbSubmitQuote = async function (e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('.quote-form-submit');
    var successEl = form.querySelector('.quote-form-success');
    var leadSource = form.getAttribute('data-source') || 'subpage_quote_form';

    // We set novalidate on the form so we own the error UX.
    var required = ['name', 'phone', 'project', 'zip'];
    for (var i = 0; i < required.length; i++) {
      var field = form.querySelector('[name="' + required[i] + '"]');
      if (field && !String(field.value || '').trim()) {
        field.focus();
        field.style.borderColor = '#3d7a63';
        return false;
      }
    }

    var original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending\u2026'; }

    try {
      var res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form)
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok || data.success === false) {
        throw new Error(data.message || ('Web3Forms returned ' + res.status));
      }

      var project = form.querySelector('[name="project"]');
      var zip = form.querySelector('[name="zip"]');
      window.jbTrack('generate_lead', {
        service: (project && project.value) || 'unknown',
        zip: (zip && zip.value) || '',
        lead_source: leadSource,
        value: 1,
        currency: 'USD'
      });

      Array.prototype.forEach.call(form.children, function (el) {
        if (el !== successEl) { el.style.display = 'none'; }
      });
      if (successEl) {
        successEl.hidden = false;
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch (err) {
      console.error('Quote submit failed:', err);
      if (btn) { btn.disabled = false; btn.textContent = original; }
      alert('Something hiccuped sending the form, please call John direct at (512) 587-3914, or text us a quick note. Sorry about that.');
    }
    return false;
  };

  // Auto-track every SMS-link click.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="sms:"]');
    if (a) { window.jbTrack('sms_click', { phone: a.getAttribute('href') }); }
  }, true);
})();
