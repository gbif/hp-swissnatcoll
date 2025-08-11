---
layout: heroImage
title: Data
background: "{{ site.data.images.findData.src }}"
imageLicense: "{{ site.data.images.findData.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
toc: true
permalink: /en/how-to-find-data
---

# What data can be found on the SwissNatColl portal?
The data accessible on this hosted portal has been **provided by the [swiss natural history institutions](/institution/search){:target="_blank"}** and **published on [GBIF.org](https://www.gbif.org/){:target="_blank"}** through the **swiss data aggregator [DAGI](/en/data-aggregator-about/){:target="_blank"}**.

There are currently 3 entry points to the data:
1. 📍[Specimens](/occurrence/search){:target="_blank"}, each element displayed is a specimen of a natural history institution. The main view is based on the [GBIF.org occurrence map](https://www.gbif.org/occurrence/map?occurrence_status=present){:target="_blank"}.

2. 🗃️[Collections](/collection/search), each element of the page is a collection of a natural history institution. This view is based on the [Global REgistry of Scientific Collections (GRSciColl collections)](https://scientific-collections.gbif.org/collection/search). The elements are ordered by size of the collection (number of specimens).

3. 🏛️[Institutions](/institution/search), each element of the page is a swiss natural history institution who took part of the SwissCollNet initiative network. This view is based on the [Global REgistry of Scientific Collections (GRSciColl institutions)](https://scientific-collections.gbif.org/institution/search). The elements are ordered by size of the institution (number of specimens). A map of Switzerland with all registered natural history instutions is also displayed.

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
    <a href="/occurrence/search" style="text-decoration: none;">
      <button style="padding: 10px 40px; font-size: 24px; background-color: transparent; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/swissMuseumsImages/DSC_5509.jpg" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
        
        <!-- Text below -->
        Specimens
      </button>
    </a>
    <a href="/collection/search" style="text-decoration: none;">
      <button style="padding: 10px 40px; font-size: 24px; background-color: transparent; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/swissMuseumsImages/DSCN3320.JPG" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
        
        <!-- Text below -->
        Collections
      </button>
    </a>
    <a href="/institution/search" style="text-decoration: none;">
      <button style="padding: 10px 40px; font-size: 24px; background-color: transparent; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/swissMuseumsImages/NHM_Basel_onlineimage.jpeg" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
        
        <!-- Text below -->
        Institutions
      </button>
    </a>
</div>

<br><br>

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
    <a href="/occurrence/search" style="text-decoration: none;">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid {{ site.data.colors.siteColor.background }}; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/swissMuseumsImages/DSC_5509.jpg" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
        
        <!-- Text below -->
        Specimens
      </button>
    </a>
    <a href="/collection/search" style="text-decoration: none;">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid {{ site.data.colors.siteColor.background }}; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/swissMuseumsImages/DSCN3320.JPG" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
        
        <!-- Text below -->
        Collections
      </button>
    </a>
    <a href="/institution/search" style="text-decoration: none;">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid {{ site.data.colors.siteColor.background }}; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/swissMuseumsImages/NHM_Basel_onlineimage.jpeg" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
        
        <!-- Text below -->
        Institutions
      </button>
    </a>
</div>

<br><br>

<table style="border-collapse: collapse; width: 100%; text-align: center;">
  <tr>
    <td style="border: none;">
      <a href="/occurrence/search" style="text-decoration: none;">
        <button style="padding: 10px 40px; font-size: 24px; border: 2px solid {{ site.data.colors.siteColor.background }}; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
                onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
                onmouseout="this.style.color='#333';">
          <img src="/assets/images/swissMuseumsImages/DSC_5509.jpg" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
          Specimens
        </button>
      </a>
    </td>
    <td style="border: none; vertical-align: top; text-align: left;">each element displayed is a specimen of a natural history institution. The main view is based on the <a href="https://www.gbif.org/occurrence/map?occurrence_status=present">GBIF.org occurrence map</a>.</td>
</tr>
<tr>
    <td style="border: none;">
      <a href="/institution/search" style="text-decoration: none;">
        <button style="padding: 10px 40px; font-size: 24px; border: 2px solid {{ site.data.colors.siteColor.background }}; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
                onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
                onmouseout="this.style.color='#333';">
          <img src="/assets/images/swissMuseumsImages/NHM_Basel_onlineimage.jpeg" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
          Institutions
        </button>
      </a>
    </td>
    <td style="border: none; vertical-align: top; text-align: left;">each element of the page is a collection of a natural history institution. This view is based on the Global REgistry of Scientific Collections (<a href="https://scientific-collections.gbif.org/collection/search">GRSciColl collections</a>). The elements are ordered by size of the collection (number of specimens).</td>
  </tr>
  <tr>
    <td style="border: none;">
      <a href="/collection/search" style="text-decoration: none;">
        <button style="padding: 10px 40px; font-size: 24px; border: 2px solid {{ site.data.colors.siteColor.background }}; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
                onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
                onmouseout="this.style.color='#333';">
          <img src="/assets/images/swissMuseumsImages/DSCN3320.JPG" alt="icon" style="width: 120px; height: 120px; border-radius: 50%;">
          Collections
        </button>
      </a>
    </td>
    <td style="border: none; vertical-align: top; text-align: left;">each element of the page is a swiss natural history institution who took part of the SwissCollNet initiative network. This view is based on the Global REgistry of Scientific Collections (<a href="https://scientific-collections.gbif.org/institution/search">GRSciColl institutions</a>). The elements are ordered by size of the institution (number of specimens). A map of Switzerland with all registered natural history instutions is also displayed.</td>
  </tr>
</table>

# How is the data displayed?
The data present on the SwissNatColl portal can be displayed as such:
- a **table** where each line corresponds to a museum specimen and each column corresponds to **the data that has been published about a given specimen**.

- a **map** where each point corresponds to a **georeferenced museum specimen**. By clicking on it, a small window opens, and by clicking on the small window, the information panel of the occurrence appears on the right side of the screen. The metadata is grouped in categories, which have their own fields (Summary, Record, Taxon, Location, Occurrence, Event, Identification, Other and Citation). These categories and fields are based on the standard [Darwin Core](https://dwc.tdwg.org/).

- a **gallery** with pictures associated to the specimens.

- a **dashboard** (only in the occurrence page) where you can choose to synthetize the data in plots or lists. Each dashboard element's title is named after the data field name considered.

# Can I download the data?
On the [specimens page](/occurrence/search), the last tab on top is [**Download**](/occurrence/search?view=DOWNLOAD). By clicking on it, you are redirected to GBIF.org download page. Note that all applicated filters on the SwissNatColl data page are transmitted to GBIF.org, allowing you to dowload your data of interest easily.

# Can I filter the data?
To filter the data in the Specimens table presentation, you have a highlighted selected set (listed here below) and by clicking on the "More" button, you have access to more available filters.

| Attributes | Definition |
| :------------- | :------------- |
| _Scientific name_       | The scientific name as it appears in the GBIF backbone taxonomy. These names are normalized to ease search across datasets. It is possible that an originally-provided name might be misinterpreted or unknown. To search the names as provided use the "Verbatim scientific name" filter.     |
| _Institution_      | The name of the institution having custody of the object(s) or information referred to in the record.     |
| _Recorded by (leg.)_      | The names of the person, people, groups or organizations responsible for recording the original occurrence.     |
| _Year_      | The year in which the event occurred.     |
| _State province_      | The name of the next administrative region smaller than country in which the location occurs.     |
| _Administrative area_      | The name of any administrative area from [GADM.org](https://gadm.org/) determined during record processing.     |
| _Elevation_      | The distance above a vertical reference point (usually mean sea level or a geoid) in metres.     |
| _Issues and flags_      | The types of issues or flags of potential interest discovered in processing the data.     |

# Is the data exactly the same as in the institution databases?

No, the data published on GBIF by DAGI and displayed here has been going through various encodings, enrichments and validation processes. For most of it, it may have not changed much, but for threatened and sensitive species, some data accuracy have been reduced to a grid-cell level or a higher taxonomy rank before publishing.

{% include back-to-top.html %}
