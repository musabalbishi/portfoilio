import {
  Box,
  Text,
  Image,
  Flex,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  // HStack,
} from "@chakra-ui/react";
import {
  FaChevronCircleDown,
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DropText from "../components/DropText";
function Home() {
  return (
    <>
      <Box
        mx={"auto"}
        maxW={"90rem"}
        p={"6rem 12rem"}
        minH={"100vh"}
        display={{ base: "flex", sm: "block", md: "block", lg: "block" }}
        justifyContent={{ base: "center", sm: "center" }}
        alignItems={{ base: "center", sm: "center" }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
          minChildWidth={"200px"}
          justifyItems={"center"}
          spacing={10}
        >
          <Box
            borderRadius={"10px"}
            p={"2rem 2rem"}
            h={"20vh"}
            minW={{ base: "20rem", sm: "20rem", md: "full", lg: "full" }}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              h={"10rem"}
            >
              <Accordion allowMultiple={"true"}>
                <AccordionItem>
                  <Text>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={"1.8rem"}
                      >
                        Hi, I&apos;m Musab 👋
                        <NavLink
                          to="/more"
                          className={({ isActive }) =>
                            isActive ? <DropText /> : ""
                          }
                        >
                          more
                        </NavLink>
                      </Box>

                      <FaChevronCircleDown />
                    </AccordionButton>
                  </Text>

                  <AccordionPanel pb={4} fontSize={"1.8rem"}>
                    <NavLink
                      to="/more"
                      className={({ isActive }) =>
                        isActive ? (
                          <AccordionPanel pb={4} fontSize={"1.8rem"}>
                            <DropText />
                          </AccordionPanel>
                        ) : (
                          ""
                        )
                      }
                    >
                      more
                    </NavLink>
                    <DropText />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              {/* about button */}
              <Button>
                <NavLink to="/about">More about me</NavLink>
              </Button>
            </Flex>
          </Box>
          <Box
            borderRadius={"10px"}
            p={"2rem"}
            h={"50vh"}
            minW={{ base: "20rem", sm: "20rem", md: "full", lg: "full" }}
            alignSelf={"center"}
          >
            <Image
              src="./person.png"
              h={"full"}
              display={{
                base: "hidden",
                sm: "hidden",
                md: "hidden",
                lg: "block",
              }}
            />
          </Box>
        </SimpleGrid>
      </Box>
      {/* skills section */}
      <Box
        id="skills"
        mx={"auto"}
        p={"6rem 12rem"}
        bg={"#eee"}
        minH={"100vh"}
        display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
        alignItems={{
          base: "start",
          sm: "start",
          md: "start",
          lg: "start",
        }}
      >
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text fontSize={"3rem"} fontWeight={"semibold"} letterSpacing={"2px"}>
            SKILLS
          </Text>
          <SimpleGrid
            columns={3}
            minChildWidth={"200px"}
            spacing={10}
            m={"10rem 0"}
          >
            <Box
              borderRadius={"10px"}
              h={"10rem"}
              w={"20rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <FaHtml5 color="#f06529" size={"3rem"} />
              <FaCss3 color="#2965f1" size={"3rem"} />
              <FaJs color="#f0db4f" size={"3rem"} />
              <FaBootstrap color="#563d7c" size={"3rem"} />
              <FaSass color="#cc6699" size={"3rem"} />
            </Box>
            <Box
              borderRadius={"10px"}
              h={"10rem"}
              w={"20rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <FaNodeJs color="#339933" size={"3rem"} />
              <FaReact color=" #61dbfb" size={"3rem"} />
              <FaGitAlt color="#f34f29" size={"3rem"} />
            </Box>
            <Box
              borderRadius={"10px"}
              h={"10rem"}
              w={"20rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <FaDatabase size={"3rem"} />
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
