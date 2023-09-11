// // // // // // import React, { useRef } from 'react';
// // // // // // import html2pdf from 'html2pdf.js';

// // // // // // const HtmlToPdfDownload = () => {
// // // // // //   const contentRef = useRef(null);

// // // // // //   const convertToPdfAndDownload = () => {
// // // // // //     const content = contentRef.current;

// // // // // //     if (!content) return;

// // // // // //     const pdfOptions = {
// // // // // //       margin: 10,
// // // // // //       filename: 'converted.pdf',
// // // // // //       image: { type: 'jpeg', quality: 0.98 },
// // // // // //       html2canvas: { scale: 2 },
// // // // // //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
// // // // // //     };

// // // // // //     html2pdf().from(content).set(pdfOptions).outputPdf().then(pdf => {
// // // // // //       const blob = new Blob([pdf], { type: 'application/pdf' });
// // // // // //       const url = URL.createObjectURL(blob);
// // // // // //       const link = document.createElement('a');
// // // // // //       link.href = url;
// // // // // //       link.download = pdfOptions.filename;
// // // // // //       link.click();
// // // // // //       URL.revokeObjectURL(url);
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div ref={contentRef}>
// // // // // //         {/* Your HTML content to be converted */}
// // // // // //         <h1>Hello, this is a PDF conversion example</h1>
// // // // // //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// // // // // //       </div>
// // // // // //       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HtmlToPdfDownload;
// // // // // // import React, { useRef, useState } from 'react';
// // // // // // import html2pdf from 'html2pdf.js';

// // // // // // const HtmlToPdfDownload = () => {
// // // // // //   const contentRef = useRef(null);
// // // // // //   const [currentPage, setCurrentPage] = useState(1);

// // // // // //   const totalPages = 3; // Total number of pages

// // // // // //   const convertToPdfAndDownload = () => {
// // // // // //     const content = contentRef.current;

// // // // // //     if (!content) return;

// // // // // //     const pdfOptions = {
// // // // // //       margin: 10,
// // // // // //       filename: 'converted.pdf',
// // // // // //       image: { type: 'jpeg', quality: 0.98 },
// // // // // //       html2canvas: { scale: 2 },
// // // // // //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
// // // // // //     };

// // // // // //     const tempCurrentPage = currentPage; // Store the current page
// // // // // //     const contentClone = content.cloneNode(true); // Clone content for each page
// // // // // //     const contentDivs = contentClone.children;

// // // // // //     for (let i = 0; i < contentDivs.length; i++) {
// // // // // //       contentDivs[i].style.display = i + 1 === tempCurrentPage ? 'block' : 'none';
// // // // // //     }

// // // // // //     html2pdf().from(contentClone).set(pdfOptions).outputPdf().then(pdf => {
// // // // // //       const blob = new Blob([pdf], { type: 'application/pdf' });
// // // // // //       const url = URL.createObjectURL(blob);
// // // // // //       const link = document.createElement('a');
// // // // // //       link.href = url;
// // // // // //       link.download = pdfOptions.filename;
// // // // // //       link.click();
// // // // // //       URL.revokeObjectURL(url);
// // // // // //     });
// // // // // //   };

// // // // // //   const handlePageChange = direction => {
// // // // // //     let nextPage = currentPage + direction;

// // // // // //     if (nextPage < 1) {
// // // // // //       nextPage = totalPages;
// // // // // //     } else if (nextPage > totalPages) {
// // // // // //       nextPage = 1;
// // // // // //     }

// // // // // //     setCurrentPage(nextPage);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div ref={contentRef}>
// // // // // //         {/* Page 1 */}
// // // // // //         <div style={{ display: currentPage === 1 ? 'block' : 'none' }}>
// // // // // //           <h1>Hello, this is Page 1</h1>
// // // // // //           <p>Content for Page 1</p>
// // // // // //         </div>

// // // // // //         {/* Page 2 */}
// // // // // //         <div style={{ display: currentPage === 2 ? 'block' : 'none' }}>
// // // // // //           <h1>Hello, this is Page 2</h1>
// // // // // //           <p>Content for Page 2</p>
// // // // // //         </div>

// // // // // //         {/* Page 3 */}
// // // // // //         <div style={{ display: currentPage === 3 ? 'block' : 'none' }}>
// // // // // //           <h1>Hello, this is Page 3</h1>
// // // // // //           <p>Content for Page 3</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
// // // // // //       <button onClick={() => handlePageChange(-1)}>Previous Page</button>
// // // // // //       <button onClick={() => handlePageChange(1)}>Next Page</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HtmlToPdfDownload;
// // // // // // import React, { useRef } from 'react';
// // // // // // import html2pdf from 'html2pdf.js';

// // // // // // const HtmlToPdfDownload = () => {
// // // // // //   const contentRef = useRef(null);

// // // // // //   const convertToPdfAndDownload = async () => {
// // // // // //     const content = contentRef.current;

// // // // // //     if (!content) return;

// // // // // //     const pdfOptions = {
// // // // // //       margin: 10,
// // // // // //       minHeight:"min-content",
// // // // // //       maxHeight:"auto",
// // // // // //       filename: 'converted.pdf',
// // // // // //       image: { type: 'jpeg', quality: 0.98 },
// // // // // //       html2canvas: { scale: 2 },
// // // // // //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
// // // // // //     };

// // // // // //     const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();

// // // // // //     const blob = new Blob([pdf], { type: 'application/pdf' });
// // // // // //     const url = URL.createObjectURL(blob);
// // // // // //     const link = document.createElement('a');
// // // // // //     link.href = url;
// // // // // //     link.download = pdfOptions.filename;
// // // // // //     link.click();
// // // // // //     URL.revokeObjectURL(url);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div ref={contentRef}>
// // // // // //         <div>
// // // // // //           <h1>Hello, this is Page 1</h1>
// // // // // //           <p>Content for Page 1</p>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <h1>Hello, this is Page 2</h1>
// // // // // //           <p>Content for Page 2</p>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <h1>Hello, this is Page 3</h1>
// // // // // //           <p>Content for Page 3</p>
// // // // // //         </div>
// // // // // //         {/* Add more <div> elements for additional pages */}
// // // // // //       </div>
// // // // // //       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HtmlToPdfDownload;
// // // // // import React, { useRef } from 'react';
// // // // // import html2pdf from 'html2pdf.js';

// // // // // const HtmlToPdfDownload = () => {
// // // // //   const contentRef = useRef(null);

// // // // //   const convertToPdfAndDownload = async () => {
// // // // //     const content = contentRef.current;

// // // // //     if (!content) return;

// // // // //     const pdfOptions = {
// // // // //       margin: 10,
// // // // //       filename: 'converted.pdf',
// // // // //       image: { type: 'jpeg', quality: 0.98 },
// // // // //       html2canvas: { scale: 2 },
// // // // //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
// // // // //     };

// // // // //     const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();

// // // // //     const blob = new Blob([pdf], { type: 'application/pdf' });
// // // // //     const url = URL.createObjectURL(blob);
// // // // //     const link = document.createElement('a');
// // // // //     link.href = url;
// // // // //     link.download = pdfOptions.filename;
// // // // //     link.click();
// // // // //     URL.revokeObjectURL(url);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <div style={{ display: 'none' }} ref={contentRef}>
// // // // //         {/* Container for all the page content */}
// // // // //         <div>
// // // // //           <div>
// // // // //             <h1>Hello, this is Page 1</h1>
// // // // //             <p>Content for Page 1</p>
// // // // //           </div>
// // // // //           <div>
// // // // //             <h1>Hello, this is Page 2</h1>
// // // // //             <p>Content for Page 2</p>
// // // // //           </div>
// // // // //           <div>
// // // // //             <h1>Hello, this is Page 3</h1>
// // // // //             <p>Content for Page 3</p>
// // // // //           </div>
// // // // //           {/* Add more <div> elements for additional pages */}
// // // // //         </div>
// // // // //       </div>
// // // // //       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HtmlToPdfDownload;

// // // // import React, { useRef } from 'react';
// // // // import html2pdf from 'html2pdf.js';

// // // // const PageContent = ({ title, content }) => (
// // // //   <div>
// // // //     <h1>{title}</h1>
// // // //     <p>{content}</p>
// // // //   </div>
// // // // );

// // // // const HtmlToPdfDownload = () => {
// // // //   const contentRef = useRef(null);

// // // //   const convertToPdfAndDownload = async () => {
// // // //     const content = contentRef.current;

// // // //     if (!content) return;

// // // //     const pdfOptions = {
// // // //       margin: 10,
// // // //       filename: 'converted.pdf',
// // // //       image: { type: 'jpeg', quality: 0.98 },
// // // //       html2canvas: { scale: 2 },
// // // //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
// // // //     };

// // // //     const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();

// // // //     const blob = new Blob([pdf], { type: 'application/pdf' });
// // // //     const url = URL.createObjectURL(blob);
// // // //     const link = document.createElement('a');
// // // //     link.href = url;
// // // //     link.download = pdfOptions.filename;
// // // //     link.click();
// // // //     URL.revokeObjectURL(url);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div style={{ display: 'none' }} ref={contentRef}>
// // // //         {/* Container for all the page content */}
// // // //         <div>
// // // //           <PageContent title="Page 1" content="Content for Page 1" />
// // // //           <PageContent title="Page 2" content="Content for Page 2" />
// // // //           <PageContent title="Page 3" content="Content for Page 3" />
// // // //           {/* Add more <PageContent> components for additional pages */}
// // // //         </div>
// // // //       </div>
// // // //       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HtmlToPdfDownload;


// // // import React, { useRef, useState } from 'react';
// // // import html2pdf from 'html2pdf.js';

// // // const PageContent = ({ title, content }) => (
// // //   <div>
// // //     <h1>{title}</h1>
// // //     <p>{content}</p>
// // //   </div>
// // // );

// // // const HtmlToPdfDownload = () => {
// // //   const contentRef = useRef(null);
// // //   const [currentPage, setCurrentPage] = useState(1);

// // //   const totalPages = 3; // Total number of pages

// // //   const convertToPdfAndDownload = async () => {
// // //     const content = contentRef.current;

// // //     if (!content) return;

// // //     const pdfOptions = {
// // //       margin: 10,
// // //       filename: 'converted.pdf',
// // //       image: { type: 'jpeg', quality: 0.98 },
// // //       html2canvas: { scale: 2 },
// // //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
// // //     };

// // //     const tempCurrentPage = currentPage;
// // //     const contentClone = content.cloneNode(true);
// // //     const contentDivs = contentClone.children;

// // //     for (let i = 0; i < contentDivs.length; i++) {
// // //       contentDivs[i].style.display = i + 1 === tempCurrentPage ? 'block' : 'none';
// // //     }

// // //     const pdf = await html2pdf().from(contentClone).set(pdfOptions).outputPdf();

// // //     const blob = new Blob([pdf], { type: 'application/pdf' });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement('a');
// // //     link.href = url;
// // //     link.download = pdfOptions.filename;
// // //     link.click();
// // //     URL.revokeObjectURL(url);
// // //   };

// // //   const handlePageChange = direction => {
// // //     let nextPage = currentPage + direction;

// // //     if (nextPage < 1) {
// // //       nextPage = totalPages;
// // //     } else if (nextPage > totalPages) {
// // //       nextPage = 1;
// // //     }

// // //     setCurrentPage(nextPage);
// // //   };

// // //   return (
// // //     <div>
// // //       <div ref={contentRef}>
// // //         {/* Page 1 */}
// // //         <div style={{ display: currentPage === 1 ? 'block' : 'none' }}>
// // //           <PageContent title="Page 1" content="Content for Page 1" />
// // //         </div>

// // //         {/* Page 2 */}
// // //         <div style={{ display: currentPage === 2 ? 'block' : 'none' }}>
// // //           <PageContent title="Page 2" content="Content for Page 2" />
// // //         </div>

// // //         {/* Page 3 */}
// // //         <div style={{ display: currentPage === 3 ? 'block' : 'none' }}>
// // //           <PageContent title="Page 3" content="Content for Page 3" />
// // //         </div>
// // //         {/* Add more <div> sections for additional pages */}
// // //       </div>
// // //       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
// // //       <button onClick={() => handlePageChange(-1)}>Previous Page</button>
// // //       <button onClick={() => handlePageChange(1)}>Next Page</button>
// // //     </div>
// // //   );
// // // };

// // // export default HtmlToPdfDownload;
// // import React, { useRef, useState } from 'react';
// // import html2pdf from 'html2pdf.js';

// // const PageContent = ({ title, content }) => (
// //   <div>
// //     <h1>{title}</h1>
// //     <p>{content}</p>
// //   </div>
// // );
//gggggggggggggggggggggggggggggggggggggggg//
// const HtmlToPdfDownload = () => {
//   const contentRef = useRef(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = 3; // Total number of pages

//   const convertToPdfAndDownload = async () => {
//     const content = contentRef.current;

//     if (!content) return;

//     const pdfOptions = {
//       margin: 10,
//       filename: 'converted.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//     };

//     const tempCurrentPage = currentPage;
//     const contentClone = content.cloneNode(true);
//     const contentDivs = contentClone.children;

//     for (let i = 0; i < contentDivs.length; i++) {
//       contentDivs[i].style.display = i + 1 === tempCurrentPage ? 'block' : 'none';
//     }

//     const pdf = await html2pdf().from(contentClone).set(pdfOptions).outputPdf();

//     const blob = new Blob([pdf], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = pdfOptions.filename;
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   const handlePageChange = direction => {
//     let nextPage = currentPage + direction;

//     if (nextPage < 1) {
//       nextPage = totalPages;
//     } else if (nextPage > totalPages) {
//       nextPage = 1;
//     }

//     setCurrentPage(nextPage);
//   };

//   return (
//     <div>
//       <div ref={contentRef}>
//         {/* Page 1 */}
//         <div style={{ display: currentPage === 1 ? 'block' : 'none' }}>
//           <PageContent title="Page 1" content="Content for Page 1" />
//         </div>

//         {/* Page 2 */}
//         <div style={{ display: currentPage === 2 ? 'block' : 'none' }}>
//           <PageContent title="Page 2" content="Content for Page 2" />
//         </div>

//         {/* Page 3 */}
//         <div style={{ display: currentPage === 3 ? 'block' : 'none' }}>
//           <PageContent title="Page 3" content="Content for Page 3" />
//         </div>
//         {/* Add more <div> sections for additional pages */}
//       </div>
//       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
//       <button onClick={() => handlePageChange(-1)}>Previous Page</button>
//       <button onClick={() => handlePageChange(1)}>Next Page</button>
//     </div>
//   );
// };

// export default HtmlToPdfDownload;
//ggggggggggggggggggggggggggggggggg//
// import React, { useRef } from 'react';
// import html2pdf from 'html2pdf.js';

// const HtmlToPdfDownload = () => {
//   const totalPages = 3; // Total number of pages
//   const contentRefs = Array.from({ length: totalPages }, () => useRef(null));

//   const convertToPdfAndDownload = async () => {
//     const pdfOptions = {
//       margin: 2,
//       filename: 'converted.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//     };

//     const pdfPromises = contentRefs.map(async (contentRef, pageIndex) => {
//       const content = contentRef.current;
//       if (!content) return;

//       const contentClone = content.cloneNode(true);
//       const contentDivs = contentClone.children;

//       for (let i = 0; i < contentDivs.length; i++) {
//         contentDivs[i].style.display = i + 1 === pageIndex + 1 ? 'block' : 'none';
//       }

//       const pdf = await html2pdf().from(contentClone).set(pdfOptions).outputPdf();
//       return pdf;
//     });

//     const pdfs = await Promise.all(pdfPromises);

//     const mergedPdf = new Blob(pdfs, { type: 'application/pdf' });
//     const url = URL.createObjectURL(mergedPdf);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = pdfOptions.filename;
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       {contentRefs.map((contentRef, index) => (
//         <div key={index} ref={contentRef}>
//           {/* Page {index + 1} content */}
//           <h1>Page {index + 1}</h1>
//           <p>This is content for Page {index + 1}.</p>
//         </div>
//       ))}
//       <button onClick={convertToPdfAndDownload}>Convert and Download PDF</button>
//     </div>
//   );
// };

// export default HtmlToPdfDownload;




