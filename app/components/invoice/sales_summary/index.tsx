import {
    Text,
    VStack,
    HStack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

function totalPrice(data) {
    const sales_data = ['quantiy', 'unit_cost']
    const fields = ["sales_data"]
    const temp = fields[0];
    let sum = 0;

    try {
        for (let i = 0; i < sales_data.length; i++) {
            const amount = data[temp][i].quantity * data[temp][i].unit_cost;
            sum += amount;
        }
    } catch (error) {
        console.log("Error: ", error)  
    }

    return sum;
}

export default function SalesSummary() {

        //const data = localStorage.getItem('invoice_data');
        //dataObj = JSON.parse(data);
        //setDataObj(dataObj);
        //const fields = ["sales_data"]
        //const temp = fields[0];
        //console.log(dataObj[temp][0].product_name);

    return (
        <VStack alignItems="end">
            <HStack w={250} justifyContent="space-between">
                <Text>
                    Total Price:
                </Text>

                <Text>

                </Text>
            </HStack>
        </VStack>
    )
}