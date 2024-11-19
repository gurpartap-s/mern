import { Button, Container, Flex, Text, Link, HStack, useColorMode } from "@chakra-ui/react"


const Navbar = () => {
    const {toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex h={16} 
            alignItems={"center"} 
            justifyContent={"space-between"} 
            flexDirection={{
                base:"column",
                sm:"row"
            }}>
            <Text 
                fontSize={{base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan, blue)"}
                bgClip={"text"}
                >
            <Link to={"/"}>Product Store</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>Create</Button>
                </Link>
                <Button onClick={toggleColorMode}>Color</Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar