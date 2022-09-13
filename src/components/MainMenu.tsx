import { Box, Button, HStack, Text, VStack  } from "@chakra-ui/react";
import { HiHome, HiOutlineSearch } from "react-icons/hi";
import {FiSearch} from 'react-icons/fi'
import { BsPersonFill } from "react-icons/bs";
import {IoIosNotificationsOutline} from 'react-icons/io' 
import { Link } from "react-router-dom";

// Main Menu Component
export const MainMenu = () => {
  return (
    <Box position={"fixed"} bottom={0} bg={"white"} boxShadow={"xs"} width={"100vw"}>
      <HStack align={'center'} alignItems={'center'} justify={'center'}>
        <Box flex={1}>
            <Link to={'/completeRecipe'}>
          <Button colorScheme="teal" width={'100%'} px={4} py={3} _selected={
              {
                  color : 'black',
                }
            } variant="ghost">
                <VStack spacing={0}>
            <HiHome fontSize={20} />
            <Text fontSize={11} color={'#0C2628'}>
                Home
            </Text>
                </VStack>
          </Button>
              </Link>
        </Box>

        <Box flex={1}>
          <Button  colorScheme="gray" width={'100%'} px={4} py={3} _selected={
            {
                color : 'black',
            }
          } variant="ghost">
            <VStack spacing={0}>
            <FiSearch fontSize={20} />
            <Text fontSize={11} fontFamily={'Noto Sans'} fontWeight={'normal'}>
                Search
            </Text>
                </VStack>
          </Button>
        </Box>

        <Box flex={1}>
          <Button  colorScheme="gray" width={'100%'} px={4} py={3} _selected={
            {
                color : 'black',
            }
          } variant="ghost">
           <VStack spacing={0}>
            <IoIosNotificationsOutline fontSize={20} />
            <Text fontSize={11} fontFamily={'Noto Sans'} fontWeight={'normal'}>
                Notification
            </Text>
                </VStack>
          </Button>
        </Box>

        <Box flex={1}>
          <Button  colorScheme="gray" width={'100%'} px={4} py={3}  _selected={
            {
                color : 'black',
            }
          } variant="ghost">
            <VStack spacing={0}>
            <BsPersonFill fontSize={20} />
            <Text fontSize={11} fontFamily={'Noto Sans'} fontWeight={'normal'}>
                Profile
            </Text>
                </VStack>
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};
