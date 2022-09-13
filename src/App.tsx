import * as React from "react";
import {
  Box,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import { Logo } from "./Logo";
import { Featured } from "./components/Featured";
import { PopularRecipies } from "./components/PopularRecipes";
import { Navbar } from "./components/Navbar";
// import { Routes } from "react-router-dom";
// import { CompleteRecipe } from "./pages/completeRecipe";
import { MoreRecipes } from "./components/MoreRecipes";
import { MainMenu } from "./components/MainMenu";
import { SpaceComponent } from "./components/SpaceComponent";

export const App = () => (
  <div>

    <Box
      width="100vw"
      minH={"100vh"}
      bg="#ffffff"
      bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      p={3}
    >
      {/* <ColorModeSwitcher justifySelf="flex-end"  /> */}
      <Navbar person={"Owais"} />
      <Featured />
      <PopularRecipies />
      <MoreRecipes/>
      <SpaceComponent/>
    </Box>
    <MainMenu/>
    </div>
);
