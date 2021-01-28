import { Flex, Button, Text, Avatar } from '@chakra-ui/react'
import { useHistory, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'




export const Header = () => {
    const history = useHistory()
    const handleNavigationHome = () => {
        history.push('/')
    }
    const handleNavigationProfile = () => {
        // console.log('Navigation Profile')
        history.push('/profile')
    }
  
    return (
        <Flex
            minH="5rem"
            bg="blue.700"
            direction="row"
            justify="space-between"
            align="center"  
            p="1rem 2.5rem">

          <Button
            cursor="pointer"
            variant="ghost"
            _active={{ 
                bg:"#0000",
                borderColor: "none"

              }}
            _focus={{
                outline:"none"
            }}
            onClick={handleNavigationHome}>

            <FontAwesomeIcon   size="2x" icon={faHome} />

          </Button>
          <Switch>
            <Route  path="/" exact>

             <Flex direction="row">
          
                <Button 
                    colorScheme="teal" 
                    variant="ghost" 
                    onClick={handleNavigationProfile}>

                    <Text color="black" mr="1rem"> Profile </Text>
                    <Avatar size="sm" name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />

                </Button>

             </Flex>
            
            </Route>
              
            
            
          </Switch>
 

      </Flex>
    )
}