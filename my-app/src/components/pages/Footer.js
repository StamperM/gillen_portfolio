import React from "react";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="fixed-bottom  container">
      <div className="row footer-ow">
        <div className="col">
        <a
          title="linkedIn"
          href="https://www.linkedin.com/in/melissa-gillen-34995a67/?trk=public-profile-join-page"
        >
         <img src='./LI-in-Bug.png' alt="linkedIn"/>
        </a>
        </div>
    <div className="col">
    <a title='githubAccount' href='https://github.com/StamperM'>
            <img src="./github-mark-white.svg" alt="github"/> 
</a>
    </div>

      </div>
    </div>
  );
}
