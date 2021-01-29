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

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se renderize todos los componentes

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
    >
      <Text>Welcome to Coderhood! 📓 </Text>
      <Heading mb="2rem">Signup</Heading>
      <Input onChange={handleFirstName} mb="1rem" placeholder="First Name" />
      <Input onChange={handleLastName} mb="1rem" placeholder="Last Name" />
      <Input onChange={handleEmail} mb="1rem" placeholder="Email" />
      <Input onChange={handlePassword} mb="1rem" placeholder="Password" />
      <Button colorScheme="blue" mt="20px" type="submit">
        Signup
      </Button>
      <Button mt="1rem" colorScheme="blue" variant="ghost" onClick={toogleForm}>
        Already have an account? Sign In
      </Button>
    </Flex>
  );
}
