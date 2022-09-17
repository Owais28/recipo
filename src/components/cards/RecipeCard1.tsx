import {
  Box,
  Image,
  Text,
  VStack,
  useDisclosure,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

import { FC, ReactElement, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { IoIosNutrition } from "react-icons/io";
import { RecipeInfo } from "../Drawer/RecipeInfo";



interface PopularRecipesCardInterface {
  id: number ;
  title: string;
  imgURL: string;
  calories: number ;
  protein: string;
  fat: string;
  carbs: string;
}

/**
 * This component render a recipe info into the card
 */
export const RecipeCard1: FC<PopularRecipesCardInterface> = (
  props: PopularRecipesCardInterface
) => {
  let { id, calories, carbs, fat, imgURL, protein, title } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);

  // setTimeout function is used for <Skeleton/> and </SkeletonText/> component
  setTimeout(() => setLoading(false), 3000);
  return (
    <Box
      onClick={onOpen}
      data-recipe-id={id}
      padding={3}
      width={"60%"}
      minW={"60%"}
      boxShadow={"sm"}
      borderRadius={"2xl"}
      bg={"white"}
      position={"relative"}
      overflow={"hidden"}
    >
      <VStack gap={2} justify={"start"} alignItems={"start"}>
        <Skeleton borderRadius={"xl"} isLoaded={!loading}>
          <Image
            borderRadius={"2xl"}
            objectFit={"cover"}
            boxSize={"100%"}
            src={imgURL}
            shadow={"base"}
          />
        </Skeleton>
        <SkeletonText mt="4" noOfLines={3} spacing="4" isLoaded={!loading}>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
            fontFamily={"Noto Sans"}
            color={"#0C2628"}
            height={"53px"}
            overflow={"hidden"}
          >
            {title.length < 40 ? title : title.slice(0, 37) + "..."}
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
              ${calories}`}{" "}
                calories <Box>&bull;</Box>{" "}
                <Box color={"#71B9BE"} ml={1} mr={1}>
                  <IoIosNutrition />
                </Box>
                <Box>{`${carbs} carbs`}</Box>
              </Text>
            </Box>
          </Box>
        </SkeletonText>
      </VStack>
      <RecipeInfo
        imgURL={imgURL}
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        calories={calories}
        carbs={carbs}
        id={id}
        fat={fat}
        protein={protein}
        key={title}
      />
    </Box>
  );
};
