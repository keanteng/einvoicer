'use client'

import {
    FormControl,
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Box,
    HStack,
    Stack,
    Center,
    Text,
    Heading,
    VStack,
    Divider,
    Select,
    Tooltip
  } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InvoiceModal from '../pdfmodal/index';

function getData() {
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data);
    console.log(dataObj.company_name);
}

export default function InvoiceForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()
    
      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
            localStorage.setItem('invoice_data', JSON.stringify(values));
            //getData();
          }, 3000)
        })
      }

return (
    <Center>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8} p={5} direction={{ base: 'column', md: 'row' }}>
            <Box bg='white' rounded={5} boxShadow="lg" width={850}>
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
                                <Input type="date" size="xs" id='dueDate'{...register('dueDate')}/>
                            </Text>
                        </FormControl>
                        
                        <FormControl w={350}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Payment&nbsp;Method:&nbsp;
                                <Select placeholder='Select option' size="xs" id='payment_method'{...register('payment_method')}>
                                    <option value='Credit'>Credit</option>
                                    <option value='Cash'>Cash</option>
                                </Select>
                            </Text>
                        </FormControl>

                        <FormControl w={350}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Billing&nbsp;Period:&nbsp;
                                <Input type="month" size="xs" id='billing_start_date'{...register('billing_start_date')}/>
                                &nbsp;to&nbsp;
                                <Input type="month" size="xs" id='billing_end_date'{...register('billing_end_date')}/>
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
                                    <Input type="number" size="xs" id='invoice_number'{...register('invoice_number')} defaultValue="1"/>
                                </InputGroup>
                            </Text>
                        </FormControl>

                        <FormControl id='unique_id' w={300}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Unique&nbsp;ID:&nbsp;
                                <Text as="samp">
                                cb981dc8-80c8-4d54-be83-e828d94a8e35
                                </Text>
                            </Text>
                        </FormControl>
                    </VStack>
                </HStack>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={5}/>
                </Center>

                {/* Company Info Section*/}
                <Text fontSize="xl" as='b' ml={10}>
                    Company&nbsp;Info
                </Text>

                <HStack ml={10} mb={5} mt={2} justifyContent="space-between" alignItems="start">
                    {/* Left panel*/}
                    <VStack spacing={1}>
                        <FormControl w={350}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Name:&nbsp;
                                <Input type="text" size="xs" placeholder="Company Name" id='company_name'{...register('company_name')} defaultValue="Ahjin Guild"/>
                            </Text>
                        </FormControl>
                        <FormControl w={350}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Address:&nbsp;
                                <Input type="tel" size="xs" placeholder="Company Address" id='company_address'{...register('company_address')} defaultValue="Seoul, Korea"/>
                            </Text>
                        </FormControl>  
                    </VStack>  

                    {/* Right panel*/}
                    <VStack spacing={1} mr={10}>
                        <FormControl w={350}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Email:&nbsp;
                                <Input type="email" size="xs" placeholder="Company Email" id='company_email'{...register('company_email')} defaultValue="ahjin@sololeveling.com"/>
                            </Text>
                        </FormControl>
                        <FormControl w={350}>
                            <Text display="flex" fontSize="sm" as='b'>
                                Phone:&nbsp;
                                <Input type="tel" size="xs" placeholder="Company Phone" id='company_phone'{...register('company_phone')} defaultValue="2353252"/>
                            </Text>
                        </FormControl>
                    </VStack>
                </HStack>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={2}/>
                </Center>

                {/* Supplier and Buyer Information*/}
                <HStack ml={10} mb={10} mt={2} justifyContent="space-between" alignItems="start">
                    {/* Left panel*/}
                    <VStack spacing={1} alignItems="left">
                        <Text fontSize="md" as="b">Supplier&nbsp;Fields:</Text>
                        <FormControl w={350}>
                            <Tooltip label="Supplier Tax Number">
                            <Input type="text" size="xs" placeholder="TIN" id='supplier_tin'{...register('supplier_tin')} defaultValue="12345677"/>
                            </Tooltip>
                        </FormControl> 
                        <FormControl w={350}>
                            <Tooltip label="Supplier Registration Number">
                            <Input type="number" size="xs" placeholder="Registration Number" id='supplier_registration_number'{...register('supplier_registration_number')} defaultValue="666666"/>
                            </Tooltip>
                        </FormControl> 
                        <FormControl w={350}>
                            <Tooltip label="Supplier SST Code">
                            <Input type="text" size="xs" placeholder="SST" id='supplier_sst'{...register('supplier_sst')} defaultValue="666666"/>
                            </Tooltip>
                            <FormControl w={350}>
                            <Tooltip label="Supplier MSIC Code">
                            <Input type="number" size="xs" placeholder="MSIC Code" id='supplier_msic'{...register('supplier_msic')} defaultValue="666666"/>
                            </Tooltip>
                        </FormControl> 
                        <FormControl w={350}>
                            <Tooltip label="Supplier Business Activity">
                            <Input type="text" size="xs" placeholder="Business Description" id='supplier_business_description'{...register('supplier_business_description')} defaultValue="Hunters And Dungeon Management"/>
                            </Tooltip>
                        </FormControl> 
                        </FormControl> 
                    </VStack>  

                    {/* Right panel*/}
                    <VStack spacing={1} mr={10} alignItems="left">
                        <Text fontSize="md" as="b">Buyer&nbsp;Fields:</Text>
                        <FormControl w={350}>
                            <Tooltip label="Buyer Tax Number">
                            <Input type="text" size="xs" placeholder="TIN" id='buyer_tin'{...register('buyer_tin')} defaultValue="1234567"/>
                            </Tooltip>
                        </FormControl>
                        <FormControl id='buyer_name' w={350}>
                            <Tooltip label="Buyer Name">
                            <Input type="text" size="xs" placeholder="Name" id='buyer_name'{...register('buyer_name')} defaultValue="Kim Dokja"/>
                            </Tooltip>
                        </FormControl>
                        <FormControl w={350}>
                            <Tooltip label="Buyer Identification number">
                            <Input type="number" size="xs" placeholder="Identification Number" id='buyer_ic'{...register('buyer_ic')} defaultValue="666666"/>
                            </Tooltip>
                        </FormControl>
                        <FormControl w={350}>
                            <Tooltip label="Buyer Address">
                            <Input type="text" size="xs" placeholder="Address" id='buyer_address'{...register('buyer_address')} defaultValue="Seoul, Korea"/>
                            </Tooltip>
                        </FormControl>
                        <FormControl w={350}>
                            <Tooltip label="Buyer Contact Number">
                            <Input type="tel" size="xs" placeholder="Contact Number" id='buyer_contact'{...register('buyer_contact')} defaultValue="1234567"/>
                            </Tooltip>
                        </FormControl>
                        <FormControl w={350}>
                            <Tooltip label="Buyer Email">
                            <Input type="email" size="xs" placeholder="Email" id='supplier_email'{...register('supplier_email')} defaultValue="dokja@orv.com"/>
                            </Tooltip>
                        </FormControl>

                    </VStack>
                </HStack>
            </Box>

            <VStack>
            <Button backgroundColor="blue.500" w={300} type='submit' isLoading={isSubmitting}>
                Save
            </Button>
            <InvoiceModal />

            </VStack>
        </Stack>
        </form>
    </Center>
)
}