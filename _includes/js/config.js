var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const countryCode = 'CH';
const institutionKey = ["8d572607-d32c-4477-8834-c9dbe76c57f9", "e772c6d6-bbc8-40c8-92e9-b74407e1f5bb", "08ccd767-4afc-4023-ab55-7a7c34295e93", "d200fcbc-972e-4488-bcb6-eaa47209148d", "adee7883-8290-4050-b643-8e2816f92e9a", "3e879cad-48a9-428f-848d-1c0d1a6ba94b", "5b487a79-76ef-4615-93d9-f4ea25a40c33", "d34bd63f-0472-419a-a13c-2c5430eb875d", "9e597ef1-6ce0-4677-b311-014739a27603", "5183c521-f6ff-4f24-904e-7b715f22d92d", "4863fe5a-e375-4770-978c-226201546980", "cc775ae7-70ec-4a4e-aeaa-2653708ca2ac", "01ef07f0-5502-4935-b00e-7657417b8dae", "58f0cf31-4c49-4568-87d5-60d51389230f", "f6abc948-1068-4d23-b165-701e8734c07e", "ee1fe2cc-fd6e-4bf6-a691-46518d806154", "0a76df5c-a78c-4ab8-8e0b-74fa19e8eadc", "24ab1eae-4509-4433-afa7-d13fc5e25d04", "dcb3162a-9409-4785-a86a-fa6b9b805d1d", "d4ec3a19-8a63-4985-9966-e74d5d4c33b5", "90070fe3-51ec-4a56-96be-cb6c00dd0ae2", "170b7cf5-9b5f-44e2-859b-39e23034aa48", "9674bfd8-6070-4835-a88d-0c4c13fe7f55", "da2b9a85-283c-45b4-9d1f-4a9e2884bdb8", "07087f63-ad84-4603-8f17-e01037da89b0", "3ab4b761-c62f-4996-a6d8-ed1283fc161e", "a4e8fc5e-fb6c-4c08-b9f1-ef8724870e89", "07f5d226-10ac-44cd-9c61-f13438cd8e79", "fa45db4d-69f0-455a-8359-3dd7d4f8fd87", "b661a5a9-e227-4a75-9a93-25d1a11034c1", "278f3403-ad9f-4c6b-b0d8-243a2935cc40", "582f1eda-5673-4265-87ac-6a164cd8d193", "e75dec96-c5aa-4f81-b1a3-a2505c549b59", "6b812cf9-6499-4d91-a5ff-c14c8d7d2600", "9f120de3-2525-4b39-82ea-54689ca4b9db", "722c63ef-2ebe-4008-951f-62221ff15917", "cffeef25-25fa-4f91-a695-28c33057d3ab", "3a5c1cc2-f961-4b16-8c70-d6e253bef003", "b576469b-3679-4588-8505-c62c90ce8e8f", "1236323a-0966-4380-9e87-c253056ac77e", "6bc72849-0b52-481b-a64f-4d7778469cdf", "2c521b92-4c8d-4fe6-990c-50d426708847", "6dd8d5b3-9668-4dbc-9f68-c5d780b4767a", "a12d7f74-d968-4423-bc6a-a4de190fbcca", "b7f64d5d-575b-4b2f-abf4-b49cbddb6ca4"];

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
    enabledRoutes: ['occurrenceSearch', 'institutionSearch', 'institutionKey', 'collectionSearch', 'collectionKey', 'datasetKey', 'datasetSearch', 'literatureSearch']
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
	//{
          //"type": "equals",
          //"key": "publishing_org",
          //"value": "9661d20d-86b6-4485-8948-f3c86b022fa7"
        //},
        {
          "type": "in",
          "key": "basisOfRecord",
          "values": ["PRESERVED_SPECIMEN", "FOSSIL_SPECIMEN"]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'typeStatus', 'gadmGid', 'stateProvince', 'publisherKey', 'elevation', 'year', 'basisOfRecord', 'datasetName', 'occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'DASHBOARD'], // what tabs should be shown
    availableTableColumns: ['scientificName', 'features', 'coordinates', 'eventDate', 'basisOfRecord', 'publisher', 'catalogNumber', 
                            'recordedBy', 'identifiedBy', 'recordNumber', 'typeStatus', 'preparations', 'collectionCode', 'institutionCode', 'institutionKey', 
                            'collectionKey', 'country', 'locality', 'stateProvince', 'year', 'establishmentMeans', 'iucnRedListCategory', 'dataset', 'datasetName'], // all the columns that are available to the user. This array defines the order they appear in.
    defaultTableColumns: ['scientificName', 'country', 'year', 'iucnRedListCategory', 'catalogNumber', 'institutionKey', 'recordedBy', 'dataset', 'typeStatus'] // the columns showed by default. The order is not relevant, as it is defined in the list of available columns. The user can change what columns to show in the UI.
      // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  collection: {
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
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
