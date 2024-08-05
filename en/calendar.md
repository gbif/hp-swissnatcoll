---
layout: compose
title: Calendar
description: Interesting and important events held in the swiss institutions
background: "{{ site.data.images.calendar.src }}"
imageLicense: "{{ site.data.images.calendar.caption }}"
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
        /* Style for the Back to Top Button */
        #back-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          display: none;
          background-color: #fa5e97;
          color: white;
          text-align: center;
          padding: 5px;
          border-radius: 5px;
          font-size: 18px;
          cursor: pointer;
          z-index: 1000;
          width: 60px; /* Width for the rectangle */
          height: 40px; /* Height for the rectangle */
          line-height: 40px;
        }
    
        #back-to-top:hover {
          background-color: #fa5e97;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0px;
            text-align: center;
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
            margin-top: 0px;
            padding: 5px;
            border-radius: 5px;
        }
        .day-header {
            text-align: center;
            font-weight: bold;
            padding: 7px 0;
        }
        .day {
            border: 1px solid #ccc;
            padding: 10px;
            min-height: 100px;
            min-width: 100px;
            max-height: 200px; /* Set a maximum height for scrollability */
            overflow-y: auto; /* Enable vertical scrolling */
        }
        .day h3 {
            margin: 0 0 10px;
        }
        .event {
            background-color: #fa5e97;
            margin: 5px 0;
            padding: 5px;
            cursor: pointer;
        }
        .event a {
            text-decoration: none;
            color: #000000; /* Set the color of event links */
            align-items: center; /* Vertically center align */
            justify-content: center; /* Horizontally center align */
            text-align: center; /* Ensure the text inside the flex item is centered */
            font-weight: bold;
            font-size: 12px;
        }
        .month-title {
            font-size: 30px;
            margin-bottom: 0px;
        }
        .current-day {
          background-color: #fa5e97 !important; /* Color for the current day */
        }
    </style>
</head>
<body>
    <!-- Back to Top Button -->
    <a id="back-to-top" href="#" title="Back to top">Up</a>

    <script>
        // Show or hide the button when scrolling
        window.onscroll = function() {
          scrollFunction();
        };
    
        function scrollFunction() {
          var backToTopButton = document.getElementById("back-to-top");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
          }
        }
    
        // Scroll to the top when the button is clicked
        document.getElementById("back-to-top").addEventListener("click", function(event) {
          event.preventDefault();
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
    </script>
    <h1>Event Calendar - Trimestrial</h1>
    <div class="calendar-container">
        <div class="month-title" id="monthTitle1"></div>
        <div class="calendar" id="calendar1"></div>
        
        <div class="month-title" id="monthTitle2"></div>
        <div class="calendar" id="calendar2"></div>
        
        <div class="month-title" id="monthTitle3"></div>
        <div class="calendar" id="calendar3"></div>
    </div>
    <!-- Include js-yaml library -->
    <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.0.0/dist/js-yaml.min.js"></script>
    <script>
        async function fetchEvents() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/gbif/hp-svnhc/master/_data/eventlist.yml');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const yamlText = await response.text();
                return jsyaml.load(yamlText);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        }

        function generateCalendar(containerId, monthTitleId, backgroundColor, year, month, events) {
            const containerElement = document.getElementById(containerId);
            containerElement.innerHTML = ''; // Clear previous calendar

            const monthTitleElement = document.getElementById(monthTitleId);
            monthTitleElement.textContent = ''; // Clear previous month title

            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const currentMonthName = monthNames[month];
            monthTitleElement.textContent = `${currentMonthName} ${year}`;

            const calendarElement = document.createElement('div');
            calendarElement.className = 'calendar';
            containerElement.appendChild(calendarElement);

            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Calculate the first day of the month (0 is Sunday, 1 is Monday, etc.)
            const firstDayIndex = new Date(year, month, 1).getDay();
            const offset = (firstDayIndex + 6) % 7; // Adjusting to start with Monday
            // Get the current date
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const isCurrentMonth = currentDate.getFullYear() === year && currentDate.getMonth() === month;

            // Create blank days for the previous month
            for (let i = 0; i < offset; i++) {
                const blankDayElement = document.createElement('div');
                blankDayElement.className = 'day';
                calendarElement.appendChild(blankDayElement);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'day';
                dayElement.style.backgroundColor = backgroundColor; // Apply background color
                
                if (isCurrentMonth && day === currentDay) {
                    dayElement.classList.add('current-day'); // Highlight the current day
                }

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
        }
        
        async function initializeCalendar() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();

            const events = await fetchEvents();
            generateCalendar('calendar1', 'monthTitle1', '#EDF3F3', currentYear, currentMonth, events); // Set background color for each day in the month
            generateCalendar('calendar2', 'monthTitle2', '#EDF3F3', currentYear, currentMonth + 1, events);
            generateCalendar('calendar3', 'monthTitle3', '#EDF3F3', currentYear, currentMonth + 2, events);
        }

        initializeCalendar();
    </script>
</body>
</html>
