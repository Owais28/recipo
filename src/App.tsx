import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  HStack,
  Container,
  GridItem,
  theme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Featured } from "./components/Featured"
import { PopularRecipies } from "./components/PopularRecipies"
import { Navbar } from "./components/Navbar"



export const App = () => (
  <ChakraProvider theme={theme}>
    <Box width="100vw"  minH={"100vh"} bg="#ffffff" bgGradient={"linear(to-b,#fff,#fff,green.50)"} fontFamily={"Rubik"} p={3}>
        {/* <ColorModeSwitcher justifySelf="flex-end"  /> */}
        <Navbar person={"Owais"}/>
        <Featured/>
        <PopularRecipies/>
    </Box>
  </ChakraProvider>
)
