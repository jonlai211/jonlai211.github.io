import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Kaijie Lai</h2>
        <p>
          <a href="mailto:jonlai11@seas.upenn.edu">jonlai11@seas.upenn.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I’m Jonathan. I am currently studying at the
        <a href="https://www.seas.upenn.edu/">University of Pennsylvania</a> and am an alumnus of
        <a href="https://www.liverpool.ac.uk/computer-science/">University of Liverpool</a>
        and the
        <a href="https://www.xjtlu.edu.cn/en/study/departments/school-of-advanced-technology">Xi&#39;an Jiaotong-Liverpool University</a>.
      </p>
      <p>
        I’m an engineer by training, a software developer by profession,
        and a creative artist at heart.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
