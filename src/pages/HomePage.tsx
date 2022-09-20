import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { Categories } from "../components/Categories";
import { Featured } from "../components/Featured";
import { MoreRecipes } from "../components/MoreRecipes";
import { Navbar } from "../components/Navbar";
import { PopularRecipies } from "../components/PopularRecipes";
import { SpaceComponent } from "../components/SpaceComponent";

export const HomePage = memo(() => {
  document.title = "Recipo | Home";
  return (
    <Box
      maxW={"md"}
      //   width={'sm'}
      minH={"100vh"}
      bg={"gray.50"}
      // bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      overflow="hidden"
      p={3}
    >
      <Navbar person={"Stranger"} />
      <Featured />
      <Categories/>
      <PopularRecipies />
      <MoreRecipes />
      <SpaceComponent />
    </Box>
  );
});
