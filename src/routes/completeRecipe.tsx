import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

export const CompleteRecipe = () => {
  return (
    <div>
                    <Box fontFamily={"Rubik"} fontSize={'sm'} mt={"6"}>
              <Tabs isLazy={true} width={'100%'} isFitted={true}>
                <TabList gap={2} bg={'#E4E9F1'} p={1} display={'flex'} borderRadius={'xl'} fontWeight={"medium"}>
                  <Tab _selected={{ color: "white", bg: "#0C2628" }} flex={1} fontSize={'sm'} fontWeight={"medium"} fontFamily={'Rubik'} borderRadius={"xl"}>
                    Ingredients
                  </Tab>
                  <Tab _selected={{ color: "white", bg: "#0C2628" }} flex={1} fontSize={'sm'} fontWeight={"medium"} fontFamily={'Rubik'} borderRadius={"xl"}>
                    Directions
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel justifyContent={'center'} >
                  <Button isLoading={false} alignItems={"center"}
                  fontSize={"sm"}
                  fontFamily={"Rubik"}
                  fontWeight={"normal"}
                  color={"#0C2628"} colorScheme='teal' variant='ghost'>
                    Load Ingredients
                  </Button>
                  </TabPanel>
                  <TabPanel>
                    
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
    </div>
  )
}
