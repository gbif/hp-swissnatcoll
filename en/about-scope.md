---
# https://swissnatcoll.hp.gbif-staging.org/en/about-scope/
# https://github.com/gbif/hp-swissnatcoll/blob/6984d6204e25f6245899fa62ba2cb9ed688785c6/en/about-scope.md
lang-ref: about
layout: compose
title: Scope
background:  "{{ site.data.images.aboutScope.src }}"
imageLicense: "{{ site.data.images.aboutScope.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
composition:
  - type: heroImage
  - type: pageMarkdown
---
[Switzerland’s natural history collections](/collection/search){:target="_blank"} hold more than 60 million specimens, spanning a wide range of disciplines (zoology, botany, mycology, paleontology, geology, and anthropology). About one third of these specimens originate from Switzerland, while the remaining two-thirds come from around the world. This shared heritage, built over more than 300 years, preserves a unique record of biological and geological diversity and serves as an invaluable resource for science and society.


The SwissNatColl portal provides open access to data on biological and paleontological specimens curated in Swiss institutions. It also offers a direct link to the registry of collections and institutions where these specimens are preserved.
To help you navigate the portal, take a look at our short tutorial: [How to find data?](/en/how-to-find-data){:target="_blank"}

# History

The SwissNatColl portal was developed within the [SwissCollNet](https://swisscollnet.scnat.ch/en){:target="_blank"} initiative (2021-2026), a national effort led by the Swiss Academy of Sciences ([SCNAT](https://scnat.ch/en){:target="_blank"}), dedicated to mobilising and providing open access to specimen data from Swiss natural history collections housed in more than 30 institutions across 20 cantons.


SwissCollNet supported 68 large-scale inter-institutional and inter-cantonal projects that modernised and digitised over one million specimens. It brought together a wide network of people and institutions, strengthening connections and fostering knowledge sharing. A major outcome of this initiative, carried out in collaboration with several key stakeholders, was the creation of a data infrastructure comprising two components:

- The **data aggregator** called [DAGI](/en/aggregating-data/){:target="_blank"}, which centralises, standardises, enriches and publishes data from Swiss collections.
- The **SwissNatColl portal**, which provides easy and free access to the published specimen data via a single, user‑friendly interface.

Together, the DAGI aggregator and the SwissNatColl portal constitute a national data infrastructure that enhances the visibility, collaboration and research on Swiss collections.
<br><br>

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
  <div style="max-width: 900px; font-size: 22px; line-height: 1.6; color: #333;">
    <p>
      Watch a 5-min film to discover the SwissCollNet initiative:<br>
    </p>
  </div>

  <!-- Conteneur de la vidéo -->
  <div style="
      margin-top: 10px;
      display: block;
      width: 100%;
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

{% include back-to-top.html %}
