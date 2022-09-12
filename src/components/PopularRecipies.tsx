import { Box, Flex, Link, Text, VStack, Image, Button, Drawer, DrawerContent } from "@chakra-ui/react";
import React from "react";
import { RecipeCard1 } from "./cards/RecipeCard1";

export const PopularRecipies = () => {
  const recipeInfo = {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 8,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 3,
    healthScore: 15,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 145.96,
    extendedIngredients: [
      {
        id: 4053,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "olive-oil.jpg",
        consistency: "LIQUID",
        name: "olive oil",
        nameClean: "olive oil",
        original: "1/4 cup olive oil",
        originalName: "olive oil",
        amount: 0.25,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 59.147,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 5062,
        aisle: "Meat",
        image: "chicken-breasts.png",
        consistency: "SOLID",
        name: "chicken breasts",
        nameClean: "chicken breast",
        original: "1/2 pound boneless chicken breasts cut in ½ in strips",
        originalName: "boneless chicken breasts cut in ½ in strips",
        amount: 0.5,
        unit: "pound",
        meta: ["boneless", "cut in ½ in strips"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "lb",
            unitLong: "pounds",
          },
          metric: {
            amount: 226.796,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1032009,
        aisle: "Spices and Seasonings",
        image: "red-pepper-flakes.jpg",
        consistency: "SOLID",
        name: "red pepper flakes",
        nameClean: "red pepper flakes",
        original: "1 pinch red pepper flakes",
        originalName: "red pepper flakes",
        amount: 1,
        unit: "pinch",
        meta: ["red"],
        measures: {
          us: {
            amount: 1,
            unitShort: "pinch",
            unitLong: "pinch",
          },
          metric: {
            amount: 1,
            unitShort: "pinch",
            unitLong: "pinch",
          },
        },
      },
      {
        id: 10620421,
        aisle: "Pasta and Rice",
        image: "lasagna-noodles.jpg",
        consistency: "SOLID",
        name: "cooked lasagna noodles",
        nameClean: "cooked lasagne noodles",
        original: "1/2 pound bow tie pasta or small lasagna noodles, (cooked)",
        originalName: "bow tie pasta or small lasagna noodles, (cooked)",
        amount: 0.5,
        unit: "pound",
        meta: ["cooked", "()"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "lb",
            unitLong: "pounds",
          },
          metric: {
            amount: 226.796,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.png",
        consistency: "SOLID",
        name: "garlic cloves",
        nameClean: "garlic",
        original: "2 garlic cloves, minced",
        originalName: "garlic cloves, minced",
        amount: 2,
        unit: "",
        meta: ["minced"],
        measures: {
          us: {
            amount: 2,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 2,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 10011090,
        aisle: "Produce",
        image: "broccoli.jpg",
        consistency: "SOLID",
        name: "broccoli florets",
        nameClean: "broccoli florets",
        original: "1 1/2 cups broccoli florets",
        originalName: "broccoli florets",
        amount: 1.5,
        unit: "cups",
        meta: [],
        measures: {
          us: {
            amount: 1.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 354.882,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 2003,
        aisle: "Spices and Seasonings",
        image: "basil.jpg",
        consistency: "SOLID",
        name: "dried basil leaves",
        nameClean: "dried basil",
        original: "1 teaspoon dried basil leaves",
        originalName: "dried basil leaves",
        amount: 1,
        unit: "teaspoon",
        meta: ["dried"],
        measures: {
          us: {
            amount: 1,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
          metric: {
            amount: 1,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
        },
      },
      {
        id: 14106,
        aisle: "Alcoholic Beverages",
        image: "white-wine.jpg",
        consistency: "LIQUID",
        name: "white wine",
        nameClean: "dry white wine",
        original: "1/4 cup white wine",
        originalName: "white wine",
        amount: 0.25,
        unit: "cup",
        meta: ["white"],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 59.147,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 6194,
        aisle: "Canned and Jarred",
        image: "chicken-broth.png",
        consistency: "LIQUID",
        name: "chicken broth",
        nameClean: "chicken broth",
        original: "3/4 cup chicken broth",
        originalName: "chicken broth",
        amount: 0.75,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.75,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 177.441,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 1033,
        aisle: "Cheese",
        image: "parmesan.jpg",
        consistency: "SOLID",
        name: "parmesan cheese",
        nameClean: "parmesan",
        original: "Grated parmesan cheese",
        originalName: "Grated parmesan cheese",
        amount: 1,
        unit: "serving",
        meta: ["grated"],
        measures: {
          us: {
            amount: 1,
            unitShort: "serving",
            unitLong: "serving",
          },
          metric: {
            amount: 1,
            unitShort: "serving",
            unitLong: "serving",
          },
        },
      },
    ],
    id: 654901,
    title: "Pasta With Chicken and Broccoli",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl:
      "https://www.foodista.com/recipe/Y5X6DRHT/pasta-with-chicken-and-broccoli",
    image: "https://spoonacular.com/recipeImages/654901-556x370.jpg",
    imageType: "jpg",
    summary:
      'Pasta With Chicken and Broccoli might be a good recipe to expand your main course repertoire. This recipe makes 4 servings with <b>332 calories</b>, <b>19g of protein</b>, and <b>18g of fat</b> each. For <b>$1.46 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. 3 people found this recipe to be flavorful and satisfying. A mixture of wine, parmesan cheese, basil leaves, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 55%</b>, which is solid. Similar recipes are <a href="https://spoonacular.com/recipes/pasta-house-pasta-con-broccoli-this-is-an-alfredo-based-sauce-that-combines-pasta-fresh-mushrooms-and-fresh-broccoli-601199">Pasta House Pasta con Broccoli – This is an Alfredo based sauce that combines pasta, fresh mushrooms, and fresh broccoli</a>, <a href="https://spoonacular.com/recipes/broccoli-and-pasta-with-chicken-479320">Broccoli and Pasta with Chicken</a>, and <a href="https://spoonacular.com/recipes/pasta-with-chicken-and-broccoli-110475">Pasta With Chicken and Broccoli</a>.',
    cuisines: [],
    dishTypes: ["side dish", "lunch", "main course", "main dish", "dinner"],
    diets: [],
    occasions: [],
    winePairing: {
      pairedWines: [],
      pairingText:
        "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
      productMatches: [],
    },
    instructions:
      "In a large skillet, heat oil over medium heat. Sautee garlic for about one minute, stirring constantly. DO NOT BURN.\nAdd the chicken and cook until well done. Add the broccoli and cook until crisp but tender. Add basil; red pepper; salt and pepper to taste; wine and chicken broth. cook for about 5 minutes.\nAdd the cooked and drained pasta to the skillet and toss to combine.\nHeat for 1 to 2 minutes Serve.\nTop with grated Parmesan cheese if desired.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a large skillet, heat oil over medium heat.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 2,
            step: "Sautee garlic for about one minute, stirring constantly. DO NOT BURN.",
            ingredients: [
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
            ],
            equipment: [],
            length: {
              number: 1,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Add the chicken and cook until well done.",
            ingredients: [
              {
                id: 5006,
                name: "whole chicken",
                localizedName: "whole chicken",
                image: "whole-chicken.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: "Add the broccoli and cook until crisp but tender.",
            ingredients: [
              {
                id: 11090,
                name: "broccoli",
                localizedName: "broccoli",
                image: "broccoli.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Add basil; red pepper; salt and pepper to taste; wine and chicken broth. cook for about 5 minutes.",
            ingredients: [
              {
                id: 1102047,
                name: "salt and pepper",
                localizedName: "salt and pepper",
                image: "salt-and-pepper.jpg",
              },
              {
                id: 6194,
                name: "chicken broth",
                localizedName: "chicken broth",
                image: "chicken-broth.png",
              },
              {
                id: 11821,
                name: "red pepper",
                localizedName: "red pepper",
                image: "red-pepper.jpg",
              },
              {
                id: 2044,
                name: "basil",
                localizedName: "basil",
                image: "basil.jpg",
              },
              {
                id: 14084,
                name: "wine",
                localizedName: "wine",
                image: "red-wine.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 5,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step: "Add the cooked and drained pasta to the skillet and toss to combine.",
            ingredients: [
              {
                id: 20420,
                name: "pasta",
                localizedName: "pasta",
                image: "fusilli.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 7,
            step: "Heat for 1 to 2 minutes",
            ingredients: [],
            equipment: [],
          },
          {
            number: 8,
            step: "Serve.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 9,
            step: "Top with grated Parmesan cheese if desired.",
            ingredients: [
              {
                id: 1032,
                name: "grated parmesan cheese",
                localizedName: "grated parmesan cheese",
                image: "parmesan.jpg",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularSourceUrl:
      "https://spoonacular.com/pasta-with-chicken-and-broccoli-654901",
  };

  const popularRecipies = {
    results: [
      {
        id: 716426,
        title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715594,
        title: "Homemade Garlic and Basil French Fries",
        image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715497,
        title: "Berry Banana Breakfast Smoothie",
        image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 644387,
        title: "Garlicky Kale",
        image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716268,
        title: "African Chicken Peanut Stew",
        image: "https://spoonacular.com/recipeImages/716268-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716381,
        title: "Nigerian Snail Stew",
        image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 782601,
        title: "Red Kidney Bean Jambalaya",
        image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 794349,
        title: "Broccoli and Chickpea Rice Salad",
        image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715446,
        title: "Slow Cooker Beef Stew",
        image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715415,
        title: "Red Lentil Soup with Chicken and Turnips",
        image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
        imageType: "jpg",
      },
    ],
    offset: 0,
    number: 10,
    totalResults: 5224,
  };

  const recipiesByNutrients = [
    {
      id: 634141,
      title: "Banana Oatmeal Breakfast Muffins",
      image: "https://spoonacular.com/recipeImages/634141-312x231.jpg",
      imageType: "jpg",
      calories: 148,
      protein: "4g",
      fat: "3g",
      carbs: "27g",
    },
    {
      id: 644826,
      title: "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
      image: "https://spoonacular.com/recipeImages/644826-312x231.jpg",
      imageType: "jpg",
      calories: 351,
      protein: "31g",
      fat: "15g",
      carbs: "27g",
    },
    {
      id: 650499,
      title: "Lychee Granita",
      image: "https://spoonacular.com/recipeImages/650499-312x231.jpg",
      imageType: "jpg",
      calories: 78,
      protein: "0g",
      fat: "0g",
      carbs: "21g",
    },
    {
      id: 653270,
      title: "Nori Seaweed Muffins",
      image: "https://spoonacular.com/recipeImages/653270-312x231.jpg",
      imageType: "jpg",
      calories: 250,
      protein: "4g",
      fat: "14g",
      carbs: "27g",
    },
    {
      id: 657095,
      title: "Prawn Curry",
      image: "https://spoonacular.com/recipeImages/657095-312x231.jpg",
      imageType: "jpg",
      calories: 458,
      protein: "29g",
      fat: "17g",
      carbs: "47g",
    },
    {
      id: 657359,
      title: "Pumpkin Pie Smoothie",
      image: "https://spoonacular.com/recipeImages/657359-312x231.jpg",
      imageType: "jpg",
      calories: 150,
      protein: "10g",
      fat: "3g",
      carbs: "22g",
    },
    {
      id: 660261,
      title: "Slow Cooked Applesauce",
      image: "https://spoonacular.com/recipeImages/660261-312x231.jpg",
      imageType: "jpg",
      calories: 62,
      protein: "0g",
      fat: "0g",
      carbs: "16g",
    },
    {
      id: 660525,
      title: "Soft-Baked Pretzels",
      image: "https://spoonacular.com/recipeImages/660525-312x231.jpg",
      imageType: "jpg",
      calories: 376,
      protein: "7g",
      fat: "22g",
      carbs: "41g",
    },
    {
      id: 663824,
      title: "Trinidadian Chicken Potato Curry",
      image: "https://spoonacular.com/recipeImages/663824-312x231.jpg",
      imageType: "jpg",
      calories: 554,
      protein: "35g",
      fat: "37g",
      carbs: "20g",
    },
    {
      id: 716195,
      title: "Spicy Indian-Style Hummus",
      image: "https://spoonacular.com/recipeImages/716195-312x231.jpg",
      imageType: "jpg",
      calories: 134,
      protein: "5g",
      fat: "6g",
      carbs: "15g",
    },
  ];

  return (
    <Box maxW={"sm"} my={3}>
      <Text
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        fontSize="lg"
        fontFamily={"Rubik"}
        color="#0F2732"
        fontWeight={"semibold"}
      >
        Popular Recipies{" "}
        <Link
          color="teal.500"
          fontWeight={"normal"}
          fontSize={"x-small"}
          href="#"
        >
          See all
        </Link>
      </Text>

      <Box width="100%">
        <Flex
          py={2}
          gap={3}
          css={{
            "&::-webkit-scrollbar": {
              width: "1px",
              height: "0px",
            },
            "&::-webkit-scrollbar-track": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#8ccef0",
              borderRadius: "24px",
            },
          }}
          overflowX={"scroll"}
          wrap={"nowrap"}
          //   height={"230px"}
        >
          
              {/* <Image borderRadius={"2xl"} objectFit={"cover"} boxSize={"100%"} src="https://spoonacular.com/recipeImages/715523-312x231.jpg" />
                    <Text
                    mb={2}
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    fontFamily={"Noto Sans"}
                    color={"#0F2732"}
                    >
                        {popularRecipies.results[0].title}
                    </Text> */}
              {recipiesByNutrients.map((recipe) => (
                <RecipeCard1 title={recipe.title} imgURL={recipe.image} calories={recipe.calories} carbs={recipe.carbs} protein={recipe.protein} fat={recipe.fat} id={recipe.id} key={recipe.id}   />
              ))}
        </Flex>
      </Box>
      
    </Box>
  );
};
