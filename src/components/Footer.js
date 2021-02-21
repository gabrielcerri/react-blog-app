import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      w="full"
      bg="black"
      direction="row"
      px="10rem"
      py="1.5rem"
      justify="center"
    >
      <Text color="white"> Gabriel Cerri 2021 © </Text>
    </Flex>
  );
};
