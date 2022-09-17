import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchInput = () => {
  return (
    <Box position={'sticky'} zIndex={'20'} py={2} top='0' px={3} bg={'#fff'}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="teal.200" />}
        />
        <Input
          type="filled"
          placeholder="Search recipe"
          outline={"#fff"}
          fontSize={"sm"}
          fontFamily="Rubik"
        />
      </InputGroup>
    </Box>
  );
};
