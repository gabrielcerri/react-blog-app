import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { sleep } from "../utils/sleep";

export function SignIn({ toogleForm }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [users] = useLocalStorageState("users", []);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se renderize todos los componentes

    const isAuth = users.find((user) => {
      return user.email === email && user.password === password;
    });

    console.log("is authenticated", isAuth);

    sleep().then(() => {
      history.push("/");
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Flex
      as="form"
      w="400px"
      p="2rem"
      direction="column"
      backgroundColor="white"
      border="1px solid #c2c2c2"
      borderRadius="8px"
      onSubmit={handleSubmit}
    >
      <Text>Welcome to your blog 📓 </Text>
      <Heading mb="2rem">Sign in</Heading>
      <Input mb="1rem" placeholder="Email" onChange={handleEmail} />
      <Input mb="1rem" placeholder="Password" onChange={handlePassword} />
      <Button colorScheme="blue" mt="20px" type="submit">
        Sign In
      </Button>
      <Button mt="1rem" colorScheme="blue" variant="ghost">
        First time here? Sign Up
      </Button>
    </Flex>
  );
}
