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
<br>
The SwissNatColl portal provides open access to data on biological and paleontological specimens curated in Swiss institutions. It also offers a direct link to the registry of collections and institutions where these specimens are preserved.
To help you navigate the portal, take a look at our short tutorial: [How to find data?](/en/how-to-find-data){:target="_blank"}

# History

The SwissNatColl portal was developed within the [SwissCollNet](https://swisscollnet.scnat.ch/en){:target="_blank"} initiative (2021-2026), a national effort led by the Swiss Academy of Sciences ([SCNAT](https://scnat.ch/en){:target="_blank"}), dedicated to mobilising and providing open access to specimen data from Swiss natural history collections housed in more than 30 institutions across 20 cantons.
<br>
SwissCollNet supported 68 large-scale inter-institutional and inter-cantonal projects that modernised and digitised over one million specimens. It brought together a wide network of people and institutions, strengthening connections and fostering knowledge sharing. A major outcome of this initiative, carried out in collaboration with several key stakeholders, was the creation of a data infrastructure comprising two components:

- The **data aggregator** called [DAGI](/en/aggregating-data/){:target="_blank"}, which centralises, standardises, enriches and publishes data from Swiss collections.
- The **SwissNatColl portal**, which provides easy and free access to the published specimen data via a single, user‑friendly interface.

Together, the DAGI aggregator and the SwissNatColl portal constitute a national data infrastructure that enhances the visibility, collaboration and research on Swiss collections.
<br><br>

<head>
  <style>
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      background: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
      margin: 15% auto;
      display: block;
      max-width: 1000px;
    }
  </style>
</head>
<body>
  <!-- Button to open the modal -->
  <button onclick="document.getElementById('myModal').style.display='block'">View GIF</button>
  <!-- The Modal -->
  <div id="myModal" class="modal" onclick="this.style.display='none'">
    <img class="modal-content" src="https://cscfetkarch.sharepoint.com/:i:/s/infofauna_extern/EbjpkjzO0bVImDEL6wYRcWABE9NPxXXO_H_VzFhazBc8wA?e=1xMnV8">
  </div>
</body>

{% include back-to-top.html %}
