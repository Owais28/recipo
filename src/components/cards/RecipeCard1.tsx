import {
  Box,
  Image,
  Text,
  Wrap,
  WrapItem,
  VStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface PopularRecipesCardInterface {
  id: Number;
  title: string;
  imgURL: string;
  calories: Number;
  protein: string;
  fat: string;
  carbs: string;
}
export const RecipeCard1: FC<PopularRecipesCardInterface> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      onClick={onOpen}
      data-recipe-id={props.id}
      padding={3}
      width={"60%"}
      minW={"60%"}
      boxShadow={"lg"}
      borderRadius={"2xl"}
    >
      <VStack gap={2}>
        <Image
          borderRadius={"2xl"}
          objectFit={"cover"}
          boxSize={"100%"}
          src={props.imgURL}
        />
        <Text
          mb={2}
          fontSize={"sm"}
          fontWeight={"bold"}
          fontFamily={"Noto Sans"}
          color={"#0F2732"}
        >
          {props.title}
        </Text>

        <Wrap>
          <WrapItem>
            <Text color={"grey"} fontSize={"sm"}>
              {`${props.calories} calories &bull; ${props.carbs} carbs`}
            </Text>
          </WrapItem>
        </Wrap>
      </VStack>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
