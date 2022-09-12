import {
  Box,
  Badge,
  Text,
  Image,
  HStack,
  Flex,
  WrapItem,
  Avatar,
  Drawer,
  Button,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";

export const Featured = () => {
  


  return (
    <Box maxW="sm"  overflow="hidden">
      <Text
        fontSize="lg"
        fontFamily={"Rubik"}
        color="##0C2628"
        fontWeight={"semibold"}
      >
        Featured
      </Text>
      <Box width="100%" >
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
          height={'230px'}
        >
          <Box
            overflow={"hidden"}
            bgGradient={'linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))'}
            p={4}
            borderRadius={"2xl"}
            color={"white"}
            height={"200px"}
            minW={"250px"}
            w={"250px"}
            display={"flex"} alignItems={"end"}
            shadow={"lg"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                fontWeight={"bold"}
                fontFamily={"Rubik"}
              >
                Asian white noodle with extra seafood
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text fontSize={"14px"} fontFamily={'Noto Sans'} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bgGradient={'linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))'}
            p={4}
            borderRadius={"2xl"}
            color={"white"}
            height={"200px"}
            minW={"250px"}
            w={"250px"}
            display={"flex"} alignItems={"end"}
            shadow={"lg"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                fontWeight={"bold"}
                fontFamily={"Rubik"}
              >
                Asian white noodle with extra seafood
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text fontSize={"14px"} fontFamily={'Noto Sans'} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>
          <Box
            overflow={"hidden"}
            bgGradient={'linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))'}
            p={4}
            borderRadius={"2xl"}
            color={"white"}
            height={"200px"}
            minW={"250px"}
            w={"250px"}
            display={"flex"} alignItems={"end"}
            shadow={"lg"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                fontWeight={"bold"}
                fontFamily={"Rubik"}
              >
                Asian white noodle with extra seafood
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text fontSize={"14px"} fontFamily={'Noto Sans'} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>
          <Box
            overflow={"hidden"}
            bgGradient={'linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))'}
            p={4}
            borderRadius={"2xl"}
            color={"white"}
            height={"200px"}
            minW={"250px"}
            w={"250px"}
            display={"flex"} alignItems={"end"}
            shadow={"lg"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                fontWeight={"bold"}
                fontFamily={"Rubik"}
              >
                Asian white noodle with extra seafood
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text fontSize={"14px"} fontFamily={'Noto Sans'} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>
          <Box
            overflow={"hidden"}
            bgGradient={'linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))'}
            p={4}
            borderRadius={"2xl"}
            color={"white"}
            height={"200px"}
            minW={"250px"}
            w={"250px"}
            display={"flex"} alignItems={"end"}
            shadow={"lg"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                fontWeight={"bold"}
                fontFamily={"Rubik"}
              >
                Asian white noodle with extra seafood
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text fontSize={"14px"} fontFamily={'Noto Sans'} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

        </Flex>
      </Box>
    </Box>
  );
};

// colors
// Text : #0F2732
// bg-grey : #F1F5F5
// primary : #71B9BE
