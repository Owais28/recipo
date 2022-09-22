import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Flexbox } from "./wrapper/Flexbox";

export const Categories = () => {
  return (
    <Box maxW={"md"} my={3}>
      <Text
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        fontSize="lg"
        fontFamily={"Rubik"}
        color="#0C2628"
        fontWeight={"semibold"}
        mr={3}
        pl={3}
      >
        Category{" "}
        <Link
          color="teal.500"
          fontWeight={"normal"}
          fontSize={"small"}
          href="#"
        >
          See all
        </Link>
      </Text>

      <Box width="100%">
        <Flexbox height={"auto"}>
          {/* {recipiesByNutrients.map((recipe) => (
                <RecipeCard1 title={recipe.title} imgURL={recipe.image} calories={recipe.calories} carbs={recipe.carbs} protein={recipe.protein} fat={recipe.fat} id={recipe.id} key={recipe.id}   />
              ))} */}
          <Button
            colorScheme="teal"
            flexShrink={0}
            width={"max-content"}
            borderRadius={"full"}
            px={6}
            fontSize={"smaller"}
            fontWeight={"normal"}
          >
            Breakfast
          </Button>
          <Button
            colorScheme="gray"
            flexShrink={0}
            borderRadius={"full"}
            fontSize={"smaller"}
            px={6}
            fontWeight={"normal"}
          >
            Lunch
          </Button>
          <Button
            colorScheme="gray"
            flexShrink={0}
            borderRadius={"full"}
            fontSize={"smaller"}
            px={6}
            fontWeight={"normal"}
          >
            Dinner
          </Button>
          <Button
            colorScheme="gray"
            flexShrink={0}
            borderRadius={"full"}
            fontSize={"smaller"}
            px={6}
            fontWeight={"normal"}
          >
            Meal
          </Button>
        </Flexbox>
      </Box>
    </Box>
  );
};
