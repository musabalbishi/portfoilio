import { extendTheme } from "@chakra-ui/react";

const Theme = {
  config: {
    intialColorMode: "dark",
    useSystemColorMode: true,
  },

  styles: {
    global: {
      body: {
        "background-color": "#242424",
      },
    },
  },
};

export default extendTheme(Theme);
