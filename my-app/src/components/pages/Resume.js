import React from 'react';
// import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import resume from './resume.pdf';
import '../styles/Resume.css'
export default function Resume(){
   
return(

<div>
<iframe className='resume' title='resume'src="https://docs.google.com/document/d/e/2PACX-1vRDTtHdWMlFUWCqHRNSslUmsXXYdhhfpwmKMUeba5lA6IJD2An_q8Fqc4nNTLsFviTIav_-nkhmOo94/pub?embedded=true"></iframe>
<Link className ='res-download' to={resume} target="resume" download>Download</Link>
</div>
);
}