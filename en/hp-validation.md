---
layout: default
permalink: /hp-validation
title: Validation process of the SwissNatColl hosted portal
toc: true
---
# Validation process of the SwissNatColl hosted portal

## Current state

<!-- Toggle button -->
<button class="toggle-button" id="toggle-summary">Click here to develop/hide</button>

<!-- The summary content -->
<div id="summary">
    <div class="progress-group">
        <p>Global (10 sections)</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 14%;"></div>
        </div>
        <p>Thematic: Homepage</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: About</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: Data</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: Data Aggregator</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: Methods</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 0%;">0/6</div>
        </div>
        <p>Thematic: Visit us</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: 🔗Links</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: 📰News</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: 🗓️Calendar</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
        <p>Thematic: ❓Helpdesk</p>
        <div class="progress-bar">
            <div class="progress" id="progress-principal" style="width: 16%;">1/6</div>
        </div>
    </div>
</div>

## Pages status

### Homepage

### Data Aggregator

<label>
        <input type="checkbox" id="persistentCheckbox"> Anne Morel
</label>

### How to publish data

### FAQs

### Links

### News

### Calendar



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation du Site Web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        .progress-group {
            margin-bottom: 20px;
        }

        .progress-group p {
            font-size: 1.5em;
        }

        .progress-bar {
            background-color: #f3f3f3;
            border-radius: 5px;
            position: relative;
            margin: 15px 0;
            height: 25px;
            width: 100%;
        }

        .progress {
            background-color: #4caf50;
            height: 100%;
            border-radius: 5px;
            text-align: center;
            color: white;
        }

        .page-detail {
            margin-bottom: 20px;
        }

        .validation-system {
            margin-top: 10px;
        }

        .validation-system label {
            margin-right: 10px;
        }

        .validated {
            color: green;
            font-weight: bold;
        }
        #summary {
            display: none; /* Initially hidden */
            transition: all 0.3s ease-in-out;
        }

        /* You can also add some style for better display */
        .toggle-button {
            padding: 10px;
            background-color: #FF6699;
            color: white;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            margin-bottom: 10px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <script>
        // Get the checkbox element
        const checkbox = document.getElementById('persistentCheckbox');

        // When the page loads, check the localStorage to see if the checkbox should be checked
        window.onload = function() {
            const isChecked = localStorage.getItem('checkboxStatus');
            if (isChecked === 'true') {
                checkbox.checked = true;
            }
        };

        // Add an event listener to store the checkbox status in localStorage when it's clicked
        checkbox.addEventListener('change', function() {
            localStorage.setItem('checkboxStatus', checkbox.checked);
        });

        // JavaScript to toggle visibility
        const toggleButton = document.getElementById('toggle-summary');
        const summaryDiv = document.getElementById('summary');

        toggleButton.addEventListener('click', function() {
            // Check if the summary is currently visible
            if (summaryDiv.style.display === 'none' || summaryDiv.style.display === '') {
                // Show the summary
                summaryDiv.style.display = 'block';
            } else {
                // Hide the summary
                summaryDiv.style.display = 'none';
            }
        });
    </script>
</body>
