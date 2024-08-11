'use client';

import {
    FormControl,
    HStack,
    Input,
    Select,
    Text,
    VStack,
    InputGroup,
    InputLeftAddon
} from '@chakra-ui/react';

export default function InvoiceDetails({register}) {
 return (
    <>
    {/* Upper Section*/}
    <HStack mt={10} ml={10} mr={10} mb={5} justifyContent="space-between" alignItems="start">

        {/* Left panel*/}
        <VStack spacing={1}>
            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Today&nbsp;Date:&nbsp;
                    <Text as="samp">
                        {Date().slice(4, 21)}
                    </Text>
                </Text>
            </FormControl>

            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Due&nbsp;Date:&nbsp;
                    <Input type="date" size="xs" {...register('dueDate')}/>
                </Text>
            </FormControl>
            
            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Payment&nbsp;Method:&nbsp;
                    <Select placeholder='Select option' size="xs" {...register('payment_method')}>
                        <option value='Credit'>Credit</option>
                        <option value='Cash'>Cash</option>
                    </Select>
                </Text>
            </FormControl>

            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Billing&nbsp;Period:&nbsp;
                    <Input type="month" size="xs" {...register('billing_start_date')}/>
                    &nbsp;to&nbsp;
                    <Input type="month" size="xs" {...register('billing_end_date')}/>
                </Text>
            </FormControl>
        </VStack>

        {/* Right panel*/}
        <VStack spacing={1} alignItems="left">
            <FormControl w={300}>
                <Text display="flex" fontSize="sm" as='b'>
                    Invoice&nbsp;Number:&nbsp;
                    <InputGroup size="xs">
                        <InputLeftAddon>INV</InputLeftAddon>
                        <Input type="number" size="xs" {...register('invoice_number')} defaultValue="1"/>
                    </InputGroup>
                </Text>
            </FormControl>

            <FormControl id='unique_id' w={300}>
                <Text display="flex" fontSize="sm" as='b'>
                    Unique&nbsp;ID:&nbsp;
                    <Text as="samp">
                    be353ac0-9079-4213-b5a2-2b994e70fd4c
                    </Text>
                </Text>
            </FormControl>
        </VStack>
    </HStack>
    </>
 )
}