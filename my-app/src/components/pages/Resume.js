// import React,{useState} from "react";
// import{Document,Page} from 'react-pdf';
// import pdfFile from '../pdf/resume.pdf';

// export default function Resume(){
// //     const[numPages, setNumPages] = useState(null);
// //     const[pageNumber, setPageNumber]= useState(1);

// //     function onDocumentLoadSuccess({numPages}){
// //         setNumPages(numPages);
// //     }
// //     // used this code https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
// //     function changePage(offset){
// //         setPageNumber(prevPageNumber=> prevPageNumber+ offset);
// //     }
// //     function previousPage(){
       
// //             changePage(-1);
// //         }
// //         function nextPage(){
// //             changePage(1);
// //         }

// //         const{pdf} = props;
// //     }
// //     return(
// //         <div className="resume">
// // <Document file={pdf} onLoadSuccess = {onDocumentLoadSuccess}>
// // <Page pageNumber={pageNumber}/>
// // </Document>
// // <p>
// //     Page{pageNumber} of {numPages}
// // </p>
// // </div>>
   
//     // );

//     return(
//         <div>
//             <ReactPDF file={{
//                 URL
//             }}
//         </div>
//     )
// }