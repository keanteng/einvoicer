import InvoiceForm from "./components/invoice/invoiceform";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box backgroundColor="gray.300" height="auto" width="100vw">
      <InvoiceForm />
    </Box>
  );
}
