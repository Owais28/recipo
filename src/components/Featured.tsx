import { Box, Text, Flex, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import { FeaturedCard } from "./cards/FeaturedCard";

export const Featured = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);
  
  const arrayPseudo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box maxW="md" overflow="hidden">
      <Text
        fontSize="lg"
        fontFamily={"Rubik"}
        color="#0C2628"
        fontWeight={"semibold"}
      >
        Featured
      </Text>
      <Box width="100%">
        <Flex
          py={2}
          gap={3}
          css={{
            "&::-webkit-scrollbar": {
              width: "1px",
              height: "0px",
            },
            "&::-webkit-scrollbar-track": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#8ccef0",
              borderRadius: "24px",
            },
          }}
          overflowX={"scroll"}
          wrap={"nowrap"}
          height={"230px"}
        >
          {arrayPseudo.map((item, index) => (
            <FeaturedCard loading={loading} key={index} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

// colors
// Text : #0C2628
// bg-grey : #F1F5F5
// primary : #71B9BE
