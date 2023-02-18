import {
  Box,
  Text,
  GridItem,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"blue.300"}>
      <VStack py={"2rem"}>
        <Text color="white" fontSize={"2rem"} fontWeight="bold">
          {"GAMES"}
        </Text>
        <Text
          color="white"
          fontSize={"1rem"}
          fontWeight="bold"
          w={"50%"}
          align={"center"}
        >
          {
            "Our dream is to create games that as many people as possible play for years and that are remembered forever."
          }
        </Text>
        <Button
          bg={"white"}
          w={100}
          h={10}
          cursor={"pointer"}
          as={"a"}
          display={"inline-flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight="bold"
          onClick={() => navigate(`/games`)}
        >
          SEE GAMES
        </Button>
      </VStack>
    </Box>
  );
};
export default Homepage;
