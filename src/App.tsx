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



export const App = () => (
  <ChakraProvider theme={theme}>
    <Box width="100vw" bg="#ffffff" fontFamily={"Rubik"} p={3}>
        {/* <ColorModeSwitcher justifySelf="flex-end"  /> */}
        <Featured/>
    </Box>
  </ChakraProvider>
)
