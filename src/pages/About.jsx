import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { FaChevronCircleDown } from "react-icons/fa";
function About() {
  return (
    <Box
      m={"2rem"}
      mx={"auto"}
      maxW={"70rem"}
      p={"6rem 12rem"}
      minH={"100vh"}
      border={"1px solid #333"}
      borderRadius={"10px"}
      _dark={{ border: "1px solid #fff" }}
    >
      <Accordion allowMultiple={"true"}>
        <AccordionItem>
          <Text>
            <AccordionButton>
              <FaChevronCircleDown />
              <Box as="span" flex="1" textAlign="right" fontSize={"1.8rem"}>
                يا هلا, خليني اتكلم شوي عن نفسي
              </Box>
            </AccordionButton>
          </Text>
          <AccordionPanel
            pb={8}
            h={"20rem"}
            fontSize={"1.8rem"}
            textAlign="right"
          >
            جزء من النص مفقود ... 💔
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default About;
