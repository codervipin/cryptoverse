import {  Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";



const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Are you confused which crypto to By ?<br></br> Don't  worry we are here to help you!!<br></br>
            We provide one stop solution to all your queries related to crypto currencies.<br></br>
            On our platform we provide real time rate of all the available crypto coins with all the past records. 
          </Text>
        </VStack>

        
      </Stack>
    </Box>
  );
};

export default Footer;