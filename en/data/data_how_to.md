---
layout: heroImage
title: Swiss Natural History collection data
description: How to search, find, download, cite the data
background: /assets/images/placeholders/moss.jpg
imageLicense: |
  None for this image, but it would normally go here. Markdown is allowed.
height: 50vh
toc: true
permalink: /en/data_how_to
---

# What data can be found here
The data accessible on this hosted portal has been **provided by the [swiss natural history institutions](https://svnhc.hp.gbif-staging.org/institution/search)** and is **hosted on [GBIF.org](https://www.gbif.org/)**.

There are currently 3 entry points to the data:
1. [Occurrences](https://svnhc.hp.gbif-staging.org/occurrence/search), each element of the table is a specimen of a natural history institution. This view is based on the [GBIF.org occurrence table](https://www.gbif.org/occurrence/search?occurrence_status=present&q=) but shows only specimens held in the swiss natural history institutions.
2. [Collections](https://svnhc.hp.gbif-staging.org/collection/search), each element of the table is a collection of a natural history institution. This view is based on the [GBIF Registry - GRSciColl collections](https://registry.gbif.org/collection/search).
3. [Institutions](https://svnhc.hp.gbif-staging.org/institution/search), each element of the table is a swiss natural history institution. This view is based on the [GBIF Registry - GRSciColl institutions](https://registry.gbif.org/institution/search). A map of Switzerland with all registered natural history instutions is also displayed

# How is the data displayed on the SVNHC portal?
The data present on the SVNHC portal can be displayed as such:
- a **table** where each line corresponds to a museum specimen (or a collection or an institution , depending on the tab selected and each column corresponds to **all the information we have about a specific specimen/collection/institution**.

- a **map** where each point corresponds to a **georeferenced museum specimen**. By clicking on it, a small window opens, and by clicking on the small window, the information panel of the occurrence appears on the right side of the screen. The metadata is grouped in categories, which have their own fields (Summary, Record, Taxon, Location, Occurrence, Event, Identification, Other and Citation). These categories and fields are based on the standard [Darwin Core](https://dwc.tdwg.org/).

- a **gallery** with pictures of the specimens.

- a **dashboard** (only in the occurrence page) where you can choose to synthetize the data in plot or lists. Each dashboard element's title is named after the data field name considered.

# Can I download the data?
On the [occurrences page](https://svnhc.hp.gbif-staging.org/occurrence/search), the last tab on top is [**Download**](https://svnhc.hp.gbif-staging.org/occurrence/search?view=DOWNLOAD). By clicking on it, you are redirected to GBIF.org download page. Note that all applicated filters on the SVNHC data page are transmitted to GBIF.org, allowing you to dowload your data of interest easily.

⚠️The link is quite slow to open and still sending towards "https://www.gbif-staging.org/....". At the moment, by simply removing "-staging" in the url on your browser, you can access the requested GBIF dowload page.

# Can I filter the data?
To filter the data in the Occurrence table presentation, you have a highlighted selected set (listed here below) and by clicking on the "More" button, you have access to more available filters

| Fields | Definition |
| :------------- |:-------------|
| Scientific name       | The scientific name as it appears in the GBIF backbone taxonomy. These names are normalized to ease search across datasets. It is possible that an originally-provided name might be misinterpreted or unknown. To search the names as provided use the "Verbatim scientific name" filter.     |
| Institution      | The name of the institution having custody of the object(s) or information referred to in the record.     |
| Recorded by (leg.)      | The names of the person, people, groups or organizations responsible for recording the original occurrence.     |
| Year      | The year in which the event occurred.     |
| State province      | The name of the next administrative region smaller than country in which the location occurs.     |
| Administrative area      | The name of any administrative area from [GADM.org](https://gadm.org/) determined during record processing.     |
| Elevation      | The distance above a vertical reference point (usually mean sea level or a geoid) in metres.     |
| Issues and flags      | The types of issues or flags of potential interest discovered in processing the data.     |
