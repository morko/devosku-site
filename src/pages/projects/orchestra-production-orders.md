---
templateKey: project-page
title: Orchestra Production Orders
date: 2021-06-14T15:04:10.000Z
featuredImage: /img/tuotantomaaraykset-mockup.png
description: Web app for Tampere Philharmonic Orchestra to keep track of resources and staff needed for organizing their training and performances.
technologies:
  - text: Node.js
    href: https://nodejs.org
  - text: Express.js
    href: http://expressjs.com/
  - text: React.js
    href: https://reactjs.org/
---

#### Problem

Tampere Philharmonich Orchestra needed a way to provide their staff with a clear and accessible way to their production orders that include event data of composition of the orchestra, training places, dates, people involved, notes etc. They use a system called [Opas](https://www.opas.eu) to save the data and the web app was required to get the data from it.

#### Solution

The Production Orders app solves the problem by integrating with the [Opas](https://www.opas.eu) system through an XML that is exported from it. Script made by [Opas](https://www.opas.eu) draws the data out of their database and sends it with FTP to a server running the web app. The XML is then parsed on the Node.js server and transformed into JSON where it is queried and presented by React.js front-end in an easy accessible and printable form.

#### Thoughts and Credits

This project was fun to work with and the [Opas](https://www.opas.eu) people were also very helpful to add some missing fields to the XML so the customers needs were satisfied. Big thanks to [Kuohu & Kaisla Creative](https://kuohukaisla.com) for designing the UI.