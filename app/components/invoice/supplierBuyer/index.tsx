'use client';

import {
    FormControl,
    Input,
    Tooltip,
    VStack,
    HStack,
    Text
} from '@chakra-ui/react';

export default function SupplierBuyer({register}) {
    return (
        <>
        {/* Supplier and Buyer Information*/}
        <HStack ml={10} mb={10} mt={2} justifyContent="space-between" alignItems="start">
        {/* Left panel*/}
        <VStack spacing={1} alignItems="left">
            <Text fontSize="md" as="b">Supplier&nbsp;Fields:</Text>
            <FormControl w={350}>
                <Tooltip label="Supplier Tax Number">
                <Input type="text" size="xs" placeholder="TIN" {...register('supplier_tin')} defaultValue="12345677"/>
                </Tooltip>
            </FormControl> 
            <FormControl w={350}>
                <Tooltip label="Supplier Registration Number">
                <Input type="number" size="xs" placeholder="Registration Number" {...register('supplier_registration_number')} defaultValue="666666"/>
                </Tooltip>
            </FormControl> 
            <FormControl w={350}>
                <Tooltip label="Supplier SST Code">
                <Input type="text" size="xs" placeholder="SST" {...register('supplier_sst')} defaultValue="666666"/>
                </Tooltip>
                <FormControl w={350}>
                <Tooltip label="Supplier MSIC Code">
                <Input type="number" size="xs" placeholder="MSIC Code" {...register('supplier_msic')} defaultValue="666666"/>
                </Tooltip>
            </FormControl> 
            <FormControl w={350}>
                <Tooltip label="Supplier Business Activity">
                <Input type="text" size="xs" placeholder="Business Description" {...register('supplier_business_description')} defaultValue="Hunters And Dungeon Management"/>
                </Tooltip>
            </FormControl> 
            </FormControl> 
        </VStack>  

        {/* Right panel*/}
        <VStack spacing={1} mr={10} alignItems="left">
            <Text fontSize="md" as="b">Buyer&nbsp;Fields:</Text>
            <FormControl w={350}>
                <Tooltip label="Buyer Tax Number">
                <Input type="text" size="xs" placeholder="TIN" {...register('buyer_tin')} defaultValue="1234567"/>
                </Tooltip>
            </FormControl>
            <FormControl id='buyer_name' w={350}>
                <Tooltip label="Buyer Name">
                <Input type="text" size="xs" placeholder="Name" {...register('buyer_name')} defaultValue="Kim Dokja"/>
                </Tooltip>
            </FormControl>
            <FormControl w={350}>
                <Tooltip label="Buyer Identification number">
                <Input type="number" size="xs" placeholder="Identification Number" {...register('buyer_ic')} defaultValue="666666"/>
                </Tooltip>
            </FormControl>
            <FormControl w={350}>
                <Tooltip label="Buyer Address">
                <Input type="text" size="xs" placeholder="Address" {...register('buyer_address')} defaultValue="Seoul, Korea"/>
                </Tooltip>
            </FormControl>
            <FormControl w={350}>
                <Tooltip label="Buyer Contact Number">
                <Input type="tel" size="xs" placeholder="Contact Number" {...register('buyer_contact')} defaultValue="1234567"/>
                </Tooltip>
            </FormControl>
            <FormControl w={350}>
                <Tooltip label="Buyer Email">
                <Input type="email" size="xs" placeholder="Email" {...register('buyer_email')} defaultValue="dokja@orv.com"/>
                </Tooltip>
            </FormControl>

        </VStack>
    </HStack>
    </>
    )
}