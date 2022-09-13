import {
  Box,
  Stack,
  VStack,
  Image,
  Text,
  Avatar,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface RecipesCardInterface {
    id: Number;
    title: string;
    imgURL: string;
  }

export const RecipeCardHorizontal : FC<RecipesCardInterface> = ({id, title, imgURL}) => {
  return (
    <Box p={2} borderRadius={"xl"} w={'100%'} height={'122px'} boxShadow={"lg"} bg={"white"}>
      <Stack direction={"row"} height={'100%'} justify={'space-between'}>
        <Box display={"flex"} >
        <Image
          borderRadius={"xl"}
          src={imgURL}
          w={"35%"}
          height={'100%'}
          objectFit={"cover"}
          boxShadow={'md'}
          mr={2}
        />
        <VStack textAlign={'left'} p={1} align={'start'} justify={'space-between'}>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
            fontFamily={"Noto Sans"}
            color={"#0C2628"}
          >
            {title.length < 25
              ? title
              : title.slice(0, 25) + "..."}
          </Text>
          <WrapItem alignItems={"center"}>
            <Avatar
              size={"xs"}
              name="Dan Abrahmov"
              mr={2}
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize={"14px"} fontFamily={"Noto Sans"} color={"grey"}>
              James Spader
            </Text>
          </WrapItem>
        </VStack>
              </Box>
        <Box display={'grid'} justifyContent={'center'} alignItems={'center'}>
            <Button bg={'#0C2628'} _selected={{'color' : 'black',}} width={'2px'} p={0} borderRadius={'lg'}>
            <BsArrowRightShort color="white" fontSize={'30px'}/>
            </Button>
        </Box>
      </Stack>
    </Box>
  );
};
