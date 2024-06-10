---
layout: base
title: Data Aggregator
description: Swiss Data Aggregator and tutorials
background: /assets/images/placeholders/moss.jpg
imageLicense: |
  None for this image, but it would normally go here. Markdown is allowed.
height: 70vh
permalink: /data-aggregator
composition:
  - type: pageMarkdown
---
# Swiss Data Aggregator

More than 90% of the specimens curated in Switzerland are biological or paleontological. For the aggregation and publication of digital information on these specimens, SwissCollNet will collaborate with InfoSpecies and build on the already existing data infrastructure of the Swiss node of GBIF.

InfoSpecies is the umbrella organisation of the national data centers and coordination offices for species promotion. One of the main goals of InfoSpecies is the provision, management and diffusion of species records, which includes natural history collection data.

The long-term objective is to achieve automatised data transfer of collection data to the national aggregator and publication of data on national and international online portals as well as an automatised update of data records.

# Do I have to upload my entire database fields into the Data Aggregator?
There is no need to upload all fields of your database into the Data Aggregator. You can choose to upload only the most important fields. They are the ones that will be available on the SVNHC portal in the Data pages.

To help you select your field, here is an empty csv file with the most important Darwin Core terms required for GBIF (see: [Data quality requirements: Occurrence datasets](https://www.gbif.org/fr/data-quality-requirements-occurrences)). You can put your data in this file and use it for the upload.
<html lang="en">
<body>
    <a href="https://raw.githubusercontent.com/gbif/hp-svnhc/master/downloadFiles/DarwinCoreSelected.csv" download>
        <button>Download CSV</button>
    </a>
</body>
</html>

# titel 2

## Big titel ?

Source : [Data aggregation in Switzerland](https://swisscollnet.scnat.ch/fr/collection_data/data_aggregation).

{% assign pageNavigationContent = site.data %}
{% if page.sideNavigation %}
  {% assign entries = page.sideNavigation | split: "." %}
  {% for entry in entries %}
    {% assign pageNavigationContent = pageNavigationContent[entry] %}
  {% endfor %}
{% endif %}

<div class="documentation" id="documentation">
  <a
    role="button"
    id="sidebarBurger"
    class="sidebar-burger navbar-burger burger menu-toggle"
    aria-label="menu"
    aria-expanded="false"
    data-target="documentation"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
  <aside id="pageNavbar" class="documentation-sidebar pageNavbar menu">
    {% if page.sideNavigation %}
      {% for group in pageNavigationContent %}
        {% if group.grouptitle %}
          <p class="menu-label">{{ group.grouptitle }}</p>
        {% endif %}
        {% include navlist.html tree=group.content %}
      {% endfor %}
    {% else %}
      {{ "No site navigation defined. Make sure to add `sideNavigation: sideNavigation.guides` or similar to your front matter describing where in the `_data` your nav definition is" | markdownify }}
    {% endif %}
  </aside>
  <div class="documentation-content">
    {% assign composition = page.composition | default: layout.composition %}
    {% include composition.html composition=composition %}
  </div>
</div>
