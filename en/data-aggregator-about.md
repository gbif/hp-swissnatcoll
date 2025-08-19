---
layout: compose
title: DAGI
background:  "{{ site.data.images.DAGIAbout.src }}"
imageLicense: "{{ site.data.images.DAGIAbout.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
toc: true
composition:
  - type: heroImage
  - type: pageMarkdown
---

## What is a data aggregator?

A data aggregator is a tool that collects data from multiple sources and integrates it into a coherent dataset, which can then be used for processing, publishing, and ensuring compliance with the [FAIR principles](https://www.go-fair.org/fair-principles/){:target="_blank"}.

<br>

DAGI is a Swiss data aggregator for biological and paleontological specimen data. It aggregates, standardizes and enriches data supplied by natural history institutions, and publishes them on [GBIF.org](https://www.gbif.org/){:target="_blank"}. By automating the time-consuming processes of encoding and validation, DAGI makes it easier to publish and update data, enhancing the use and visibility of Swiss collections.

## Who is DAGI for?

DAGI’s main users are curators and scientific collaborators from Swiss natural history institutions registered in the Global Registry of Scientific Collections ([GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"}).

## Who is in charge of DAGI?

DAGI is currently managed by the GBIF Swiss Node ([GBIF.ch](https://www.gbif.org/country/CH/summary){:target="_blank"}), affiliated to the InfoSpecies data center Info fauna ([infofauna.ch](https://www.infofauna.ch/fr#gsc.tab=0){:target="_blank"}).

<br>

For questions regarding DAGI, please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch). We will be happy to provide you answers and support or address you to the correct person.

<br>

One of the project’s main goals was to make the entire application open-source. Since July 2025, anyone can view the code on the [GitHub repository of DAGI](https://github.com/zebbra/data_aggregator/tree/develop){:target="_blank"} and suggests changes or improvements. Another key goal was to ensure a modular design, allowing new features to be added easily without disrupting the existing functionality already in use.
This project is licensed under the GNU Affero General Public License v3.0. The details can be found on the GitHub repository.

{% include back-to-top.html %}
