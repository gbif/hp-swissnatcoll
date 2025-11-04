---
layout: compose
permalink: /en/drafts

# ====================================================================================
# TITLE PART OF THE HOMEPAGE
# ====================================================================================
title: "Swiss Natural<br>History Collections"
description: "_Discover the Treasures Curated in Switzerland_"
background:  "/assets/images/Illustrations_CochetA/sketch-bandeaux-general04.png"
imageLicense: "{{ site.data.images.home.caption }}"
#parallax: true
overlayColor: transparent # OPTIONAL: The default it to slightly darken the image. Set to "transparent" to disable filter. Example value: #00000055
hasBlackText: true
hasTextShadow: true
#hasBlackText: "{{ site.data.images.home.colorText }}"   # OPTIONAL - default is black. Depending on your background image is can be useful to change text color

height: 90vh

# ====================================================================================
# WHOLE STRUCTURE OF THE HOMEPAGE
# top banner (with title)
# stats part
# thematic feature coded in a yml file
# 2-columns splitted part
# ====================================================================================
composition:
  - type: heroImage
  - type: blank
    data: video.scn-movie
  - type: markdown
---

# Navigation

{% include back-to-top.html %}


# Swiss Collections Go Digital

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 10px;">
  <div style="max-width: 900px; font-size: 22px; line-height: 1.6; color: #333;">
    <p>
      Watch a 5-min film to discover the SwissCollNet initiative.<br>
    </p>
  </div>

  <!-- Conteneur de la vidéo -->
  <div style="
      margin-top: 10px;
      display: block;
      width: 80%;
      max-width: 900px;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      border: 3px solid #eee;
    ">
    <iframe
      id="video-frame"
      src="https://www.youtube.com/embed/KgHyJqWjLvo"
      title="SwissCollNet film"
      style="width: 100%; height: 100%; border: 0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>

  <div>
    <p style="font-size: 18px;">
      <i>Languages available:</i>
    </p>
  </div>

  <div id="language-selector" style="margin-top: 10px; margin-bottom: 20px; font-size: 18px; align-items: center;">
    <label style="margin: 0 10px; cursor: pointer;">
      <input type="radio" name="lang" value="EN" checked> <img src="https://hatscripts.github.io/circle-flags/flags/uk.svg" width="13" height="13"> English
    </label>
    <label style="margin: 0 10px; cursor: pointer;">
      <input type="radio" name="lang" value="DE"> <img src="https://hatscripts.github.io/circle-flags/flags/de.svg" width="13" height="13"> Deutsch
    </label>
    <label style="margin: 0 10px; cursor: pointer;">
      <input type="radio" name="lang" value="FR"> <img src="https://hatscripts.github.io/circle-flags/flags/fr.svg" width="13" height="13"> Français
    </label>
    <label style="margin: 0 10px; cursor: pointer;">
      <input type="radio" name="lang" value="IT"> <img src="https://hatscripts.github.io/circle-flags/flags/it.svg" width="13" height="13"> Italiano
    </label>
  </div>

  <script>
    const videoLinks = {
      EN: "https://www.youtube.com/embed/KgHyJqWjLvo",
      DE: "https://www.youtube.com/embed/4WfiPhRb_K4",
      FR: "https://www.youtube.com/embed/_ZlxmIIvjWw",
      IT: "https://www.youtube.com/embed/ubRLuPSKwR0"
    };

    document.querySelectorAll('input[name="lang"]').forEach(radio => {
      radio.addEventListener('change', e => {
        const iframe = document.getElementById('video-frame');
        iframe.src = videoLinks[e.target.value];
      });
    });
  </script>
</div>
