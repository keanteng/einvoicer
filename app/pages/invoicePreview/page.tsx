'use client';

import React, { useEffect, useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import {Stack} from '@chakra-ui/react';

// company info text adder

function company_info_text(page) {
    // fields limited to this function only
    const fields = [
        "company_name",
        "company_address",
        "company_phone",
        "company_email",
    ]

    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < fields.length; i++) {
        const temp = fields[i];
        page.drawText(dataObj[temp], {
            x: 129,
            y: 699 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
    }
}

// supplier info text adder

function supplier_info_text(page) {
    // fields limited to this function only
    const fields = [
        "supplier_tin",
        'supplier_registration_number',
        'supplier_sst',
        'supplier_msic',
        'supplier_business_description'
    ]

    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < fields.length; i++) {
        const temp = fields[i];
        page.drawText(dataObj[temp], {
            x: 195,
            y: 623 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
    }
}

// payment info text adder

function payment_info_text(page) {
    // fields limited to this function only
    const fields = [
        "payment_method",
        "billing_start_date",
        "billing_end_date",
    ]

    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < fields.length; i++) {

        if (i === 1){
            page.drawText("Monthly", {
                x: 130,
                y: 516 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else if (i === 0) {
            const temp = fields[i];
            
            page.drawText(dataObj[temp], {
                x: 130,
                y: 516 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else {
            const temp = dataObj[fields[i-1]] + " to " + dataObj[fields[i]];
            page.drawText(temp, {
                x: 130,
                y: 516 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        }
    }
}

// invoice info text adder

function invoice_info_text(page) {
    // fields limited to this function only
    const fields = [
        "invoice_number",
    ]

    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < 2; i++) {
        if (i === 1){
            const temp = fields[0];
            page.drawText(dataObj[temp], {
                x: 444,
                y: 714 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else {
            page.drawText("Page 1 of 1", {
                x: 444,
                y: 714 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        }

    }
}

// invoice validation text adder

function invoice_validation_text(page){

    page.drawText("cb981dc8-80c8-4d54-be83-e828d", {
        x: 444,
        y: 669 - 0*16,
        size: 10,
        color: rgb(0, 0, 0),
    });

    const temp = Date().slice(4, 21)
    page.drawText(temp, {
        x: 444,
        y: 669 - 1*16,
        size: 10,
        color: rgb(0, 0, 0),
    });
}

// buyer info text adder
function buyer_info_text(page) {
    // fields limited to this function only
    const fields = [
        "buyer_tin",
        "buyer_name",
        "buyer_ic",
        "buyer_address",
        "buyer_contact",
        "buyer_email",
    ]

    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < fields.length; i++) {
        const temp = fields[i];
        page.drawText(dataObj[temp], {
            x: 444,
            y: 625 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
    }
}

function item_info_text(page) {
    // fields limited to this function only
    const fields = [
        "product_name",
        "quantity",
        "unit_cost",
        "discount",
        "tax_rate",
    ]

    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');
    const sales_dataObj = dataObj['sales_data'];
    //console.log(sales_dataObj[0].product_name);

    for (let i = 0; i < sales_dataObj.length; i++) {
        const temp = fields[0];
        const temp1 = fields[1];
        const temp2 = fields[2];
        const temp3 = fields[3];
        const temp4 = fields[4];
        //product name
        page.drawText(sales_dataObj[i][temp], {
            x: 45,
            y: 437 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
        // quantity
        page.drawText(sales_dataObj[i][temp1], {
            x: 217,
            y: 437 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
        // unit cost
        page.drawText("RM " + sales_dataObj[i][temp2], {
            x: 253,
            y: 437 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
        // discount
        page.drawText(sales_dataObj[i][temp3] + "%", {
            x: 374,
            y: 437 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
        // tax rate
        page.drawText(sales_dataObj[i][temp4] + "%", {
            x: 419,
            y: 437 - i*16,
            size: 10,
            color: rgb(0, 0, 0),
        });
    }
}

function total_info_text(page) {
    const fields = [
        "subtotal",
        "total_exclude_tax",
        "tax_amount"
    ]

    // load data
    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < 5; i++) {
        const temp = fields[0];
        const temp1 = fields[1];
        const temp2 = fields[2];
        if (i === 0 || i === 3 || i === 4){
            page.drawText("RM " + dataObj[temp], {
                x: 481,
                y: 150 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else if (i === 1){
            page.drawText("RM " + dataObj[temp1], {
                x: 481,
                y: 150 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else {
            page.drawText("RM " + dataObj[temp2], {
                x: 481,
                y: 150 - i*16,
                size: 10,
                color: rgb(0, 0, 0),
            });
        }
    }
}

function tax_table(page) {
    const fields = [
        "total_exclude_tax",
        "tax_amount"
    ]

    // load data
    // load data
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data || '{}');

    for (let i = 0; i < 4; i++) {
        const temp = fields[0];
        const temp1 = fields[1];
        if (i === 0){
            page.drawText("RM " + dataObj[temp], {
                x: 47,
                y: 132,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else if (i === 1){
            page.drawText("SST", {
                x: 136,
                y: 132,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else if (i === 2){
            page.drawText("6%", {
                x: 212,
                y: 132,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } else {
            page.drawText("RM " + dataObj[temp1], {
                x: 255,
                y: 132,
                size: 10,
                color: rgb(0, 0, 0),
            });
        } 
    }
}



const InvoicePreview = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const createPdf = async () => {
          // creating a new PDF document
            //const pdfDoc = await PDFDocument.create();
            //const page = pdfDoc.addPage([600, 400]);

          // using an existing document
          //const link = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
          const existingPdfBytes = await fetch('/einvoicer_template.pdf').then(res => res.arrayBuffer())
          const pdfDoc = await PDFDocument.load(existingPdfBytes)
          const pages = pdfDoc.getPages()
          const firstPage = pages[0]
          const { width, height } = firstPage.getSize()

            company_info_text(firstPage);
            supplier_info_text(firstPage);
            payment_info_text(firstPage);
            invoice_info_text(firstPage);
            invoice_validation_text(firstPage);
            buyer_info_text(firstPage);
            item_info_text(firstPage);
            total_info_text(firstPage);
            tax_table(firstPage);

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
        };

        createPdf();
    }, []);

    return (
        <>
        <Stack alignItems="center">
            {pdfUrl && <iframe src={pdfUrl} width="1180px" height="1000px" />}
        </Stack>
        </>
    );
};

export default InvoicePreview;
