import {
  Box,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const CuisineCard = ({ imageUrl, cuisineTitle, cuisineLink }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <Box
      flex={1}
      flexShrink={0}
      width={"16"}
      minW={16}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      justifyItems={"center"}
    >
      <Box>
        <SkeletonCircle width={"75px"} height={"75px"} isLoaded={!loading}>
          <Image
            src={imageUrl}
            objectFit={"cover"}
            height={"75px"}
            width={"75px"}
            borderRadius={"full"}
            mx={"auto"}
            boxShadow={"lg"}
          />
        </SkeletonCircle>
        <SkeletonText noOfLines={1} isLoaded={!loading}>
          <Text
            align={"center"}
            fontFamily={"Rubik"}
            fontSize={"smaller"}
            mt={2}
          >
            {cuisineTitle}
          </Text>
        </SkeletonText>
      </Box>
    </Box>
  );
};
