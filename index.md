---
title: "The Toned Life - 
\n\nWhole Health for Your Whole Life!"
layout: splash
header:
  overlay_color: "#0494cc"

feature_row2:
  - image_path: /assets/images/2018+pic+Cathleen+MSv5.jpg
    title: "Certified Coach & Instructor"
    excerpt: "\n\nStem Cell Activation
    \n\nExercise Classes
    \n\nInfrared Sauna and more
    \n\nCoaching + Counseling
    \n\nEyesight Improvement
    \n\nFinancial Peace
    \n\nDNA Tests and Coaching"
#    url: "https://lifewave.com/cathleengallagher"
#    btn_label: "Learn more"
#    btn_class: "btn--primary"
# feature_row3:
#  - image_path: /assets/images/woman+on+beach.jpg
#    title: "Experience the freedom of Finanical Peace with coaching"
#    excerpt: "**Your first 15-minute consultation is FREE**"
---

{% include feature_row id="feature_row2" type="left" %}

<div class="ttl-video-facade" data-video="TDenAjG0ikw" role="button" tabindex="0" aria-label="Play video: What Is the Bates Method? An Interview with Cathleen Gallagher" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin:1em 0;cursor:pointer;background:#000;border-radius:4px;">
  <img src="/assets/images/woman+on+beach.jpg" alt="What Is the Bates Method? An Interview with Cathleen Gallagher" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:68px;height:48px;background:rgba(0,0,0,.65);border-radius:12px;"></div>
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin-left:4px;width:0;height:0;border-style:solid;border-width:11px 0 11px 19px;border-color:transparent transparent transparent #fff;"></div>
</div>

<script>
document.querySelectorAll('.ttl-video-facade').forEach(function(el){
  function play(){
    var id = el.getAttribute('data-video');
    el.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }
  el.addEventListener('click', play);
  el.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); play(); } });
});
</script>

<!-- {% include feature_row id="feature_row3" type="right" %} -->
