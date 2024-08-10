{/*'use client'
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Stack, Box, HStack, FormControl, Input, Button, VStack, Text, Center, Divider } from '@chakra-ui/react';
import SalesSummary from '../sales_summary';

const InvoiceData = () => {
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
            localStorage.setItem('sales_data', JSON.stringify(values));
            //getData();
          }, 3000)
        })
      }

    return (
        <Stack spacing={8} mb={20} direction={{ base: 'column', md: 'row' }}>

        <Box p={10} bg='white' rounded={5} boxShadow="lg" width={850}>
        <form onSubmit={handleSubmit(onSubmit)}>
                
                <FormControl>
                    <Input
                        type="text"
                        size="xs"
                        placeholder='Name'
                        {...register('name')}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        type="email"
                        size="xs"
                        id="email"
                        placeholder='Email'
                        {...register('email')}
                    />
                </FormControl>
                
                <Text fontSize="xl" as='b' mb={2}>
                    Sales&nbsp;Order
                </Text>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={2} mt={2}/>
                </Center>

                <HStack spacing={2} mb={2}>
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
                    <HStack key={id} spacing={2}>
                        <FormControl key={id} w={260}>
                            <Input
                                type="text"
                                size="sm"
                                placeholder='Product Name'
                                defaultValue="Heavenly Demon Sword (SSS)"
                                {...register(`sales_data.${index}.product_name`)}
                            />
                        </FormControl>
                        
                        <FormControl key={id} w={79}>
                            <Input
                                type="number"
                                size="sm"
                                placeholder='Quantity'
                                defaultValue={2}
                                {...register(`sales_data.${index}.quantity`)}
                            />
                        </FormControl>

                        <FormControl key={id} w={61}>
                            <Input
                                type="text"
                                size="sm"
                                placeholder='SKU'
                                defaultValue="CTN"
                                {...register(`sales_data.${index}.sku`)}
                            />
                        </FormControl>

                        <FormControl key={id} w={85}>
                            <Input
                                type="number"
                                size="sm"
                                placeholder='Unit Cost'
                                defaultValue={10000}
                                {...register(`sales_data.${index}.unit_cost`)}
                            />
                        </FormControl>

                        <FormControl key={id} w={85}>
                            <Input
                                type="number"
                                size="sm"
                                placeholder='Discount'
                                defaultValue={2}
                                {...register(`sales_data.${index}.discount`)}
                            />
                        </FormControl>

                        <FormControl key={id} w={85}>
                            <Input
                                type="number"
                                size="sm"
                                placeholder='Tax Rate'
                                defaultValue={6}
                                {...register(`sales_data.${index}.tax_rate`)}
                            />
                        </FormControl>

                        <Button type="button" onClick={() => remove(index)} size="sm">
                            Remove
                        </Button>
                    </HStack>
                ))}
            
            <HStack mt={3}>
                <Button type="button" onClick={() => append({})} size="sm">
                    Add Field
                </Button>
                <Button type="submit" isLoading={isSubmitting} size="sm">
                    Save
                </Button>
            </HStack>
            </form>

            <SalesSummary />
        </Box>

        </Stack>
    );
};

export default InvoiceData;
*/}