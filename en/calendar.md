---
layout: compose
title: Calendar
description: Interesting and important events held in the swiss institutions
background: /assets/images/placeholders/closeup.png
imageLicense: |
  GBIF standardised image
height: 50vh
composition:
- type: heroImage
- type: pageMarkdown

# <!DOCTYPE html>
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Calendar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .calendar {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
        }
        .day-header {
            text-align: center;
            font-weight: bold;
            padding: 10px 0;
        }
        .day {
            border: 1px solid #ccc;
            padding: 10px;
            min-height: 100px;
        }
        .day h3 {
            margin: 0 0 10px;
        }
        .event {
            background-color: #f0f0f0;
            margin: 5px 0;
            padding: 5px;
            cursor: pointer;
        }
        .event a {
            text-decoration: none;
            color: #fa5e97; /* Set the color of event links */
        }
    </style>
</head>
<body>
    <h1>Event Calendar</h1>
    <div class="calendar" id="calendar">
        <!-- Day headers -->
        <div class="day-header">Monday</div>
        <div class="day-header">Tuesday</div>
        <div class="day-header">Wednesday</div>
        <div class="day-header">Thursday</div>
        <div class="day-header">Friday</div>
        <div class="day-header">Saturday</div>
        <div class="day-header">Sunday</div>
    </div>
    <!-- Include js-yaml library -->
    <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.0.0/dist/js-yaml.min.js"></script>
    <script>
        async function fetchEvents() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/yourusername/yourrepo/main/eventlist.yml');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const yamlText = aw
