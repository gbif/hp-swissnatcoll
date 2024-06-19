---
layout: post
title: How to publish data - Data Aggregator
description: For Swiss Natural History institutions
background: {{ site.data.images.frullania.src }}
imageLicense: {{ site.data.images.frullania.caption }}
height: 50vh
toc: true
---
In order to publish your dataset/collection on the SVNHC portal, you need to first prepare a .tsv file (Tab-separated values file) with your data (see [Prepare my data](#prepare-my-data) and [upload](#upload-my-data) it in the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/){:target="_blank"}. After the [mapping](#map-my-data) and [encoding](#encode-my-data) of your data, the dataset/collection is ready to be [validated](#validate-my-data) and [published on GBIF.org](#publish-my-data). From there, it will be displayed on the SVNHC portal, in the [Occurrence data section](https://svnhc.hp.gbif-staging.org/occurrence/search){:target="_blank"}.

# Checklist -to do before starting the Data Aggregator
✅ My institution is **registered on [GrSciColl](https://scientific-collections.gbif.org/institution/search){:target="_blank"}**.

> Example: [Conservatoire et Jardin botaniques de Genève](https://scientific-collections.gbif.org/institution/d200fcbc-972e-4488-bcb6-eaa47209148d){:target="_blank"}

✅ My institution has **at least one collection registered on [GrSciColl](https://scientific-collections.gbif.org/collection/search){:target="_blank"}**.

> Example: [Herbarium - General collection](https://scientific-collections.gbif.org/collection/836af357-06e8-4a4f-9511-c3d33155f2b5){:target="_blank"}

✅ **Mandatory fields** are present in my dataset to ensure minimal encoding on the Data Aggregator
- scientificName ([definition](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"})
- catalogNumber ([definition](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"})

✅ I have an **UTF-8 encoded TSV file** of my dataset with Darwin Core standardised columns and cell content. --> [I need help with that](https://svnhc.hp.gbif-staging.org/en/data-aggregator/#do-i-have-to-upload-my-entire-database-fields-into-the-data-aggregator)

# Prepare my data
Please check our [FAQs](https://svnhc.hp.gbif-staging.org/en/data-aggregator.md#faqs) on how to prepare your dataset/collection for the upload in the Data Aggregator.

What you are expected to have at the end of this step: .tsv file with your data arranged as one line is one occurrence/specimen and one column is one attribute
# Upload my data
Upload of the dataset either as a new collection or to update an already imported dataset

# Map my data
[Darwin Core](https://dwc.tdwg.org/) is a **data standard**, a template to be used when organising data in a database or a table in order to have distinct and **precise fields with a known and fixed information format** in each of them. It has been created as a helping basis to make [FAIR](https://dwc.tdwg.org/ ) data.

The direct benefit of the Darwin Core standard is the **high level of compatibility between data from different sources**.

# Encode my data
Click on Encode

# Validate my data

# Publish my data
Clic on Publish
