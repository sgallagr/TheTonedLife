document.querySelectorAll('.ttl-video-facade').forEach(function (el) {
  function onKey(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } }
  function play() {
    var id = el.getAttribute('data-video');
    var title = el.getAttribute('data-title') || 'Video';
    el.removeEventListener('click', play);
    el.removeEventListener('keydown', onKey);
    el.removeAttribute('role');
    el.removeAttribute('tabindex');
    el.removeAttribute('aria-label');
    el.style.cursor = 'default';
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1" title="' + title + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    var f = el.querySelector('iframe');
    if (f) { f.focus(); }
  }
  el.addEventListener('click', play);
  el.addEventListener('keydown', onKey);
});
