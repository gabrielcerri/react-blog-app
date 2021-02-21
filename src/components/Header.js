import React from "react";
import { Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import { useAuth } from "../hooks";

export const Header = () => {
  const history = useHistory();
  const { user } = React.useContext(UserContext);
  const { users } = useAuth();
  console.log(`users header: ${JSON.stringify(users, null, 2)}`);

  const name = user && `${user.firstName} ${user.lastName}`;

  const handleNavigateHome = () => {
    history.push("/");
  };
  const handleNavigateProfile = () => {
    history.push("/profile");
  };
  return (
    <Flex
      minH="5rem"
      w="full"
      bg="black"
      direction="row"
      justify="space-between"
      align="center"
      p="1rem 3rem"
    >
      <Button
        cursor="pointer"
        color="white"
        variant="ghost"
        _active={{
          bg: "#0000",
          borderColor: "none",
        }}
        _focus={{
          outline: "none",
        }}
        onClick={handleNavigateHome}
      >
        <FontAwesomeIcon size="2x" icon={faHome} />
      </Button>
      <Switch>
        <Route path="/" exact>
          <Flex direction="row">
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={handleNavigateProfile}
            >
              <Text color="white" mr="1rem">
                {name || "Profile"}
              </Text>
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </Button>
          </Flex>
        </Route>
      </Switch>
    </Flex>
  );
};
