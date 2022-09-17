import { Box } from "@chakra-ui/react";
import { Featured } from "../components/Featured";
import { MoreRecipes } from "../components/MoreRecipes";
import { Navbar } from "../components/Navbar";
import { PopularRecipies } from "../components/PopularRecipes";
import { SpaceComponent } from "../components/SpaceComponent";

export const HomePage = () => {
  document.title = "Recipo | Home";
  // function reqFullScr(){
  //   document.querySelector('body')?.requestFullscreen().then(()=> null)
  // }
  // setTimeout(reqFullScr, 1000);
  // reqFullScr();

  return (
    <Box
      maxW={'md'}
    //   width={'sm'}
      minH={"100vh"}
      // bg={"teal.50"}
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
