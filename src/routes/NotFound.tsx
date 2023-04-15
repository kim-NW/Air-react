import { Heading, Text, VStack, Button, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
      <Heading>Page not found.</Heading>
      <Text>It seems that you're lost</Text>
      <Link href="/">
        <Button colorScheme={"twitter"} variant={"outline"}>Go home &rarr;</Button>
      </Link>
    </VStack>
  );
}