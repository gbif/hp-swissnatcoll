---
lang-ref: home
layout: home
permalink: /
# ====================================================================================
# TITLE PART OF THE HOMEPAGE
# ====================================================================================
title: Swiss Virtual Natural History Collection
description: Virtual museum of the Natural History collections of Switzerland
background:  "{{ site.data.images.home.src }}"
imageLicense: "{{ site.data.images.home.caption }}"
height: 70vh
parallax: true

# ====================================================================================
# SHORTCUT BUTTONS BELOW THE TITLE
# ====================================================================================
cta:
  - text: Institutions
    href: /institution/search
  - text: Specimens
    href: /specimen/search
    isPrimary: true
  - text: About
    href: /about

# ====================================================================================
# WHOLE STRUCTURE OF THE HOMEPAGE
# top banner (with title)
# stats part
# thematic feature coded in a yml file
# 2-columns splitted part
# ====================================================================================
composition:
  - type: heroImage # the block type
  - type: pageMarkdown
  - type: stats
    data: home.stats  #file with the stats: _data/examples.yml
  - type: split
    data: home.vision
  - type: floatingText
    data: home.video-swisscollnet
  - type: features
    data: home.thematicCommunities
  #- type: split
  #  data: examples.herbariumImageExample

---

# Call to Action Section

<div class="cta">
  <div class="feature-content">
      <div class="home-search-wrapper">
          <div class="home-search">
              <div class="home-tabs">
                  <div class="button is-primary" id="home-tab-specimens"
                       onclick="switchToSpecimens()">
                      <span>Search specimens</span>
                  </div>
                  <div class="button" id="home-tab-institutions"
                       onclick="switchToInstitutions()">
                      <span>Search institutions</span>
                  </div>
              </div>
              <form id="home-search-form" action="/specimen/search" method="GET">
                  <input type="search"
                         name="q"
                         id="home-search-input"
                         value=""
                         autocomplete="off"
                         placeholder="e.g. odonata">
                  <button type="submit">Search</button>
              </form>
          </div>
      </div>
  </div>
</div>

<script>
  function switchToSpecimens() {
    document.getElementById("home-search-form").action = "/specimen/search";
    document.getElementById("home-search-input").placeholder = "e.g. odonata";
    document.getElementById("home-tab-specimens").classList.add("is-primary");
    document.getElementById("home-tab-institutions").classList.remove("is-primary");
  }

  function switchToInstitutions() {
    document.getElementById("home-search-form").action = "/institution/search";
    document.getElementById("home-search-input").placeholder = "e.g. museum";
    document.getElementById("home-tab-institutions").classList.add("is-primary");
    document.getElementById("home-tab-specimens").classList.remove("is-primary");
  }

  async function getGBIFCount(params) {
    const response = await fetch(
        `https://graphql.gbif.org/graphql?${params}`,
        // use a 5 second timeout
        {signal: AbortSignal.timeout(5000)}
      );
    const result = await response.json();
    return result.data;
  }

  (async function getRecordCount() {
    // the parameters for both institution count and specimen count requests have been
    // nabbed from the search pages. GBIF's graphql is not stable and public so we're
    // at the merci of GBIF and will need to keep these up to date.
    const institutionParams = new URLSearchParams({
      "queryId": "ed48400d668e18ea56353eb7dc2ad2057946c715",
      "strict": true,
      "variables": JSON.stringify({
        "displayOnNHCPortal": true,
        "country":"CH",
        "active":true,
        "limit":0,
      }),
    });
    const specimenParams = new URLSearchParams({
      "queryId": "23b0d9d449dd320f704fafca0de163cf18b745da",
      "strict": true,
      "variables": JSON.stringify({
        "predicate": siteConfig.occurrence.rootPredicate,
        "size": 0,
      }),
    });
    try {
      const specimenCount = (await getGBIFCount(specimenParams)).occurrenceSearch.documents.total;
      const institutionCount = (await getGBIFCount(institutionParams)).institutionSearch.count;
      document.getElementById("home-feature-subtitle-rcount").textContent = specimenCount.toLocaleString("en");
      document.getElementById("home-feature-subtitle-icount").textContent = institutionCount;
      document.getElementById("home-feature-subtitle-nocount").style.display = "none";
      document.getElementById("home-feature-subtitle-count").style.display = "inline";
    } catch (error) {
      // swallow all errors, nom nom nom, but do log
      console.log(`An error occurred while loading the counts: ${error}`);
    }
  })();
</script>

