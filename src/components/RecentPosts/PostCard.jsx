import {
  Avatar,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PostCard = ({ data }) => {
  return (
    <Stack
      minW={"20rem"}
      maxW={"20rem"}
      boxShadow="lg"
      borderRadius={"lg"}
      overflow="hidden"
    >
      <Image src="/images/pic1.webp" />
      <Stack p="4">
        <Heading>{data.title}</Heading>
        <Flex>
          <Avatar src="/images/avatar.png" />
          <Stack>
            <Text fontWeight="bold">{data.authorName}</Text>
            <Text>{data.publishDate}</Text>
          </Stack>
        </Flex>
        <Text>{data.description}</Text>
        <Flex>
          {data.tags.map((tag) => (
            <Tag m={".1em"}>{tag}</Tag>
          ))}
        </Flex>
        <Button alignSelf={"flex-end"} colorScheme={"orange"}>
          Read more
        </Button>
      </Stack>
    </Stack>
  );
};

export default PostCard;
