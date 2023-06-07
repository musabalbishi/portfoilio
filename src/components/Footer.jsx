import { Box, HStack, SimpleGrid, Image, Link, Text } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <Box
      color={"#242424"}
      _dark={{ color: "#fff", bg: "#282828" }}
      p={"4rem 12rem"}
      mt={"auto"}
      pb={"2rem"}
      w={"full"}
      h={"14rem"}
      bg={"#ddd"}
      as={"footer"}
    >
      <SimpleGrid minChildWidth={"200px"} spacing={10} justifyItems={"center"}>
        <Image src="./logo-1.png" />
        <HStack spacing={3}>
          <FaTwitter color="#00acee" size={"2.3rem"} />
          <FaLinkedin color="#0072b1" size={"2.3rem"} />
          <FaGithub color="#171515" size={"2.3rem"} />
          <FaEnvelope color="#888" size={"2.3rem"} />
        </HStack>

        <HStack display={"flex"} flexDirection={"column"} alignItems={"start"}>
          <Link href={"#"}>
            <Text fontSize={"1.2rem"}>Blog</Text>
          </Link>
          <Link href={"#"}>
            <Text fontSize={"1.2rem"}>About Me</Text>
          </Link>

          <Link href={"#"}>
            <Text fontSize={"1.2rem"}>Contact Me</Text>
          </Link>
        </HStack>
        <HStack display={"flex"} flexDirection={"column"} alignItems={"start"}>
          <Link href={"#"}>
            <Text fontSize={"1.2rem"}>Blog</Text>
          </Link>
          <Link href={"#"}>
            <Text fontSize={"1.2rem"}>About Me</Text>
          </Link>

          <Link href={"#"}>
            <Text fontSize={"1.2rem"}>Contact Me</Text>
          </Link>
        </HStack>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
