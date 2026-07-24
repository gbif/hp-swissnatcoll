---
layout: compose
title: Biology and <br> Paleontology
permalink: /en/explore-biology-paleontology
background:  "{{ site.data.images.exploreBiolPal.src }}"
imageLicense: "{{ site.data.images.exploreBiolPal.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
composition:
  - type: heroImage
  - type: pageMarkdown
---
# Overview

Biological collections comprise animal, plant, fungal and fossil specimens. Together, biological, archaeobiological and palaeontological collections provide the reference material for describing and naming species, and for understanding their evolutionary history and ecological interactions. They provide a unique resource for investigating past, present and future biodiversity and its patterns on Earth. They also serve as biobanks for preserving the Earth’s organismic and genomic diversity. Beyond taxonomy and systematics, these collections are an invaluable resource for research on field such as climate change, biodiversity conservation, invasive species and sustainable agriculture.


# In Switzerland

In Switzerland, institutions hold nearly 60 million specimens in their biological collections. The SwissNatColl portal therefore provides free access to more than 2 million of them and counting.

You can search specimens across different domains:

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; flex-wrap: wrap; max-width: 800px; margin: auto;">
    <a href="/occurrence/search?view=table&taxonKey=1" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 20px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-zoology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        Zoology
      </button>
    </a>
    <a href="/occurrence/search?view=table&taxonKey=6" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-botany.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        Botany
      </button>
    </a>
    <a href="/occurrence/search?view=table&taxonKey=5" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-mycology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        Mycology
      </button>
    </a>
    <a href="/occurrence/search?view=table&basisOfRecord=FOSSIL_SPECIMEN" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-paleonthology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        Paleontology
      </button>
    </a>
</div>

# Do institutions still have their own catalogues?

Yes, Swiss institutions continue to maintain their own online databases, each offering information about their specific collections. At the same time, the SwissNatColl portal provides a single point of access for searching across collections from participating institutions. The catalogues below are listed for reference.
<br>
<style>
  /* Styles appliqués uniquement à ce tableau */
  table.institutions-catalogues {
    border-collapse: collapse;
    width: 100%;
    max-width: 780px;
    margin: 2rem auto;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, "Segoe UI", Arial, sans-serif;
  }

  table.institutions-catalogues th,
  table.institutions-catalogues td {
    border: 1px solid #E2D1B4;
    padding: 10px 14px;
    text-align: left;
    vertical-align: top;
  }

  table.institutions-catalogues th {
    background: #f4e6cc;
    color: #000000;
    font-weight: 600;
  }

  table.institutions-catalogues .canton-cell {
    white-space: nowrap;
    font-weight: 600;
  }

  table.institutions-catalogues .canton-cell svg {
    vertical-align: middle;
    margin-right: 6px;
    border: 1px solid #ccc;
  }

  table.institutions-catalogues a {
    color: #5770C0;
    text-decoration: underline;
  }
</style>
<div>
  <details style="
    background-color: #E8EBF8;
    border: 1px solid #BCC6E6;
    border-radius: 8px;
    padding: 12px 16px;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    color: #1a1a1a;
  ">
    <summary style="
      cursor: pointer;
      font-weight: 600;
      color: #3E4E86;
      padding: 4px 0;
      outline: none;
    ">
      Institutional catalogues
    </summary>
    <div style="
      margin-top: 10px;
      border-top: 1px solid #BCC6E6;
      padding-top: 10px;
    ">
      <table class="institutions-catalogues">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Online catalogue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Global Genome Biodiversity Network</td>
            <td>
              <a href="https://www.ggbn.org/ggbn_portal/" target="_blank" rel="noopener noreferrer">
                GGBN Database
              </a>
            </td>
          </tr>
          <tr>
            <td>Herbarium of the Botanical Garden of the University of Bern</td>
            <td>
              <a href="https://herbarium-bernense.ch" target="_blank" rel="noopener noreferrer">
                Herbarium Bernense
              </a>
            </td>
          </tr>
          <tr>
            <td rowspan="2">Natural History Museum Bern</td>
            <td>
              <a href="https://www.flickr.com/people/nmbeinvertebrata/" target="_blank" rel="noopener noreferrer">
                Insects, Insekten, Insectes, Insetti!
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://wsc.nmbe.ch/" target="_blank" rel="noopener noreferrer">
                World Spider Catalog
              </a>
            </td>
          </tr>
          <tr>
            <td rowspan="2">Jurassica</td>
            <td>
              <a href="https://collections.jurassica.ch/" target="_blank" rel="noopener noreferrer">
                Jurassica Collections
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.jurassica.ch/fr/Museum/Collections-Museum/Collections-Museum.html#" target="_blank" rel="noopener noreferrer">
                Inventaire des collections
              </a>
            </td>
          </tr>
          <tr>
            <td>ETH Zurich</td>
            <td>
              <a href="https://nahima.ethz.ch/search" target="_blank" rel="noopener noreferrer">
                Database of the natural history collections of the ETH Zurich
              </a>
            </td>
          </tr>
          <tr>
            <td>University of Zurich</td>
            <td>
              <a href="https://www.herbarien.uzh.ch/en/belegsuche.html" target="_blank" rel="noopener noreferrer">
                Herbaria Z+ZT and ZSS
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>
<style>
  /* Styles appliqués uniquement à ce tableau */
  table.institutions-catalogues {
    border-collapse: collapse;
    width: 100%;
    max-width: 780px;
    margin: 1.5rem auto 0.5rem auto;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, "Segoe UI", Arial, sans-serif;
    border: 2px solid #3E4E86;
  }

  table.institutions-catalogues th,
  table.institutions-catalogues td {
    border: 1px solid #3E4E86;
    padding: 10px 14px;
    text-align: left;
    vertical-align: top;
    background: #ffffff;
  }

  table.institutions-catalogues th {
    background: #ffffff;
    color: #3E4E86;
    font-weight: 600;
  }

  table.institutions-catalogues .canton-cell {
    white-space: nowrap;
    font-weight: 600;
  }

  table.institutions-catalogues .canton-cell svg {
    vertical-align: middle;
    margin-right: 6px;
    border: 1px solid #ccc;
  }

  table.institutions-catalogues a {
    color: #5770C0;
    text-decoration: underline;
  }
</style>

{% include back-to-top.html %}
