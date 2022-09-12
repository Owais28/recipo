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
import {AiOutlineFire} from 'react-icons/ai'
import CheckCircleIcon from '@chakra-ui/icon'
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
      boxShadow={"md"}
      borderRadius={"2xl"}
    >
      <VStack gap={2}>
        <Image
          borderRadius={"2xl"}
          objectFit={"cover"}
          boxSize={"100%"}
          src={props.imgURL}
          shadow={"base"}
        />
        <Text
          mb={2}
          fontSize={"sm"}
          fontWeight={"bold"}
          fontFamily={"Noto Sans"}
          color={"#0C2628"}
        >
          {
          props.title.length < 40 ? props.title : props.title.slice(0, 37) + '...'          }
        </Text>

        <Wrap>
          <WrapItem>
            <Text color={"grey"} display={"flex"} alignItems={"center"} fontSize={"sm"}>
            <AiOutlineFire/> {`
              ${props.calories}`} calories &bull; {`${props.carbs} carbs`}
            </Text>
          </WrapItem>
        </Wrap>
      </VStack>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius={"2xl"}>
          <DrawerHeader borderBottomWidth="1px" display={"flex"} justifyContent={"space-between"} alignItems={"center"}>Recipe Info
          <Button colorScheme='teal' variant='ghost'>
          <CheckCircleIcon w={3}/>
          </Button>
          </DrawerHeader>
          <DrawerBody>
          <VStack gap={2}>
        {/* <Image
          borderRadius={"2xl"}
          objectFit={"cover"}
          boxSize={"100%"}
          src={props.imgURL}
          shadow={"base"}
        /> */}
        <Text
          mb={2}
          fontSize={"large"}
          fontWeight={"bold"}
          fontFamily={"Noto Sans"}
          color={"#0C2628"}
        >
          {
          props.title.length < 40 ? props.title : props.title.slice(0, 37) + '...'          }
        </Text>

        <Wrap>
          <WrapItem>
            <Text color={"grey"} display={"flex"} alignItems={"center"} fontSize={"sm"}>
            <AiOutlineFire/> {`
              ${props.calories}`} calories &bull; {`${props.carbs} carbs`}
            </Text>
          </WrapItem>
        </Wrap>
      </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
