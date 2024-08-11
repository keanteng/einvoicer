'use client';

import {
    FormControl,
    Input,
    Text,
    VStack,
    HStack
} from '@chakra-ui/react';

export default function CompanyInfo({register}) {

    return (
    <>
    {/* Company Info Section*/}

    <HStack ml={10} mb={5} mt={2} justifyContent="space-between" alignItems="start">
        {/* Left panel*/}
        <VStack spacing={1}>
            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Name:&nbsp;
                    <Input type="text" size="xs" placeholder="Company Name" {...register('company_name')} defaultValue="Ahjin Guild"/>
                </Text>
            </FormControl>
            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Address:&nbsp;
                    <Input type="tel" size="xs" placeholder="Company Address" {...register('company_address')} defaultValue="Seoul, Korea"/>
                </Text>
            </FormControl>  
        </VStack>  

        {/* Right panel*/}
        <VStack spacing={1} mr={10}>
            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Email:&nbsp;
                    <Input type="email" size="xs" placeholder="Company Email" {...register('company_email')} defaultValue="ahjin@sololeveling.com"/>
                </Text>
            </FormControl>
            <FormControl w={350}>
                <Text display="flex" fontSize="sm" as='b'>
                    Phone:&nbsp;
                    <Input type="tel" size="xs" placeholder="Company Phone" {...register('company_phone')} defaultValue="2353252"/>
                </Text>
            </FormControl>
        </VStack>
    </HStack>
    </>
    );
}