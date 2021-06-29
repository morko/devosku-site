---
templateKey: project-page
title: Production Orders
date: 2020-11-14T15:04:10.000Z
featuredImage: /img/tuotantomaaraykset-mockup.png
description: Full stack web app for Tampere Philharmonic Orchestra to keep track of resources needed for organizing their training and performances.
technologies:
  - text: Node.js
    href: https://nodejs.org
  - text: Express.js
    href: http://expressjs.com/
  - text: React.js
    href: https://reactjs.org/
---

Tampere Philharmonich Orchestra needed a way to provide their staff with a clear and accessible way to their production orders that include stuff like composition of the orchestra, training places, notes etc. They use a system called [Opas](https://www.opas.eu) to save the data but it lacked an accessible representation of it.

Production Order app solves the problem by integrating with the [Opas](https://www.opas.eu) through an XML that is exported from it. The XML is then transferred with FTP into a server that is running the app in Node.js runtime. The XML is parsed on the server and transformed into JSON where it is queried and presented by React.js front-end in an easy accessible and printable form.