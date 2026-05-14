/* JB Contracting ATX, shared analytics + conversion tracking.
 *
 * IMPORTANT: replace the placeholder IDs in BOTH the script tag in your HTML
 * and the gtag('config', ...) call below with your real Google Analytics 4
 * Measurement ID (format: G-QEZESKC3B6).
 *
 * Microsoft Clarity loads from each page's <head> separately because it
 * requires inline-tag initialization with your project ID.
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

  // Auto-track every SMS-link click.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="sms:"]');
    if (a) { window.jbTrack('sms_click', { phone: a.getAttribute('href') }); }
  }, true);
})();
