'use client'

import { useWatch } from 'react-hook-form';
import {
    Text,
    VStack,
    Box,
    HStack
} from '@chakra-ui/react';

function totalProductPrice(results){
    let total = 0;
    for (const key in results) {
        if(typeof results[key].unit_cost === 'string' && typeof results[key].quantity === 'string' && typeof results[key].discount === 'string') {
            const unitCost = parseFloat(results[key].unit_cost);
            const quantity = parseInt(results[key].quantity);
            const discount = parseInt(results[key].discount);
            const output = (Number.isNaN(unitCost) ? 0 : unitCost) * (Number.isNaN(quantity) ? 0 : quantity) * (1 - (Number.isNaN(discount) ? 0 : discount) / 100) * 0.94;
            total = total + (Number.isNaN(output) ? 0 : output);
        }
    }
    return total;
}

export const Calculator = ({control, setValue})=> {
    const results = useWatch({control, name: 'sales_data'});
    const subtotal = totalProductPrice(results);
    const total_exclude_tax = subtotal * 1/0.94;
    const tax_amount = subtotal * 0.06;

    setValue('subtotal', subtotal);
    setValue('total_exclude_tax', total_exclude_tax);
    setValue('tax_amount', tax_amount.toFixed(2));

    return (
        <>
        <VStack alignItems="end" mr={10} mb={10} >
            <HStack justifyContent="space-between" w={350}>
                <Text fontSize="md" as='b' ml={10}>
                    Subtotal:
                </Text>

                <Text fontSize="md" as="samp" ml={10}>
                RM&nbsp;{subtotal}
                </Text>
            </HStack>

            <HStack justifyContent="space-between" w={350}>
                <Text fontSize="md" as='b' ml={10}>
                    Total Excluding Tax:
                </Text>

                <Text fontSize="md" as="samp" ml={10}>
                RM&nbsp;{total_exclude_tax}
                </Text>
            </HStack>

            <HStack justifyContent="space-between" w={350}>
                <Text fontSize="md" as='b' ml={10}>
                    Tax Amount:
                </Text>

                <Text fontSize="md" as="samp" ml={10}>
                RM&nbsp;{tax_amount.toFixed(2)}
                </Text>
            </HStack>

            <HStack justifyContent="space-between" w={350}>
                <Text fontSize="md" as='b' ml={10}>
                    Total Including Tax:
                </Text>

                <Text fontSize="md" as="samp" ml={10}>
                RM&nbsp;{subtotal}
                </Text>
            </HStack>

            <HStack justifyContent="space-between" w={350}>
                <Text fontSize="md" as='b' ml={10}>
                    Total Payable Amount:
                </Text>

                <Text fontSize="md" as="samp" ml={10}>
                RM&nbsp;{subtotal}
                </Text>
            </HStack>





        </VStack>

        </>
    )
}