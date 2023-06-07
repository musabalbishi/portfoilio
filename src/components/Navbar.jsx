import { Heading, Image, Text, Spacer, Link, Box } from "@chakra-ui/react";
import ToggleButton from "./ToggleButton";
function Navbar() {
  return (
    <Heading
      p={"1rem 6rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow={"base"}
    >
      <Image src="./logo-1.png"></Image>
      {/* theme switch */}

      <Text>PORTFOLIO</Text>
      <Spacer />
      <Box display={"flex"} gap={"1rem"}>
        <Link href="#skills">
          <Text fontSize={"1.5rem"}>Skills</Text>
        </Link>
        <Link href="#projects">
          <Text fontSize={"1.5rem"}>Projects</Text>
        </Link>
      </Box>
      <ToggleButton />
    </Heading>
  );
}

export default Navbar;
