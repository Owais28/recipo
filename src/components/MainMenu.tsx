import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";

import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <Box position={"fixed"} bottom={0} bg={"white"} width={"100vw"}>
      <HStack align={'center'} alignItems={'center'} justify={'center'}>
        <Box flex={1}>
            <Link to={'/completeRecipe'}>
          <Button colorScheme="teal" width={'100%'} px={4} py={8} _selected={
              {
                  color : 'black',
                }
            } variant="ghost">
            <HiHome fontSize={25} />
          </Button>
              </Link>
        </Box>

        <Box flex={1}>
          <Button  colorScheme="teal" width={'100%'} px={4} py={8} _selected={
            {
                color : 'black',
            }
          } variant="ghost">
            <HiHome fontSize={25} />
          </Button>
        </Box>

        <Box flex={1}>
          <Button  colorScheme="teal" width={'100%'} px={4} py={8} _selected={
            {
                color : 'black',
            }
          } variant="ghost">
            <HiHome fontSize={25} />
          </Button>
        </Box>

        <Box flex={1}>
          <Button  colorScheme="teal" width={'100%'} px={4} py={8}  _selected={
            {
                color : 'black',
            }
          } variant="ghost">
            <HiHome fontSize={25} />
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};
