import { Flex } from "@chakra-ui/react";
import React from "react";

export const Flexbox = ({ children }) => {
  return (
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
      {children}
    </Flex>
  );
};
