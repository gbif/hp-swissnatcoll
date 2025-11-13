var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const institutionKey = ["8d572607-d32c-4477-8834-c9dbe76c57f9", "e772c6d6-bbc8-40c8-92e9-b74407e1f5bb", "08ccd767-4afc-4023-ab55-7a7c34295e93", "d200fcbc-972e-4488-bcb6-eaa47209148d", "adee7883-8290-4050-b643-8e2816f92e9a", "3e879cad-48a9-428f-848d-1c0d1a6ba94b", "5b487a79-76ef-4615-93d9-f4ea25a40c33", "d34bd63f-0472-419a-a13c-2c5430eb875d", "9e597ef1-6ce0-4677-b311-014739a27603", "5183c521-f6ff-4f24-904e-7b715f22d92d", "cc775ae7-70ec-4a4e-aeaa-2653708ca2ac", "01ef07f0-5502-4935-b00e-7657417b8dae", "58f0cf31-4c49-4568-87d5-60d51389230f", "f6abc948-1068-4d23-b165-701e8734c07e", "ee1fe2cc-fd6e-4bf6-a691-46518d806154", "0a76df5c-a78c-4ab8-8e0b-74fa19e8eadc", "24ab1eae-4509-4433-afa7-d13fc5e25d04", "dcb3162a-9409-4785-a86a-fa6b9b805d1d", "d4ec3a19-8a63-4985-9966-e74d5d4c33b5", "90070fe3-51ec-4a56-96be-cb6c00dd0ae2", "170b7cf5-9b5f-44e2-859b-39e23034aa48", "9674bfd8-6070-4835-a88d-0c4c13fe7f55", "da2b9a85-283c-45b4-9d1f-4a9e2884bdb8", "07087f63-ad84-4603-8f17-e01037da89b0", "3ab4b761-c62f-4996-a6d8-ed1283fc161e", "a4e8fc5e-fb6c-4c08-b9f1-ef8724870e89", "07f5d226-10ac-44cd-9c61-f13438cd8e79", "fa45db4d-69f0-455a-8359-3dd7d4f8fd87", "b661a5a9-e227-4a75-9a93-25d1a11034c1", "278f3403-ad9f-4c6b-b0d8-243a2935cc40", "582f1eda-5673-4265-87ac-6a164cd8d193", "b576469b-3679-4588-8505-c62c90ce8e8f", "1236323a-0966-4380-9e87-c253056ac77e", "6bc72849-0b52-481b-a64f-4d7778469cdf", "2c521b92-4c8d-4fe6-990c-50d426708847"];
const publishingOrg = ["9661d20d-86b6-4485-8948-f3c86b022fa7", "605e7170-1123-11d9-8433-b8a03c50a862"]

// lignes ci-dessous à enlever quand on fera nos propres couleurs
if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    borderRadius: isSquared? 0 : 3
  }});
}

var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": true,
  "availableCatalogues": [
    "OCCURRENCE",
    "COLLECTION",
    "INSTITUTION"
  ],
  "dataHeader": {
    "enableApiPopup": true,
    "enableInfoPopup": true
  },
  "theme": {
    "primary": primaryColor,
    "borderRadius": isSquared,
    "stickyOffset": "0px",
    mapDensityColors: ['#C5C8F9', '#8FA3F9', '#5770C0', '#3A3C9B', '#1B1363'] // based on same constrasts as original ('#fed976', '#fd8d3c', '#F7642E', '#f03b20', '#bd0026')
  },
  "apiKeys": {
    "mapbox": "pk.eyJ1IjoiaW5mb2ZhdW5hIiwiYSI6ImNsdzljY3JpODAxaXEycXBleGJsNTBqcHcifQ.DgU-N8lHtOSS0ogNiBnmow"
  },
  "maps": {
    "locale": "en",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL",
          "SATELLITE",
          "DARK"
        ],
        "PLATE_CAREE": [
          "BRIGHT",
          "NATURAL",
          "SATELLITE",
          "DARK"
        ]
      }
    },
    "styleLookup": {
      "MERCATOR": {
        "DARK": "SWISSTOPO"
      }
    },
    addMapStyles: function ({ mapStyleServer, language, pixelRatio, apiKeys, mapComponents }) {
      return {
        SWISSTOPO: { // the name of your style
          component: mapComponents.OpenlayersMapbox,
          labelKey: 'Swisstopo', // the label in the select. Use a translation key
          mapConfig: {
            basemapStyle: `https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json`,
            projection: 'EPSG_3857'// one of 4326 | 3031 | 3857 | 3575,
            "lat": 46.801111,
            "lng": 8.626667,
            "zoom": 15,
            "userLocationEnabled": true
            }
          }
        }
      }
    },
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      code: 'de',
      localeCode: 'de',
      label: 'Deutsch',
      default: false,
      textDirection: 'ltr',
      reactIntlLocale: 'de-DE',
      iso3LetterCode: 'deu',
      vocabularyLocale: 'de-DE',
      gbifOrgLocalePrefix: '',
      grSciCollLocalePrefix: '',
      mapTileLocale: 'de',
    },
    {
      code: 'fr',
      localeCode: 'fr',
      label: 'Français',
      default: false,
      textDirection: 'ltr',
      cmsLocale: 'fr', // what locale code to use when fetching data from the cms endpoints
      iso3LetterCode: 'fra',
      vocabularyLocale: 'fr-FR',
      gbifOrgLocalePrefix: '/fr',
      grSciCollLocalePrefix: '',
      mapTileLocale: 'fr',
    },
    {
      "code": "it",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "publishingOrg",
          "values": publishingOrg
        }
      ]
    },
    "highlightedFilters": [
      "institutionKey",
      "datasetKey",
      "taxonKey",
      "recordedBy",
      "gadmGid",
      "year",
      "features"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "scientificName",
      "country",
      "year",
      "iucnRedListCategory",
      "catalogNumber",
      "institutionKey",
      "recordedBy",
      "dataset",
      "typeStatus"
    ],
    "availableTableColumns": [
      "scientificName",
      "features",
      "coordinates",
      "eventDate",
      "basisOfRecord",
      "publisher",
      "catalogNumber",
      "recordedBy",
      "identifiedBy",
      "recordNumber",
      "typeStatus",
      "preparations",
      "institutionCode",
      "institutionKey",
      "collectionKey",
      "country",
      "locality",
      "stateProvince",
      "year",
      "establishmentMeans",
      "iucnRedListCategory",
      "dataset",
      "datasetName",
      "identificationValidationStatus"
    ],
    "tabs": [
      "table",
      "map",
      "gallery",
      "datasets",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "enabled": true,
      "lat": 46.801111,
      "lng": 8.626667,
      "zoom": 3,
      "userLocationEnabled": true
    }
  },
  "collectionSearch": {
    "scope": {
      "displayOnNHCPortal": true,
      "active": true,
      "institutionKey": institutionKey
    },
    "excludedFilters": [
      "country"
    ]
  },
  "institutionSearch": {
    "scope": {
      "displayOnNHCPortal": true,
      "institutionKey": institutionKey,
      "active": true
    },
    "excludedFilters": [
      "country"
    ]
  },
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
};
