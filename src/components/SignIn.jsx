import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../hooks";
import { UserContext } from "../context/user";

export function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const { setUser } = React.useContext(UserContext);
  const history = useHistory();
  const { signin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se renderize todos los componentes
    setError(null);
    setIsLoading(true);

    //validacion en el caso que lo queramos dsp del submit, sino la validacion
    //la hacemos en cada handle

    // console.log("formulario completado", firstName, lastName, email, password);

    signin(email, password)
      .then((user) => {
        setError(null);
        setIsLoading(false);

        setUser(user);
        history.push("/");
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
        // console.log("errors", e);
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
      border="2px solid #000"
      borderRadius="8px"
      textAlign="center"
      onSubmit={handleSubmit}
    >
      <Text>Welcome to your blog 📓 </Text>
      <Heading mb="2rem">Sign in</Heading>
      <Input
        border="2px solid"
        bg="white"
        mb="1rem"
        placeholder="Email"
        onChange={handleEmail}
        isRequired
      />
      <Input
        border="2px solid"
        bg="white"
        mb="1rem"
        placeholder="Password"
        onChange={handlePassword}
        isRequired
      />
      {error ? <Text color="red.400">{error}</Text> : null}
      <Button
        color="white"
        bg="black"
        colorScheme="white"
        mt="20px"
        type="submit"
        border="3px solid black"
        variant="ghost"
        disabled={isLoading}
        isLoading={isLoading}
      >
        Sign In
      </Button>
      <Button
        mt="1rem"
        color="black"
        colorScheme="teal"
        border="3px solid black"
        variant="ghost"
        onClick={() => {
          history.push("/signup");
        }}
      >
        First time here? Sign Up
      </Button>
    </Flex>
  );
}
