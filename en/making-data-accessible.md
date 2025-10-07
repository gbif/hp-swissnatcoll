---
# https://swissnatcoll.hp.gbif-staging.org/en/making-data-accessible/
# https://github.com/gbif/hp-swissnatcoll/blob/d3b20530d56554034de4553bb57fd54e5b67cff4/en/making-data-accessible.md
layout: compose
title: Making Data Accessible
background:  "{{ site.data.images.accessData.src }}"
imageLicense: "{{ site.data.images.accessData.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
composition:
  - type: heroImage
  - type: pageMarkdown
---

The SwissCollNet initiative has established a common framework to mobilise specimen data from local institutions to global platforms. The process unfolds in four stages:

# 1. Curation and Digitisation of Collections

Swiss natural history institutions preserve collections, ensure their accessibility and promote their use for science and society. Most of them have adopted the Strategy for natural history collections in Switzerland 2025-2035 to unlock the full potential of collections.

To make data accessible, the first step is digitisation — the systematic recording of specimen information in a database. This process ranges from cataloguing basic metadata (collector, location, date) to creating high-resolution images or 3D models, and linking external data such as genetic sequences. Digitisation is a continuous process, as taxonomic classifications change over time and as additional information, such as genetic sequence data, are linked to the original specimen data ([Frick & Greeff, 2021](https://swisscollnet.scnat.ch/en/news_and_publications/publications/uuid/i/c911ed14-87ec-5d12-afb0-a34438f414a9-Handbook_on_natural_history_collections_management){:target="_blank"}).

# 2. Aggregation and Enrichment with DAGI

Once digitised, specimen records are transferred from local institutions (museums, botanical gardens, universities) to national data nodes. DAGI (Data Aggregator for Natural History Collections) is the Swiss aggregator for biological and paleontological specimen data. It aggregates, standardizes and enriches data supplied by natural history institutions. By automating the time-consuming processes of encoding and validation, DAGI makes it easier to publish and update data, while ensuring compliance with the [FAIR principles](https://www.go-fair.org/fair-principles/){:target="_blank"} (Findable, Accessible, Interoperable, Reusable).

Data harmonisation with common standards (for example [Darwin Core](https://dwc.tdwg.org/){:target="_blank"} is a crucial step, because records from different institutions can be combined and compared consistently.

# 3. Integration into the SwissNatColl Portal

Standardised data are openly available through the SwissNatColl portal, the central entry point for natural history data in Switzerland. Published specimen data can be corrected, re-identified, or enriched over time.

Users can search across institutions, visualise records, filter datasets, and download information through a user-friendly interface.

# 4. Global Accessibility

Swiss specimen data are simultaneously shared with the international platform [GBIF.org](https://www.gbif.org/){:target="_blank"} (Global Biodiversity Information Facility). This ensures worlwide access, supporting research, conservation, education, and policy making, while increasing the global visibility of Swiss collections.

{% include back-to-top.html %}
