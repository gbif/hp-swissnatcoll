# ===========================================================================================
# Variables and Initial Setup
# ===========================================================================================
var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const countryCode = 'CH';
const publisher = 'SVNHC';

# ===========================================================================================
# Conditional Theme Setup
# ===========================================================================================
if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    borderRadius: isSquared? 0 : 3
  }});
}

# ===========================================================================================
# Configuration Object
# ===========================================================================================
var siteConfig = {
  version: 2,
  availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE'],
  routes: {
    enabledRoutes: ['occurrenceSearch', 'institutionKey', 'institutionSearch', 'publisherSearch', 'publisherKey', 'collectionKey', 'collectionSearch', 'datasetKey', 'datasetSearch', 'literatureSearch'],
  },
  occurrence: {			#OCCURRENCE_CONFIGURATION
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 1.8
    },
    rootPredicate: {
      "type": "or",
      "predicates": [
        {
          "key": "publishingCountry",
          "type": "equals",
          "value": countryCode
        },
        {
          "type": "and",
          "predicates": [
            {
              "key": "country",
              "type": "equals",
              "value": countryCode
            },
            {
              "key": "notIssues",
              "type": "equals",
              "value": "COUNTRY_COORDINATE_MISMATCH"
            }
          ]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'publisherKey', 'elevation', 'year', 'basisOfRecord', 'datasetName', 'occurrenceIssue'],
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  dataset: {			#DATASET_CONFIGURATION
    rootFilter: {publishingCountry: countryCode},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },
  publisher: {			#PUBLISHER_CONFIGURATION
    rootFilter: {country: countryCode},
    excludedFilters: ['countrySingle', 'networkKey'],
  },
  collection: {			#COLLECTION_CONFIGURATION
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCode,
	  active: true
    }
  },
  institution: {		#INSTITUTION_CONFIGURATION
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCode,
      active: true
    },
    mapSettings: {
      enabled: true,
      lat: 46.54547556985693,
      lng: 8.092451942260254,
      zoom: 7.877
    },
  },
  literature: {			#LITERATURE_CONFIGURATION
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: [countryCode]
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: [countryCode]
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  },
  maps: {			#MAPS_CONFIGURATION
    locale: 'fr'
  }
};
