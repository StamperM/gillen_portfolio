import React from "react";
import "../styles/Footer.css"
import {Link} from "react-router-dom"
import Li from "../../images/link.png"
import GH from '../../images/github.svg'

export default function Footer() {
  return (
    <div className="fixed-bottom  container cust-footer">
      <div className="row footer-ow">
        <div className="col">
        <Link
          title="linkedIn"
          to ="https://www.linkedin.com/in/melissa-gillen-34995a67/?trk=public-profile-join-page"
        >
         <img src={Li} alt="linkedIn"/>
        </Link>
        </div>
    <div className="col">
    <Link title='githubAccount' to='https://github.com/StamperM'>
            <img src={GH} alt="github"/> 
</Link>
    </div>

      </div>
    </div>
  );
}
