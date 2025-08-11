https://swissnatcoll.hp.gbif-staging.org/en/data-aggregator-about/
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
A data aggregator is a **tool that combines data from different sources in order to build a coherent dataset** that can be used for data processing, data publishing, and respect the [FAIR principles](https://www.go-fair.org/fair-principles/){:target="_blank"}.
<br>
**DAGI is a swiss data aggregator application built to upload and enrich data from the natural history institutions and collections of Switzerland and to publish datasets on [GBIF.org](https://www.gbif.org/){:target="_blank"}**. Using this tool facilitates the visibility and publication of the swiss natural history data. With the use of a **versioning system** and a **changelog**, the data **can be easily updated** and **re-published in an up-to-date state**. The development of this tool provides the opportunity to homogenize data across the Swiss institutions and automatise many time-consuming processes, as well as improve the mobilisation of the natural history community.
## Who is in charge of DAGI?
DAGI is currently under the management of the GBIF Swiss Node ([GBIF.ch](https://www.gbif.org/country/CH/summary){:target="_blank"}), affiliated to the InfoSpecies data center Info fauna ([infofauna.ch](https://www.infofauna.ch/fr#gsc.tab=0){:target="_blank"}).
<br>
For questions regarding DAGI, please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch). We will be happy to provide you answers and support or address you to the correct person.
<br>
![DAGI, global overview](/assets/images/GraphsDiagrams/DAGI_largeOverview.png "DAGI, global overview")
<br>
## Who is DAGI for?
DAGI's **main users are the swiss natural history institution's staff** in charge of managing and working with the natural history collections (e.g. curators, scientific collaborators, people appointed by the institution). The **institutions concerned are the ones registered in the Global Registry of Scientific Collections** ([GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"})
## How was DAGI developed?
The DAGI platform has been developed by a broad group of stakeholders over the course of four years.
SwissCollNet steering board and board of experts : contract with developers, alignement with SwissCollNet initiative objectives, beta testers organisation
GBIFch data manager and staff : Product owner, preparation phase with surveys, needs enquiries, establishment of conventions, testing, AGIL planning
ZEBBRA : technical development of the tool
One of the main goals of the project was to make the whole app open-source. Since July 2025, any one can view the code and suggest changes and improvements on the [GitHub repository of DAGI](https://github.com/zebbra/data_aggregator/tree/develop){:target="_blank"}.
<br>
Another main goal of the project was to have a modular development, allowing future developments to be simply added to the current features without impacting the previous elements already in use.
## What are the key features in DAGI
The first development of DAGI, V1, financed by SwissCollNet had three key modules : import of data (including mapping and uploading images), encoding and enrichment of the data and publication on GBIF.
<br>
As the database is linked to GRSciColl, the update of metadata about the collections and institutions is automatised through an API.
{% include back-to-top.html %}
