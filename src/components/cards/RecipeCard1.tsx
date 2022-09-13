import {
  Box,
  Image,
  Text,
  VStack,
  useDisclosure,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

import  { FC, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
// import { BsClock } from "react-icons/bs";
import { IoIosNutrition } from "react-icons/io";
// import CheckCircleIcon from "@chakra-ui/icon";
import { RecipeInfo } from "../Drawer/RecipeInfo";
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
  const [loading, setLoading] = useState(true);

//   const [recipeInfoLoad, setRecipeInfoLoad] = useState(false);

  setTimeout(() => setLoading(false), 3000);
  return (
    <Box
      onClick={onOpen}
      data-recipe-id={props.id}
      padding={3}
      width={"60%"}
      minW={"60%"}
      boxShadow={"md"}
      borderRadius={"2xl"}
      bg={"white"}
      position={"relative"}
      //   bgGradient={
      //     "linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))"
      //   }
    >
      <VStack gap={2} justify={"start"} alignItems={"start"}>
        <Skeleton borderRadius={"xl"} isLoaded={!loading}>
          <Image
            borderRadius={"2xl"}
            objectFit={"cover"}
            boxSize={"100%"}
            src={props.imgURL}
            shadow={"base"}
          />
        </Skeleton>
        <SkeletonText mt="4" noOfLines={3} spacing="4" isLoaded={!loading}>
          <Text
            //   mb={2}
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
        <SkeletonText mt="4" noOfLines={1} spacing="4" isLoaded={!loading}>
          <Box alignSelf={"start"} textAlign={"left"} alignItems={"center"}>
            <Box>
              <Text
                color={"grey"}
                display={"flex"}
                alignItems={"center"}
                fontSize={"sm"}
                textAlign={"start"}
              >
                <Box color={"#71B9BE"} mr={1}>
                  <AiOutlineFire />
                </Box>
                {`
              ${props.calories}`}{" "}
                calories <Box>&bull;</Box>{" "}
                <Box color={"#71B9BE"} ml={1} mr={1}>
                  <IoIosNutrition />
                </Box>
                <Box>{`${props.carbs} carbs`}</Box>
              </Text>
            </Box>
          </Box>
        </SkeletonText>
      </VStack>
      <RecipeInfo
        imgURL={props.imgURL}
        isOpen={isOpen}
        onClose={onClose}
        title={props.title}
        calories={props.calories}
        carbs={props.carbs}
        id={props.id}
        fat={props.fat}
        protein={props.protein}
        key={props.title}
      />
    </Box>
  );
};
