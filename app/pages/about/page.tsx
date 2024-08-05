'use client';

import React, { useEffect, useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const About = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data);
    const x = dataObj.company_name;


    useEffect(() => {
        const createPdf = async () => {
          // creating a new PDF document
            //const pdfDoc = await PDFDocument.create();
            //const page = pdfDoc.addPage([600, 400]);

          // using an existing document
          const link = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
          const existingPdfBytes = await fetch(link).then(res => res.arrayBuffer())
          const pdfDoc = await PDFDocument.load(existingPdfBytes)
          const pages = pdfDoc.getPages()
          const firstPage = pages[0]
          const { width, height } = firstPage.getSize()

            firstPage.drawText('Hello, world!', {
                x: 50,
                y: 350,
                size: 30,
                color: rgb(0, 0, 0),
            });

            firstPage.drawText(x, {
                x: 50,
                y: 300,
                size: 30,
                color: rgb(0, 0, 0),
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
        };

        createPdf();
    }, []);

    return (
        <div>
            {pdfUrl && <iframe src={pdfUrl} width="800px" height="600px" />}
        </div>
    );
};

export default About;
