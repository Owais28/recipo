import {
  Box,
  Stack,
  VStack,
  Image,
  Text,
  Avatar,
  WrapItem,
  Button,
  Link,
  Skeleton,
  useDisclosure,
  SkeletonText,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
interface RecipesCardInterface {
  id: Number;
  title: string;
  imgURL: string;
}

export const RecipeCardHorizontal: FC<RecipesCardInterface> = ({
  id,
  title,
  imgURL,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);

  //
  setTimeout(() => setLoading(false), 3000);

  return (
    <Box
      p={2}
      borderRadius={"xl"}
      overflow={"hidden"}
      w={"100%"}
      height={"122px"}
      boxShadow={"lg"}
      bg={"white"}
    >
        <SkeletonText noOfLines={5} height={20} isLoaded={!loading}>
      <Stack direction={"row"} height={"100%"} justify={"space-between"}>
        <Box display={"flex"}>
            {/* <Skeleton isLoaded/> */}
            <Image
              borderRadius={"xl"}
              src={imgURL}
              w={"35%"}
              height={"100%"}
              objectFit={"cover"}
              boxShadow={"md"}
              mr={2}
            />
          {/* </Skeleton> */}
            <VStack
              textAlign={"left"}
              p={1}
              align={"start"}
              justify={"space-between"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={"bold"}
                fontFamily={"Noto Sans"}
                color={"#0C2628"}
              >
                {title.length < 30 ? title : title.slice(0, 30) + "..."}
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text fontSize={"14px"} fontFamily={"Noto Sans"} color={"grey"}>
                  James Spader
                </Text>
              </WrapItem>
            </VStack>
        </Box>
        <Box display={"grid"} justifyContent={"center"} alignItems={"center"}>
          {/* <Button bg={'#0C2628'} _selected={{'color' : 'black',}} w p={0} borderRadius={'lg'}> */}
          <RouterLink to="/completeRecipe">
            <Box bg={"#0C2628"} borderRadius="lg" p={0.5} boxShadow={"base"}>
              <Link
                color="teal.500"
                bg={"teal.50"}
                fontWeight={"normal"}
                fontSize={"small"}
                href="#"
              >
                <BsArrowRightShort color="white" fontSize={"30px"} />
              </Link>
            </Box>
          </RouterLink>
          {/* </Button> */}
        </Box>
      </Stack>
          </SkeletonText>
    </Box>
  );
};
