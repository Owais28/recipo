import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Grid,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Image
} from "@chakra-ui/react";
import React from "react";

export const Navbar = ({ person = "Stranger" }) => {
  return (
    <Box>
      <Wrap justify={"space-between"} py={"2"} mb={3} align={"center"}>
        <WrapItem flex={1}>
          <Grid gap={"0px"}>

          <Text fontFamily={"Rubik"} fontSize={"larger"} fontWeight={"Bold"}>
            Hello {person} <Image display={"inline"} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/waving-hand_1f44b.png" w={4} h={4}/>
          </Text>
          <Box>
            <Box mt={"-1"}>
          <Text fontSize={"smaller"} fontWeight={"normal"}>It's dinner time!</Text>
            </Box>
          </Box>
          </Grid>
        </WrapItem>
        <WrapItem>
          <Avatar
          size={"md"}
          name="Dan Abrahmov"
          mr={2}
          src="https://bit.ly/dan-abramov"/>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
