import React from "react";
import {
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container
      as={`nav`}
      display={`flex`}
      justifyContent={`space-between`}
      maxW={`1300px`}
      p={`4`}
      boxShadow={`lg`}
      pos="sticky"
      top={"0"}
      zIndex="9"
      bg={"white"}
    >
      <Flex alignItems={`center`}>
        <Image mr={`4`} w={`50px`} src="/images/btc.svg" />
        <Text>Home</Text>
      </Flex>
      <Flex alignItems={`center`}>
        <Text>Posts</Text>
        <Text m={`2`}>Trending</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            w={{ base: `100px`, sm: "160px", md: "auto" }}
            type="tel"
            placeholder="Search"
          />
        </InputGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
