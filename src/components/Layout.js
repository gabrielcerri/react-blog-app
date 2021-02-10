import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    {children}
    <Flex flex={1} justify="center" align="center"></Flex>
    <Footer />
  </Flex>
);
