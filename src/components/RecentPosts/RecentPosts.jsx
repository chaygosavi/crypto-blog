import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";
import blogData from "../../Data";

// console.log(blogData);

const RecentPosts = () => {
  return (
    <>
      <Container maxW={"1300px"}>
        <Heading m="8" fontSize={"2xl"}>
          Recent Posts
        </Heading>
        <Flex flexWrap="wrap" gap={"20px"} justify={"space-evenly"}>
          {blogData.map((data) => (
            <PostCard data={data} />
          ))}
        </Flex>
        <Heading m="8" textAlign={"center"} fontSize={"2xl"}>
          Read More...
        </Heading>
      </Container>
      <Container
        p={"4"}
        color={"white"}
        bgColor={"orange"}
        textAlign="center"
        maxW={"1300px"}
      >
        2022 @ CHAITANYA GOSAVI
      </Container>
    </>
  );
};

export default RecentPosts;
