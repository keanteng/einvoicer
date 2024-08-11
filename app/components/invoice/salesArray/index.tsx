'use client';

import {
    FormControl,
    Button,
    Input,
    HStack,
    Text,
    Center,
    Divider,
    Tooltip
} from '@chakra-ui/react';
import { useFieldArray, Controller } from 'react-hook-form';

export default function SalesArray({control, register}){
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'sales_data',
    })

    return (
        <>
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

                {fields.map((field, index) => (
                    <HStack ml={10} key={index}>
                            <HStack spacing={2}>
                            <FormControl>
                                <Input
                                    type="text"
                                    size="sm"
                                    placeholder='Product Name'
                                    defaultValue="Heavenly Demon Sword (SSS)"
                                    {...register(`sales_data.${index}.product_name`)}
                                    w={260}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    type="number"
                                    size="sm"
                                    placeholder='Quantity'
                                    defaultValue={2}
                                    {...register(`sales_data.${index}.quantity`)}
                                    w={79}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    type="text"
                                    size="sm"
                                    placeholder='SKU'
                                    defaultValue="CTN"
                                    {...register(`sales_data.${index}.sku`)}
                                    w={61}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    type="text"
                                    size="sm"
                                    placeholder='Unit Cost'
                                    defaultValue={10000}
                                    {...register(`sales_data.${index}.unit_cost`)}
                                    w={85}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    type="number"
                                    size="sm"
                                    placeholder='Discount'
                                    defaultValue={2}
                                    {...register(`sales_data.${index}.discount`)}
                                    w={85}
                                />
                            </FormControl>
                            <FormControl>
                                <Tooltip label="6% Tax by Government">
                                <Input
                                    type="number"
                                    size="sm"
                                    placeholder='Tax Rate'
                                    defaultValue={6}
                                    {...register(`sales_data.${index}.tax_rate`)}
                                    w={85}
                                    readOnly
                                />
                                </Tooltip>
                            </FormControl>
                            </HStack>

                        <Button type="button" onClick={() => remove(index)} size="sm" mr={10}>
                            Remove
                        </Button>
                    </HStack>
                ))}
            
                <Button type="button" onClick={() => append({})} size="sm" ml={10} mb={10} mt={5}>
                    Add Field
                </Button>
        </>
    )
}

