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

# https://raw.githubusercontent.com/gbif/hp-svnhc/master/data/eventlist.yml
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
        .calendar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .calendar {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
            margin-top: 20px;
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
        .month-title {
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Event Calendar</h1>
    <div class="calendar-container">
        <div class="calendar" id="calendar1"></div>
        <div class="month-title" id="monthTitle1"></div>
        <div class="calendar" id="calendar2"></div>
        <div class="month-title" id="monthTitle2"></div>
        <div class="calendar" id="calendar3"></div>
        <div class="month-title" id="monthTitle3"></div>
    </div>
    <!-- Include js-yaml library -->
    <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.0.0/dist/js-yaml.min.js"></script>
    <script>
        async function fetchEvents() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/gbif/hp-svnhc/master/data/eventlist.yml');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const yamlText = await response.text();
                return jsyaml.load(yamlText);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        }

        function generateCalendar(containerId, monthTitleId, year, month, events) {
            const containerElement = document.getElementById(containerId);
            containerElement.innerHTML = ''; // Clear previous calendar

            const calendarElement = document.createElement('div');
            calendarElement.className = 'calendar';
            containerElement.appendChild(calendarElement);

            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Calculate the first day of the month (0 is Sunday, 1 is Monday, etc.)
            const firstDayIndex = new Date(year, month, 1).getDay();
            const offset = (firstDayIndex + 6) % 7; // Adjusting to start with Monday

            // Create blank days for the previous month
            for (let i = 0; i < offset; i++) {
                const blankDayElement = document.createElement('div');
                blankDayElement.className = 'day';
                calendarElement.appendChild(blankDayElement);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'day';
                
                const dayNumber = document.createElement('h3');
                dayNumber.textContent = day;
                dayElement.appendChild(dayNumber);

                const dayEvents = events.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.getFullYear() === year && eventDate.getMonth() === month && eventDate.getDate() === day;
                });

                dayEvents.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = 'event';
                    
                    const eventLink = document.createElement('a');
                    eventLink.href = event.url;
                    eventLink.target = '_blank';
                    eventLink.textContent = event.title;
                    
                    eventElement.appendChild(eventLink);
                    dayElement.appendChild(eventElement);
                });

                calendarElement.appendChild(dayElement);
            }

            // Update month title
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const currentMonthName = monthNames[month];
            const monthTitleElement = document.getElementById(monthTitleId);
            monthTitleElement.textContent = `${currentMonthName} ${year}`;
        }

        async function initializeCalendar() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();

            const events = await fetchEvents();
            generateCalendar('calendar1', 'monthTitle1', currentYear, currentMonth, events);
            generateCalendar('calendar2', 'monthTitle2', currentYear, currentMonth + 1, events);
            generateCalendar('calendar3', 'monthTitle3', currentYear, currentMonth + 2, events);
        }

        initializeCalendar();
    </script>
</body>
</html>
