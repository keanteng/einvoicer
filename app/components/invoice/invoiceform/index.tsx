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
import { useForm, useFieldArray } from 'react-hook-form';
import SalesSummary from '../sales_summary';

// check if data is stored in local storage
function getData() {
    const data = localStorage.getItem('invoice_data');
    const dataObj = JSON.parse(data);
    console.log(dataObj.company_name);
}

export default function InvoiceForm() {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors, isSubmitting },
      } = useForm()

      const { fields, append, remove } = useFieldArray({
        control,
        name: 'sales_data',
    })
    
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
        <VStack>
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

                <Center>
                    <Divider orientation='horizontal' width={800} mb={5}/>
                </Center>

                {/* Sales Order Section*/}
                <Text fontSize="xl" as='b' mb={2} ml={10}>
                    Sales&nbsp;Order
                </Text>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={2} mt={2}/>
                </Center>

                <HStack spacing={2} mb={2} ml={10}>
                    <Text w={260} as='b' fontSize="sm">
                        Product Name
                    </Text>

                    <Text w={79} as='b' fontSize="sm">
                        Quantity
                    </Text>

                    <Text w={61} as='b' fontSize="sm">
                        SKU
                    </Text>

                    <Text w={85} as='b' fontSize="sm">
                        Unit Cost
                    </Text>

                    <Text w={85} as='b' fontSize="sm">
                        Discount (%)
                    </Text>

                    <Text w={85} as='b' fontSize="sm">
                        Tax Rate (%)
                    </Text>

                </HStack>

                {fields.map((id, index) => (
                    <HStack ml={10}>
                        <FormControl key={id}>
                            <HStack spacing={2}>
                            <Input
                                type="text"
                                size="sm"
                                placeholder='Product Name'
                                defaultValue="Heavenly Demon Sword (SSS)"
                                {...register(`sales_data.${index}.product_name`)}
                                w={260}
                            />

                            <Input
                                type="number"
                                size="sm"
                                placeholder='Quantity'
                                defaultValue={2}
                                {...register(`sales_data.${index}.quantity`)}
                                w={79}
                            />

                            <Input
                                type="text"
                                size="sm"
                                placeholder='SKU'
                                defaultValue="CTN"
                                {...register(`sales_data.${index}.sku`)}
                                w={61}
                            />

                            <Input
                                type="number"
                                size="sm"
                                placeholder='Unit Cost'
                                defaultValue={10000}
                                {...register(`sales_data.${index}.unit_cost`)}
                                w={85}
                            />
  
                            <Input
                                type="number"
                                size="sm"
                                placeholder='Discount'
                                defaultValue={2}
                                {...register(`sales_data.${index}.discount`)}
                                w={85}
                            />

                            <Input
                                type="number"
                                size="sm"
                                placeholder='Tax Rate'
                                defaultValue={6}
                                {...register(`sales_data.${index}.tax_rate`)}
                                w={85}
                            />
                            </HStack>
                        </FormControl>

                        <Button type="button" onClick={() => remove(index)} size="sm">
                            Remove
                        </Button>
                    </HStack>
                ))}
            
                <Button type="button" onClick={() => append({})} size="sm" ml={10} mb={10} mt={5}>
                    Add Field
                </Button>
                {/* Sales Summary Section*/}
                <SalesSummary/>
                
            </Box>
            <Button backgroundColor="blue.500" w={300} type='submit' isLoading={isSubmitting}>
                Save
            </Button>

        </Stack>
        </form>

        </VStack>

        
    </Center>
)
}