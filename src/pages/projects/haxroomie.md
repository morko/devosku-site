---
templateKey: project-page
title: Haxroomie
date: 2020-11-14T15:04:10.000Z
description: Enables hosting HaxBall servers in systems without graphical environment.
featuredImage: /img/haxroomie-mockup.jpg
technologies:
  - text: Node.js
    href: https://nodejs.org
  - text: Puppeteer
    href: https://github.com/puppeteer/puppeteer
links:
  - text: GitHub repository for Haxroomie
    href: https://github.com/morko/haxroomie
  - text: Official HaxBall website
    href: https://www.haxball.com/
---

### Problem

HaxBall is pretty old but still popular browser game using WebRTC. The game does not support hosting without graphical user interface out of the box. I wanted to provide the Haxroomie community a way to host game rooms cheaper without the burden of running them on a system with full blown desktop environment.

### Solution

Haxroomie was implemented mainly in Node.js but also required parts of it running in the browser. It can be used programmatically or with the CLI and it could be expanded to also support controlling it through REST/GraphQL API.

Making Haxroomie was not a simple process and required implementing communication between several layers like browsers and Node.js. Several workarounds were also required like [overriding the browsers LocalStorage and IndexedDB](https://github.com/morko/haxroomie/blob/master/packages/haxroomie-core/src/browser/shared-storage.js) to prevent multiple rooms overwriting each others data and using Proxy to [support attaching multiple event listeners to HaxBalls JavaScript API](https://github.com/morko/haxball-room-trapper).

### Thoughts and Credits

This project taught me great deal about Node.js and browser JavaScript runtimes. It works and is used by large amount of people but still would need a bit more love when I have the time for it.

Haxroomie was made possible by Chromium supporting running their browser in headless mode and an awesome library for Node.js called [Puppeteer](https://github.com/puppeteer/puppeteer) to control the browser. Biggest thanks go to [saviola777](https://github.com/saviola777) for developing Haxroomie Headless Manager that Haxroomie uses internally to manage plugins for HaxBall.
