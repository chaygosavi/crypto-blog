import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Container
      maxW={`1300px`}
      display={`flex`}
      h={"100vh"}
      mt={{ base: "-5em" }}
      alignItems={"center"}
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack h={"350px"} justify={{ base: "center", md: "space-around" }}>
        <Heading
          textAlign={{ base: "center", md: "left" }}
          as={"h1"}
          fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }}
        >
          Get Crypto Related Knowledge
        </Heading>
        <Text
          textAlign={{ base: "center", md: "left" }}
          as={"p"}
          maxW={{ base: "100%", md: "80%" }}
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illo
          commodi incidunt adipisci exercitationem quibusdam enim veniam dicta
          odio tempore.
        </Text>
        <Box>
          <Button ml={{ base: "35%", md: "0" }} colorScheme={"orange"}>
            Check Posts
          </Button>
        </Box>
      </Stack>
      <Flex mt={{ base: "8", md: "0" }} justifyContent={"center"}>
        <Image w={{ base: "80%", md: "auto" }} mr={"4"} src="/images/btc.svg" />
      </Flex>
    </Container>
  );
};

export default Hero;
