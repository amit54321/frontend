import { Box, Card, CardFooter, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function GameCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card w="400px" m="auto" mt={10} position="relative" borderRadius={20}>
      <Box
        h="400px"
        w="400px"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        onClick={() => navigate(`/gameCard/${data.id}`)}
      >
        <Image
          alt={data.title}
          src={data.url}
          w="100%"
          h="100%"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          bg="#f7f7f7"
        />
      </Box>
      <CardFooter justifyContent={"center"}>
        <VStack>
          <Text
            fontWeight="bold"
            color="pink"
            style={{
              fontSize: "2rem",
            }}
          >
            {data.title}
          </Text>

          <Text
            style={{
              color: "black",

              fontSize: "1rem",
            }}
          >
            {data.desc}
          </Text>
        </VStack>
      </CardFooter>
    </Card>
  );
}
