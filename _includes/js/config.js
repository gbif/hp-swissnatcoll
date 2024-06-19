var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const countryCode = 'CH';

if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    borderRadius: isSquared? 0 : 3
  }});
}
var siteConfig = {
  apiKeys: {
   "mapbox": "pk.eyJ1IjoiaW5mb2ZhdW5hIiwiYSI6ImNsdzljY3JpODAxaXEycXBleGJsNTBqcHcifQ.DgU-N8lHtOSS0ogNiBnmow",
 },  
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSearch', 'institutionSearch', 'institutionKey', 'collectionSearch', 'collectionKey', 'datasetKey', 'datasetSearch', 'literatureSearch'],
  },
  occurrence: {
    mapSettings: {
      enabled: true,
      lat: 46.801111,
      lng: 8.626667,
      zoom: 0,
      userLocationEnabled: true
    },
    rootPredicate: {
      "type": "and",
      "predicates": [
	{
          "type": "equals",
          "key": "publishingCountry",
          "value": countryCode
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        },
        {
          "type": "isNotNull",
          "key": "institution"
        },
        {
          "type": "isNotNull",
          "key": "collection"
        },
        {
          "type": "in",
          "key": "basisOfRecord",
          "values": ["PRESERVED_SPECIMEN", "FOSSIL_SPECIMEN"]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'typeStatus', 'gadmGid', 'stateProvince', 'publisherKey', 'elevation', 'year', 'basisOfRecord', 'datasetName', 'occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'DASHBOARD'], // what tabs should be shown
    availableTableColumns: ['scientificName', 'features', 'country', 'coordinates', 'eventDate', 'basisOfRecord', 'publisher', 'catalogNumber', 
                            'recordedBy', 'identifiedBy', 'recordNumber', 'typeStatus', 'preparations', 'collectionCode', 'institutionCode', 'institutionKey', 
                            'collectionKey', 'locality', 'higherGeography', 'stateProvince', 'year', 'establishmentMeans', 'iucnRedListCategory', 'dataset', 'datasetName'], // all the columns that are available to the user. This array defines the order they appear in.
    defaultTableColumns: ['scientificName', 'higherGeography', 'country', 'year', 'establishmentMeans', 'iucnRedListCategory', 'catalogNumber', 'institutionKey', 'dataset', 'datasetName'] // the columns showed by default. The order is not relevant, as it is defined in the list of available columns. The user can change what columns to show in the UI.
      // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  collection: {
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCode,
	  active: true
    }
  },
  typus: {
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCode,
	  active: true
    }
  },
  institution: {
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
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: countryCode
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: countryCode
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  },
  maps: {
    locale: 'en',
    defaultProjection: 'MERCATOR', // what is the default projection
    defaultMapStyle: 'NATURAL', // what is the default style
    mapStyles: {
      MERCATOR: ['BRIGHT', 'NATURAL', 'DARK'],
    },
    addMapStyles: function ({ mapStyleServer, language, pixelRatio, apiKeys, mapComponents }) {
      return {
        SWISSTOPO: { // the name of your style
          component: mapComponents.OpenlayersMapbox,
          labelKey: 'Swisstopo', // the label in the select. Use a translation key
          mapConfig: {
            basemapStyle: `https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json`,
            projection: 'EPSG_3857'// one of 4326 | 3031 | 3857 | 3575
          }
        }
      }
    },
    // rewire style names to show a different style
    styleLookup: {
      MERCATOR: {
        BRIGHT: 'SWISSTOPO' 
      }
    }        
  }
};
// example of a language specific route overwrite, in this example for showing the maps labels in the language of the site
if (pageLang === 'fr')  {
  siteConfig.maps.locale = 'fr';
}
if (pageLang === 'en')  {
  siteConfig.maps.locale = 'en';
}
