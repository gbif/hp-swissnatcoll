---
layout: documentation
sideNavigation: sidenav.taxonomy
title: Taxon
permalink: /taxonomy/taxon
---

<!--react and gbif component-->
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="taxon"></div>
<div id="gbifTaxonLinks"></div>

<script>
'use strict';
const e = React.createElement;
class Taxon extends React.Component {

    render() {

      return e(
        ColBrowser.Taxon,
        { 
          catalogueKey: '{{site.col.catalogueKey}}',
          pathToTree: '/taxonomy/browse',
          pathToSearch: '/taxonomy/search',
          pathToTaxon: '/taxonomy/taxon/',
          pathToDataset: '/sourcedatasets/',
          pageTitleTemplate: 'Legume | __taxon__',
          citation: 'top'
        }
      );
    }
  }

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(Taxon), domContainer);
</script>

<script>
  const sourceId = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);

  const taxonUrl = `//api.checklistbank.org/dataset/{{site.col.catalogueKey}}/nameusage/${sourceId}/related?datasetKey={{site.col.gbifDatasetKey}}`;
  fetch(taxonUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
        if (jsonResponse[0] && jsonResponse[0].id) {
          var el = document.getElementById('gbifTaxonLinks');
          var link = `../../occurrence/search?taxonKey=${jsonResponse[0].id}`;
          el.innerHTML = `<a class="button is-primary" href="${link}">{{site.data.translations.searchOccurrences.en}}</a>`;
        }
      })
      .catch(function(err) {

      });
</script>
