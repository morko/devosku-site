---
templateKey: project-page
title: Events Crawler for WordPress
date: 2020-11-14T15:04:10.000Z
featuredImage: /img/events-crawler-for-wordpress-mockup.jpg
description: A WordPress plugin that crawls and parses events from a website and displays them in another.
technologies:
  - text: WordPress
    href: https://wordpress.com/
  - text: Gutenberg Blocks
    href: https://wordpress.org/gutenberg/
  - text: Simple HTML DOM Parser for PHP
    href: https://simplehtmldom.sourceforge.io/
links:
  - text: Plugin in action at the website
    href: https://www.luppi.fi/tapahtumat
---

Luppi needed a way to display events on their WordPress site. They are a child organization of a bigger one that has a quite old website running on Drupal. To saving them time and effort to keep two separate event listings they wanted their website to fetch the events from the parent organizations website.

To create this feature for their website it was natural to implement the front-end as a Gutenberg block for WordPress. The real difficulty was how to fetch the data from the source website. I had no access to the back-end and only way to get the data was to investigate the websites network requests if it had any exposed API enpoint to access the events from. Unfortunately that was not the case so the only solution was to get the event using a technique called "web crawling".

Web crawling is usually last resort because it requires more amount of work for the back-end. The event pages needed to be fetched, filtered and parsed into JSON for easier usage in the front-end.

The plugins back-end exposes a GET route for the front-end to get the events with an AJAX request. When the route is hit the events are either parsed from the external website or returned from a cache if they were recently processed. This makes the subsequent requests a bit faster, but it does not eliminate the slowness of web crawling completely.
