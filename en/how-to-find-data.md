---
# https://swissnatcoll.hp.gbif-staging.org/en/how-to-find-data
# https://github.com/gbif/hp-swissnatcoll/blob/0d40438628db0538f23740e02c50051f2faf1dcc/en/how-to-find-data.md
layout: heroImage
title: How to Find Data?
background: "{{ site.data.images.findData.src }}"
imageLicense: "{{ site.data.images.findData.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
toc: true
permalink: /en/how-to-find-data
---

# Searching Data

Three levels of information are available:

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; flex-wrap: wrap; max-width: 800px; margin: auto;">
    <a href="/occurrence/search" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-specimens.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Specimens
      </button>
    </a>
    <a href="/collection/search" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-collections.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Collections
      </button>
    </a>
    <a href="/institution/search" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-institutions.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Institutions
      </button>
    </a>
</div>

<br><br>

You can search biological and paleontological specimen data across different domains:

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; flex-wrap: wrap; max-width: 800px; margin: auto;">
    <a href="/occurrence/search?view=table&taxonKey=1" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 20px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-zoology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Zoology
      </button>
    </a>
    <a href="/occurrence/search?view=table&taxonKey=6" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-botany.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Botany
      </button>
    </a>
    <a href="/occurrence/search?view=table&taxonKey=5" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-mycology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Mycology
      </button>
    </a>
    <a href="/occurrence/search?view=table&collectionCode=UZH:IEM-General_Coll&collectionCode=NMB-ANTHR&collectionCode=UZH:IEM-HistSlides&collectionCode=UZH:IEM-WetSpec&collectionCode=UZH:NMZ-IEA&collectionCode=UZH:IEM-Med_Hist_Coll&collectionCode=UZH:IEM-Galler_Coll&collectionCode=UZH:IEM-Swiss_Army_Coll&collectionCode=KMDMZ-Mensch&collectionCode=UNIBAS:IPNA-ARCHANTH_IAG&collectionCode=UZH:IEM-Refrig&collectionCode=UZH:IEM-DrySpecFor&collectionCode=UZH:IEM-Mummies&collectionCode=UZH:IEM-Dahlheim_Coll&collectionCode=NMB-ANTHR&collectionCode=UZH:IEM-Teaching_Coll" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-anthropology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Anthropology
      </button>
    </a>
    <a href="/occurrence/search?view=table&basisOfRecord=FOSSIL_SPECIMEN" style="text-decoration: none;" target="_blank">
      <button style="padding: 10px 40px; font-size: 24px; border: 2px solid white; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px;"
              onmouseover="this.style.color='{{ site.data.colors.siteColor.background }}';"
              onmouseout="this.style.color='#333';">
        
        <!-- Round image -->
        <img src="/assets/images/Illustrations_CochetA/SCN-icones-paleonthology.png" alt="icon" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
        
        <!-- Text below -->
        Paleontology
      </button>
    </a>
</div>

<br>

# Displaying Data

You can explore the data in different ways:
| Display mode | Definition  |
| ------------- | ------------- |
| _Table view_  | See a list of specimens, with each column showing different details about them. If an image is available for a specimen, it is indicated by an icon in the “Features” column. |
| _Map view_ | Find specimens by location. Click a dot to see a quick preview, and open it to view all the details. |
| _Gallery view_  | Browse pictures of specimens. |
| _Datasets_  | See a list of collection datasets. |
| _Dashboard_  | Summarise data into lists or charts based on the field of your choice. This mode is available only for specimen records. |

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0px;">
  <div style="width: 100%; font-size: 22px; line-height: 1.6; color: #333;">
    <p>Explore the gallery view</p>
  </div>

  <a href="/occurrence/search?view=gallery"
     target="_blank"
     style="margin-top: 40px; display: block; width: 100%; aspect-ratio: 16 / 4; overflow: hidden; border-radius: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border: 3px solid #eee;">
    <img 
      src="/assets/images/inline_Illustrations/SwissNatColl_gallery_publishedSpecimens_20251016_v3.png"
      alt="Gallery view"
      style="width: 100%; height: 100%; object-fit: cover; object-position: center; border-radius: 30px;" />
  </a>
</div>

# Filtering Data

You can apply filters to narrow your search. A core set of filters is displayed by default. Clicking the **More** button reveals additional options.

| Type of data | Default filters |
| ------------ | --------------- |
| _Specimens_ | Institution ; Features; Dataset ; Scientific name ; Recorded by ; Administrative area ; Year |
| _Collections_ | Code ; Number of specimens ; Specimens in GBIF ; Scientific name ; Country or area of coverage |
| _Institutions_ | Code ; Number of specimens ; Specimens in GBIF |

# Downloading Data

Only users with a GBIF account can download data (easily created for free). On the [specimens page](/occurrence/search), the tab on the right at the top is [Download](/occurrence/search?view=DOWNLOAD){:target="_blank"}. Clicking on it redirects you to the GBIF.org download page. Note that any filters you have applied on the SwissNatColl data page are automatically transferred, so you can easily download only the data you’re interested in.

For more information, see the page on [GBIF data processing](https://www.gbif.org/data-processing)

# Original vs. Published Data

The data published on this portal has undergone various encodings, enrichments and validation processes.
In most cases, the information has not changed significantly compared to the original data of the data providers. However, for threatened and sensitive swiss species, the accuracy of data has been deliberately reduced by blurring coordinates to a grid-cell level. These changes apply to species under the scope of [InfoSpecies](https://www.infospecies.ch/fr/){:target="_blank"} in order to implement its [deontology](https://www.infospecies.ch/fr/assets/content/documents/flyer-infospecies-de-fr.pdf){:target="_blank"}.

{% include back-to-top.html %}
