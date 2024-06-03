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

# primary color : #fa5e97
---

<!DOCTYPE html>
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
        .day, .weekday {
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
            color: #fa5e97;
        }
        .weekday {
            background-color: #f8f8f8;
            font-weight: bold;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Event Calendar</h1>
    <div class="calendar" id="calendar">
        <div class="weekday">Monday</div>
        <div class="weekday">Tuesday</div>
        <div class="weekday">Wednesday</div>
        <div class="weekday">Thursday</div>
        <div class="weekday">Friday</div>
        <div class="weekday">Saturday</div>
        <div class="weekday">Sunday</div>
    </div>
    <script>
        const events = [
            { date: '2024-06-01', title: 'Event 1', url: 'https://example.com/event1' },
            { date: '2024-06-05', title: 'Event 2', url: 'https://example.com/event2' },
            { date: '2024-06-10', title: 'Event 3', url: 'https://example.com/event3' },
            // Add more events as needed
        ];

        function generateCalendar(year, month) {
            const calendarElement = document.getElementById('calendar');
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'day';
                
                const dayNumber = document.createElement('h3');
                dayNumber.textContent = day;
                dayElement.appendChild(dayNumber);

                const dayEvents = events.filter(event => new Date(event.date).getDate() === day);
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
        }

        generateCalendar(2024, 5); // June 2024
    </script>
</body>
</html>
