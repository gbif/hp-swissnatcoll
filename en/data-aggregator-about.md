---
# https://swissnatcoll.hp.gbif-staging.org/en/data-aggregator-about/
layout: compose
title: Using DAGI to Publish Data 
background:  "{{ site.data.images.aboutDAGI.src }}"
imageLicense: "{{ site.data.images.aboutDAGI.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
toc: true
composition:
  - type: heroImage
  - type: pageMarkdown
---

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

<br><br>

DAGI is the Swiss data aggregator for biological and paleontological specimen data. Designed as a collaborative tool for Swiss natural history institutions, it facilitates dataflows between collections by aggregating, standardising, and enriching the specimen data they supply and host. Through a process of controlled standardisation, DAGI ensures data consistency and interoperability across institutions, thereby improving data quality and usability. By supporting facilitated publication of datasets on [GBIF.org](https://www.gbif.org/){:target="_blank"}, DAGI contributes to increased visibility of Swiss natural history collections on an international scale. Moreover, by providing a shared infrastructure and common data framework, DAGI promotes increased collaboration among institutions, enabling them to collectively advance research, curation, and public access to biodiversity information.

## What is a data aggregator?

A data aggregator is a tool that collects data from multiple and heterogeneous sources and integrates them into a coherent aggregated dataset, which can then be used for research, processing, publishing. Aggregation ensures compliance with the "Interoperability" aspect of the [FAIR principles](https://www.go-fair.org/fair-principles/){:target="_blank"}.

# Target Audience

DAGI’s main users are curators and scientific collaborators from Swiss natural history institutions registered in the Global Registry of Scientific Collections ([GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"}).

# Managing Team
DAGI is currently managed by the GBIF Swiss Node ([GBIF.ch](https://www.gbif.org/country/CH/summary){:target="_blank"}), affiliated to the InfoSpecies data center Info fauna ([infofauna.ch](https://www.infofauna.ch/fr#gsc.tab=0){:target="_blank"}).
_For questions regarding DAGI, please send an email to [contact@gbif.ch](mailto:contact@gbif.ch). We will be happy to provide you answers and support or address you to the correct person._

# Open-source Application

One of the project’s main goals was to make the entire application open-source. Since July 2025, anyone can view the code on the [GitHub repository of DAGI](https://github.com/zebbra/data_aggregator/tree/develop){:target="_blank"} and suggest changes or improvements. Another key goal was to ensure a modular design, allowing new features to be added easily without disrupting the existing functionality already in use.
This project is licensed under the GNU Affero General Public License v3.0.

{% include back-to-top.html %}

