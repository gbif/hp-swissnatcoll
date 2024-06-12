---
layout: heroImage
title: Data Aggregator
description: Swiss Data Aggregator and tutorials
background: /assets/images/placeholders/moss.jpg
imageLicense: |
  None for this image, but it would normally go here. Markdown is allowed.
height: 50vh
toc: true
---

# Swiss Data Aggregator

More than 90% of the specimens curated in Switzerland are biological or paleontological. For the aggregation and publication of digital information on these specimens, SwissCollNet will collaborate with InfoSpecies and build on the already existing data infrastructure of the Swiss node of GBIF.

InfoSpecies is the umbrella organisation of the national data centers and coordination offices for species promotion. One of the main goals of InfoSpecies is the provision, management and diffusion of species records, which includes natural history collection data.

The long-term objective is to achieve automatised data transfer of collection data to the national aggregator and publication of data on national and international online portals as well as an automatised update of data records.

Source : [Data aggregation in Switzerland](https://swisscollnet.scnat.ch/fr/collection_data/data_aggregation).


# Do I have to upload my entire database fields into the Data Aggregator?
There is no need to upload all fields of your database into the Data Aggregator. You can choose to upload only the most important fields. They are the ones that will be available on the SVNHC portal in the Data pages.

To help you select your field, here is an empty csv file with the most important Darwin Core terms required for GBIF (see: [Data quality requirements: Occurrence datasets](https://www.gbif.org/fr/data-quality-requirements-occurrences)). You can put your data in this file and use it for the upload.
<html lang="en">
<body>
    <a href="https://raw.githubusercontent.com/gbif/hp-svnhc/master/downloadFiles/DarwinCoreSelected.csv" download>
       <button>📝 Download CSV</button>
    </a>
</body> 
</html>



# But my database/dataset is not formatted in Darwin Core, do I have to change everything?
Rest assured, you do not need to change your database/dataset dramatically. The most important thing is to find the easiest and fastest way to adapt your database/dataset to import it in the data aggregator. Here are our 3 most popular suggestions:

1) Add 1 entry in your database/dataset (a new line in your excel file for instance) and fill out each field of this entry with the corresponding [Darwin Core term](https://dwc.tdwg.org/terms/) (if and only if the content of the field corresponds to the DwC definition). Adapt your data with the other important DwC terms until all of the information you want to export is ready.

      ✅ No extra work of rearranging your database
   
      ✅ This line can easily be deleted
   
      ❌ Your data has to be as clean as possible
   
      ❌ Wrong mapping



 2) Add the [Darwin Core terms](https://dwc.tdwg.org/terms/) in your dataset/database as new columns. With the help of scripts and formulas, pick the fields of your database and copy or adapt their values in the DwC fields in a dynamic way.

      ✅ You now have Darwin Core named columns/fields
   
      ✅ You don't need to change the columns/fields you use in your daily work
   
      ❌ The data is duplicated in multiple columns
   
      ❌ If not dynamic, then mistakes can lower the dataset/database quality


 3) Check your database/dataset entries and replace the name of your fields with the corresponding [Darwin Core term](https://dwc.tdwg.org/terms/).

      ✅ You now have a fully Darwin Core compatible dataset/database
   
      ✅ You won't have to do any more changes in the future
   
      ❌ Difficult to change habits regarding field names
   
      ❌ Needs a deep cleaning of the whole database/dataset
