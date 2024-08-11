'use client'

import {
    Button,
    Box,
    Stack,
    Center,
    Text,
    VStack,
    Divider,
    Tooltip
  } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import InvoiceDetails from '../invoiceDetails';
import CompanyInfo from '../companyInfo';
import SupplierBuyer from '../supplierBuyer';
import SalesArray from '../salesArray';
import { Calculator } from '../calculator';

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
        setValue,
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
        <VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8} p={5} direction={{ base: 'column', md: 'row' }}>

            <Box bg='white' rounded={5} boxShadow="lg" width={850} mb={20}>

                <InvoiceDetails {...{register}}/>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={5}/>
                </Center>

                <Text fontSize="xl" as='b' ml={10}>
                    Company&nbsp;Info
                </Text>

                <CompanyInfo {...{register}}/>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={2}/>
                </Center>

                <SupplierBuyer {...{register}}/>

                <Center>
                    <Divider orientation='horizontal' width={800} mb={5}/>
                </Center>

                <SalesArray {...{control, register}}/>

                {/* Sales Summary Section*/}
                <Calculator {...{control, setValue}}/>
                
            </Box>

            <Box w={300}>
                <Button backgroundColor="blue.500" type='submit' isLoading={isSubmitting} textColor="white" w={300} mt={2}>
                    Save
                </Button>

                <Button w={300} mt={2} mb={2}>
                    <Tooltip label="Make Sure To Save Data Before Generating PDF">
                    <Link href="/pages/invoicePreview">
                        Generate PDF
                    </Link>
                    </Tooltip>
                </Button>

                <Text as="sub">
                    Brought to you by: eInvoicer © Kean Teng 2024
                </Text>


            </Box>
        </Stack>
        </form>
        </VStack>    
    </Center>
)
}