import { Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
function AboutLayout() {
  return (
    <>
      <Text
        fontSize={"1.3rem"}
        maxW={"70rem"}
        p={"3rem 12rem"}
        fontWeight={"semibold"}
      >
        About me
      </Text>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AboutLayout;
