import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../hooks";

export function SignUp() {
  const [firstName, setFirsName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const history = useHistory();
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se renderize todos los componentes
    setErrors([]);
    setIsLoading(true);

    //validacion en el caso que lo queramos dsp del submit, sino la validacion
    //la hacemos en cada handle

    // console.log("formulario completado", firstName, lastName, email, password);

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    signup(user)
      .then(() => {
        setErrors([]);
        setIsLoading(false);

        history.push("/signin");
      })
      .catch((e) => {
        setErrors(e);
        setIsLoading(false);
        console.log("errors", e);
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
      h="520px"
      p="2rem"
      direction="column"
      backgroundColor="white"
      border="3px solid #000"
      borderRadius="8px"
      textAlign="center"
      onSubmit={handleSubmit}
    >
      <Text mb="2rem" fontSize="1.3rem" fontWeight="bold" as="samp">
        Welcome to MyBlog App! 📓{" "}
      </Text>
      <Heading mb="2rem">Sign Up</Heading>
      <Input
        border="2px solid "
        bg="white"
        onChange={handleFirstName}
        mb="1rem"
        placeholder="First Name"
      />
      <Input
        border="2px solid "
        bg="white"
        onChange={handleLastName}
        mb="1rem"
        placeholder="Last Name"
      />
      <Input
        border="2px solid "
        bg="white"
        onChange={handleEmail}
        mb="1rem"
        placeholder="Email"
      />
      <Input
        border="2px solid "
        bg="white"
        onChange={handlePassword}
        mb="1rem"
        placeholder="Password"
      />
      {errors.map((error, i) => (
        <Text key={i} color="red.500">
          {error}
        </Text>
      ))}
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
        Sign up
      </Button>
      <Button
        padding="2px"
        mt="1rem"
        color="black"
        colorScheme="teal"
        border="3px solid black"
        variant="ghost"
        onClick={() => {
          history.push("/signin");
        }}
      >
        Already have an account? Sign In
      </Button>
    </Flex>
  );
}
