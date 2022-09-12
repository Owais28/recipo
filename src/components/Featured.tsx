import {
  Box,
  Badge,
  Text,
  Image,
  HStack,
  Flex,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import React from "react";

export const Featured = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box maxW="sm" px={2} overflow="hidden">
      <Text
        fontSize="md"
        fontFamily={"Rubik"}
        color="#0F2732"
        fontWeight={"semibold"}
      >
        Featured
      </Text>
      <Box width="100%">
        <Flex
          py={2}
          gap={2.5}
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
        >
          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
                  James Spader
                </Text>
              </WrapItem>
            </Box>
          </Box>

          <Box
            overflow={"hidden"}
            bg={"#71B9BE"}
            p={4}
            borderRadius={"xl"}
            color={"white"}
            height={"220px"}
            minW={"300px"}
            w={"300px"}
            display={"flex"} alignItems={"end"}
          >
            <Box >
              <Text
                mb={2}
                fontSize={"sm"}
                lineHeight={"shorter"}
                width={"80%"}
                letterSpacing={"wider"}
                fontWeight={"bold"}
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
                <Text fontSize={"13px"} color={"whiteAlpha.800"}>
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
