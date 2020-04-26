import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'

import './index.scss'

import Logo from '../Logo'
import facebook from '../../img/social/facebook.svg'
import twitter from '../../img/social/twitter.svg'

export default function Footer() {
  return (
    <footer>
      <Logo />
      <Container>
        <section className="menu1">
          <ul className="menu-list">
            <li>
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/">
                About
              </Link>
            </li>
          </ul>
        </section>
        <section className="menu2">
          <ul className="menu-list">
            <li>
              <Link className="navbar-item" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </Container>
      <section className="social">
        <a title="facebook" href="https://facebook.com">
          <img
            src={facebook}
            alt="Facebook"
          />
        </a>
        <a title="twitter" href="https://twitter.com">
          <img
            className="fas fa-lg"
            src={twitter}
            alt="Twitter"
          />
        </a>
      </section>
    </footer>
  )
}
