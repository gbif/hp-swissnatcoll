---
# https://swissnatcoll.hp.gbif-staging.org/en/aggregating-data
# https://github.com/gbif/hp-swissnatcoll/blob/59811d0df3acd4875c98c834c3d021482d21a7f6/en/aggregating-data.md
layout: compose
title: Aggregating Data 
background:  "{{ site.data.images.aggregatingData.src }}"
imageLicense: "{{ site.data.images.aggregatingData.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
toc: true
composition:
  - type: heroImage
  - type: pageMarkdown
---

# What is a Data Aggregator?

A data aggregator is a tool that collects data from multiple, heterogeneous sources and integrates them into a coherent, aggregated dataset, which can then be used for processing, publishing, and ensuring compliance with the [FAIR principles](https://www.go-fair.org/fair-principles/){:target="_blank"}.

# DAGI

DAGI is the Swiss data aggregator for biological and paleontological specimen data. Designed as a collaborative tool for Swiss natural history institutions, it facilitates dataflows between collections by aggregating, standardising, and enriching the specimen data they supply and host.

<br><br>
<div style="display: flex; justify-content: center; align-items: center; gap: 30px;">
  <a href="https://dagi.gbif.ch/sign-in" style="text-decoration: none;">
    <button
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 24px;
        font-size: 24px;
        border: 2px solid {{ site.data.colors.siteColor.background }};
        border-radius: 4px;
        background-color: #E2EBFF;
        color: #333;
        cursor: pointer;
        text-align: center;
      "
      onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
      onmouseout="this.style.color='#333';"
    >
      <img src="https://dagi.gbif.ch/images/logo-light.png" alt="DAGI logo" style="height: 50px; width: auto;">
      🔒 Log-in to DAGI
    </button>
  </a>
</div>

_For questions regarding DAGI, please send an email to [dagi@gbif.ch](mailto:dagi@gbif.ch). We will be happy to provide you answers and support or address you to the correct person._

# Target Audience

DAGI’s main users are curators and scientific collaborators from Swiss natural history institutions registered in the Global Registry of Scientific Collections ([GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"}).

# Managing Team

DAGI is currently managed by the GBIF Swiss Node ([GBIF.ch](https://www.gbif.org/country/CH/summary){:target="_blank"}), affiliated to the InfoSpecies data center Info fauna ([infofauna.ch](https://www.infofauna.ch/fr#gsc.tab=0){:target="_blank"}).

# Open-source

The DAGI application is open-source, licensed under the GNU Affero General Public License v3.0.. The code is published on [GitHub repository of DAGI](https://github.com/zebbra/data_aggregator/tree/develop){:target="_blank"}, where changes and improvements can be suggested. 

{% include back-to-top.html %}
