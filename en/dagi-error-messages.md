---
layout: documentation
permalink: /en/dagi-error-messages
title: DAGI Error messages
description: Description of the error messages that can be encountered when using DAGI
sideNavigation: sideNavigation.tutorials
toc: true
---

<head>
  <!-- Lightbox2 CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
  
  <!-- Lightbox2 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>

  <!-- Zoom.js CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/css/zoom.min.css">

  <!-- Zoom.js JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/js/zoom.min.js"></script>

</head>

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
ℹ️ This page covers the error messages you might encounter when using the DAGI and how to interpret them and find the solution
</div>

# Import

## The import failed

You can see if an import failed in the **Imports tab of a dataset page**. The State icon on the left side of an import line is red and displays **❌Failed**

1. Click **on the import line** to open the side-pane providing metadata information on the import.
   - In the **Validation section**, you can see how many lines had been checked before finding an error and the total number of errors found in the file.
   - In the **Error Log section**, you can see how many attribute values contain errors.
2. Click **on the blue eye icon 👁️‍🗨️ in the Error Log section** to open a pop-up window describing the values that contain errors (Preview of the error log).
   The error log is a table of five columns
   - **Catalog Number** : list of the catalogNumbers concerned by the errors
   - **Scientific Name** : corresponding scientificName to a given catalogNumber
   - **Field** : corresponding attribute that contains an error
   - **Value** : corresponding imported value in the attribute
   - **Error message** : standardised explanation on what the error is
3. After identifying the errors in the import file, you will need to correct them and import your file again.

| Example of an error message | Explanation |
| --------------------------- | ----------- |
| _Invalid value provided for [...]_ | The value format of this attribute does not match what was imported in the import file. Check the [Attributes format page](/en/attributes-format){:target="_blank"} for a list of all attributes and their format in DAGI. |
| _attribute tax_scientific_name is required_ | The _scientificName_ is missing in one of the import file lines. |
| _attribute mte_catalog_number is required_ | The _catalogNumber_ is missing in one of the import file lines. |

# Publications

## Unpublished records

When selecting a set of records to publish, it can happen that the number of selected records displayed in the Step 1️⃣ of 3️⃣ of the Publication of Records pop-up window **is smaller than the set of records previously selected**.

1. Publish you dataset
2. After two hours, when the published status of the records are set on "Published*, click on the Quick-filter box **Not Published**.
   - This displays the remaining unpublished records that were missing when you clicked on "Publish".
3. By checking the records, you might find out why they were not published.
   - Is the Encoding status **Incomplete**? Is the GBIF Taxonomy Encoding step **Incomplete**? Then, check the value of _scientificName_.
  
| Example of an error message | Explanation |
| --------------------------- | ----------- |
| _scientificName_ = "Gen. sp." | This value means that the specimen can't be identified. Therefore, the GBIF API can't be completed, leaving the _kingdom_ attribute empty. In this state, this record can't be published |

{% include back-to-top.html %}
