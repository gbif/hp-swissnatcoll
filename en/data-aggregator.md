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


# FAQs
## Do I have to upload my entire database fields into the Data Aggregator?
There is no need to upload all fields of your database into the Data Aggregator. You can choose to upload only the most important fields. They are the ones that will be available on the SVNHC portal in the Data pages.

To help you select your field, **here is an empty tsv file with the most important Darwin Core terms** required for GBIF (see: [Data quality requirements: Occurrence datasets](https://www.gbif.org/fr/data-quality-requirements-occurrences)). You can put your data in this file and use it for the upload.
<div style="text-align: right;">
    <a href="https://raw.githubusercontent.com/gbif/hp-svnhc/master/downloadFiles/DarwinCoreSelected.tsv" download="DarwinCoreSelected.tsv">
        <button style="padding: 5px 15px; font-size: 14px; cursor: pointer;">Download TSV</button>
    </a>
</div>

## What is Darwin Core ?
[Darwin Core](https://dwc.tdwg.org/) is a **data standard**, a template to be used when organising data in a database or a table in order to have distinct and **precise fields with a known and fixed information format** in each of them. It has been created as a helping basis to make [FAIR](https://dwc.tdwg.org/ ) data.

## But my database/dataset is not formatted in Darwin Core, do I have to change everything?
Rest assured, you do not need to change your database/dataset dramatically. The most important thing is to find the easiest and fastest way to adapt your database/dataset to import it in the data aggregator. Here are our 3 most popular suggestions:


<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;">
    <strong>1) Add 1 entry in your database/dataset (a new line in your excel file for instance) and fill out each field of this entry with the corresponding <a href="https://dwc.tdwg.org/terms/">Darwin Core term</a></strong> (if and only if the content of the field corresponds to the DwC definition). Adapt your data with the other important DwC terms until all of the information you want to export is ready.
  </div>
  <div style="flex: 1;">
    ✅ No extra work of restructuring your database<br>
    ✅ Easily reversed<br>
    ❌ Data as clean as possible<br>
    ❌ Wrong mapping
  </div>
</div>
<br><br>
<br><br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;">
    <strong>2) Add the <a href="https://dwc.tdwg.org/terms/">Darwin Core terms</a></strong> in your dataset/database as new columns. With the help of scripts and formulas, pick the fields of your database and copy or adapt their values in the DwC fields in a dynamic way.
  </div>
  <div style="flex: 1;">
    ✅ Darwin Core named columns/fields<br>
    ✅ No changes of original columns/fields<br>
    ❌ Duplicated in multiple columns<br>
    ❌ If not dynamic, then mistakes can lower the dataset/database quality
  </div>
</div>
<br><br>
<br><br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;">
    <strong>3) Replace the name of your fields with the corresponding <a href="https://dwc.tdwg.org/terms/">Darwin Core term</a></strong> after checking your field compatibilities with the DwC terms definitions.
  </div>
  <div style="flex: 1;">
    ✅ Fully Darwin Core compatible dataset/database<br>
    ✅ No more changes in the future<br>
    ❌ Difficult to change habits regarding field names<br>
    ❌ Needs a deep cleaning of the whole database/dataset
  </div>
</div>
<br><br>
<br><br>

## Where can I find the Darwin Core terms description?
On the Darwin Core official website, the [Quick Reference Guide](https://dwc.tdwg.org/terms/) is the easiest to use.

Here are a few of the top-10 most used fields (with link to the quick reference guide page):

| DwC term (dwc:) | Category | Definition | Corresponding terms found in datasets | Examples |
| --------------- | -------- | ---------- | ------------------------------------- | -------- |
| [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName) | Taxon | The full scientific name, with authorship and date information if known. | Scientific name, nom scientifique, Wissenschaftliche Name, Full name, Nom complet | _Cyclamen hederifolium_ Aiton, _Vulpes vulpes (Linnaeus, 1758)_ |
| [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate) | Event | The date-time or interval when the dwc:Event was recorded. Format: for a precise date: YYYY-MM-DD, for an interval: YYYY-MM-DD/YYYY-MM-DD | date of collect, collection date, date de récolte, Funddatum | August 1903, 01.04.85, 15 VII 1867 |
| [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber) | Occurrence | An identifier given to the dwc:Occurrence at the time it was recorded (link between field notes and specimen). | field number, collect number, numéro de récolte, Fundnummer | 2089, ASM-515 |
| [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber) | Occurrence | A unique identifier for the record within the data set or collection. | Code-barre, Numéro, Barcode, Nummer | G00009201, Sheet-2765149 |
| [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy) | Occurrence | A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original dwc:Occurrence. | Collector, collecteur, leg. | RSutter, Gilomen, Ed. Berger |

And here are a few labels with the corresponding Darwin Core term:

# Tutorials -How to use
The Data Aggregator has a procedure separated in four important parts:
1. Preparation of the dataset before the upload
2. Upload of the dataset either as a new collection or to update an already imported dataset
3. Mapping of the dataset field names with the Data Aggregator's Darwin Core-based fields
4. Encoding of the dataset
5. Validation of the dataset
6. Publication of the dataset


## Darwin Core Mapping
[Darwin Core](https://dwc.tdwg.org/) is a **data standard**, a template to be used when organising data in a database or a table in order to have distinct and **precise fields with a known and fixed information format** in each of them. It has been created as a helping basis to make [FAIR](https://dwc.tdwg.org/ ) data.

The direct benefit of the Darwin Core standard is the **high level of compatibility between data from different sources**.
