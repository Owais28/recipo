import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { FeaturedCard } from "./cards/FeaturedCard";
import { Text1 } from "./typography/Text1";
import { Flexbox } from "./wrapper/Flexbox";

export const Featured = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  const arrayPseudo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box maxW="md" overflow="hidden">
      <Text1>Featured</Text1>
      <Box width="100%">
        <Flexbox height={'230px'}>
          {arrayPseudo.map((item, index) => (
            <FeaturedCard loading={loading} key={index} />
          ))}
        </Flexbox>
      </Box>
    </Box>
  );
};

// colors
// Text : #0C2628
// bg-grey : #F1F5F5
// primary : #71B9BE
