import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { sleep } from "../utils/sleep";

export function SignUp({ toogleForm }) {
  const [firstName, setFirsName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [users, setUsers] = useLocalStorageState("users", []);
  const [isLoading, setIsLoading] = React.useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se renderize todos los componentes
    setIsLoading(true);

    //validacion en el caso que lo queramos dsp del submit, sino la validacion
    //la hacemos en cada handle

    console.log("formulario completado", firstName, lastName, email, password);
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    setUsers([...users, user]);

    sleep().then(() => {
      setIsLoading(false);
      history.push("/signin");
    });
  };

  const handleFirstName = (e) => {
    setFirsName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
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
      bg="blue.600"
    >
      <Text mb="2rem" fontSize="1.3rem" fontWeight="bold" as="samp">
        Welcome to MyBlog App! 📓{" "}
      </Text>
      <Heading mb="2rem">Sign Up</Heading>
      <Input
        bg="white"
        onChange={handleFirstName}
        mb="1rem"
        placeholder="First Name"
      />
      <Input
        bg="white"
        onChange={handleLastName}
        mb="1rem"
        placeholder="Last Name"
      />
      <Input bg="white" onChange={handleEmail} mb="1rem" placeholder="Email" />
      <Input
        bg="white"
        onChange={handlePassword}
        mb="1rem"
        placeholder="Password"
      />
      <Button
        colorScheme="gray"
        mt="20px"
        type="submit"
        variant="solid"
        disabled={isLoading}
        isLoading={isLoading}
      >
        Sign up
      </Button>
      <Button mt="1rem" color="black" variant="ghost" onClick={toogleForm}>
        Already have an account? Sign In
      </Button>
    </Flex>
  );
}
