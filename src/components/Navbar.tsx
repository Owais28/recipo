import {
  Avatar,
  Box,
  Grid,
  Text,
  Wrap,
  WrapItem,
  Image,
  SkeletonText,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Navbar = ({ person = "Stranger" }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <Box maxW={"sm"}>
      <Wrap justify={"space-between"} py={"2"} mb={3} align={"center"}>
        <WrapItem flex={1}>
          <SkeletonText noOfLines={2} isLoaded={!loading}>
            <Grid gap={"0px"}>
              <Text
                fontFamily={"Rubik"}
                fontSize={"larger"}
                color={"#0C2628"}
                fontWeight={"Bold"}
              >
                Hello {person}{" "}
                <Image
                  display={"inline"}
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/waving-hand_1f44b.png"
                  w={5}
                  h={5}
                />
              </Text>
              <Box>
                <Box mt={"-1"}>
                  <Text
                    fontSize={"smaller"}
                    color={"#0C2628"}
                    fontWeight={"normal"}
                  >
                    It's dinner time!
                  </Text>
                </Box>
              </Box>
            </Grid>
          </SkeletonText>
        </WrapItem>
        <WrapItem>
          {/* <SkeletonCircle isLoaded={!loading} /> */}
          <Avatar
            size={"md"}
            name="Dan Abrahmov"
            mr={2}
            src="https://bit.ly/dan-abramov"
          />
          {/* </SkeletonCircle> */}
        </WrapItem>
      </Wrap>
    </Box>
  );
};
