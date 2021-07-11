---
templateKey: project-page
title: Kaisla Admin Panel
date: 2021-02-14T15:04:10.000Z
featuredImage: /img/kaisla-admin-panel-mockup.png
description: Administrator panel for web hosts.
technologies:
  - text: Ansible
    href: https://www.ansible.com
  - text: Node.js
    href: https://nodejs.org
  - text: Feathers
    href: https://feathersjs.com
  - text: React.js
    href: https://reactjs.org
---

#### Problem

[Kuohu & Kaisla Creative](https://kuohukaisla.com) wanted the option to host their web apps and WordPress sites on self managed VPS. Kaisla Admin Panel should be able to bootstrap these hosts and have an administrator panel that allowed to do some of the most common tasks.

#### Solution

Kaisla Admin Panel is built with Ansible handling the bootstrapping and making changes to the hosts, Feathers providing a REST API and React.js front-end controlling Ansible through the REST API.

#### Thoughts and Credits

This was probably the most ambitious project I have ever done and it is still not finished. The app is currently only used internally by [Kuohu & Kaisla Creative](https://kuohukaisla.com) and at hosts I manage.
