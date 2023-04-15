import { Box, VStack, Image, Button, Grid, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IRoomProps {
  pk: number;
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({ imageUrl, name, rating, city, country, price, pk }: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300")
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"3xl"}>
        <Image minH="280" src={imageUrl} />
        <Button variant={"unstyled"} position="absolute" top={0} right={0} color="white">
          <FaRegHeart size={20} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>{name}</Text>
          <HStack _hover={{
            color: "red.100",
          }} spacing={1} alignItems="center">
            <FaStar size={15} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>{city}, {country}</Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>{price}</Text>/  night
      </Text>
    </VStack>
  )
}