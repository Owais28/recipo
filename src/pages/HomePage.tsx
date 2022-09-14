import { Box } from "@chakra-ui/react";
import { Featured } from "../components/Featured";
import { MoreRecipes } from "../components/MoreRecipes";
import { Navbar } from "../components/Navbar";
import { PopularRecipies } from "../components/PopularRecipes";
import { SpaceComponent } from "../components/SpaceComponent";

export const HomePage = () => {
  return (
    <Box
      width="100vw"
      minH={"100vh"}
      bg="#ffffff"
      bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      p={3}
    >
      <Navbar person={"Stranger"} />
      <Featured />
      <PopularRecipies />
      <MoreRecipes />
      <SpaceComponent />
    </Box>
  );
};
