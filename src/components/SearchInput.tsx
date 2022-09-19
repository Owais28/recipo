import { Box, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FC } from "react";
import { FiSearch } from "react-icons/fi";

interface searchPropsIterFace {
  value : string,
  onChange : any,
  props : any
}

export const SearchInput = ({value, onChange, ...props } : any) => {

  function handleSearch(event){
    props.fetchRecipes(value)
    // console.log(value)
  }
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
          value={value}
          onChange={onChange}
        />
        {/* <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="teal.200" />}
        /> */}
        <Button colorScheme='teal' fontSize={'sm'} ml={'4'} fontWeight={'regular'} variant='solid' onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
    </Box>
  );
};
