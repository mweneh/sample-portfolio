import React from "react";

function MainContent() {
  return (
    <main>
      <section id="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
          quam id velit congue sodales. Integer vestibulum leo et urna
          consequat, vel consequat justo interdum. Phasellus ac libero euismod
          felis rhoncus viverra vel quis neque.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>
          Here are some of my projects:
        </p>
        <ul>
          <li>
            <a href="#">Project 1</a>
          </li>
          <li>
            <a href="#">Project 2</a>
          </li>
          <li>
            <a href="#">Project 3</a>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>
          You can contact me at:
        </p>
        <ul>
          <li>
            Email: sampleemail@example.com
          </li>
          <li>
            Phone: 123-456-7890
          </li>
          <li>
            Social Media: <a href="#">Twitter</a>, <a href="#">LinkedIn</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default MainContent;
