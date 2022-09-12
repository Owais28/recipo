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
  Skeleton,
  Stack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import CheckCircleIcon from "@chakra-ui/icon";
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
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false),3000)

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
        <Skeleton borderRadius={"xl"} isLoaded={!loading}>
        <Image
          borderRadius={"2xl"}
          objectFit={"cover"}
          boxSize={"100%"}
          src={props.imgURL}
          shadow={"base"}
          />
          </Skeleton>
        <SkeletonText mt="4" noOfLines={3} spacing="4" isLoaded={!loading} >
        <Text
          mb={2}
          fontSize={"sm"}
          fontWeight={"bold"}
          fontFamily={"Noto Sans"}
          color={"#0C2628"}
          height={"53px"}
        >
          {props.title.length < 40
            ? props.title
            : props.title.slice(0, 37) + "..."}
        </Text>
            </SkeletonText>
            <SkeletonText mt="4" noOfLines={1} spacing="4" isLoaded={!loading} >
        <Wrap>
          <WrapItem>
            <Text
              color={"grey"}
              display={"flex"}
              alignItems={"center"}
              fontSize={"sm"}
              textAlign={"start"}
            >
              <AiOutlineFire />{" "}
              {`
              ${props.calories}`}{" "}
              calories &bull; {`${props.carbs} carbs`}
            </Text>
          </WrapItem>
        </Wrap>
        </SkeletonText>
      </VStack>

      <Drawer  placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius={"2xl"}>
          <DrawerHeader
            borderBottomWidth="1px"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            Recipe Info
            <Button colorScheme="teal" variant="ghost">
              <CheckCircleIcon w={3} />
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <VStack gap={2} alignItems={"start"}>
              <Box
                alignItems={"center"}
                w={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box pr={3} py={"4"}>

                  <Text
                    fontSize={"large"}
                    fontWeight={"bold"}
                    fontFamily={"Noto Sans"}
                    color={"#0C2628"}
                    >
                    {props.title}
                  </Text>
                </Box>

                <Box
                  fontSize={"small"}
                  display={"flex"}
                  alignItems={"center"}
                  fontWeight={"normal"}
                  color={"grey"}
                >
                  <Box mr={1}>
                    <BsClock fontSize={"small"} color={"grey"} />
                  </Box>
                  <Text fontFamily={"Rubik"}>15min</Text>
                </Box>
              </Box>

              <Wrap>
                <WrapItem>
                  <Text
                    color={"grey"}
                    display={"flex"}
                    alignItems={"center"}
                    fontSize={"sm"}
                    fontFamily={"Rubik"}
                  >
                    <AiOutlineFire />{" "}
                    {`
              ${props.calories}`}{" "}
                    calories &bull; {`${props.carbs} carbs`}
                  </Text>
                </WrapItem>
              </Wrap>

              <Box padding="6" boxShadow="xl" bg="white" w={"100%"}>
                <SkeletonCircle size="10" isLoaded={true} >
                    sfsfsd
                </SkeletonCircle>
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
