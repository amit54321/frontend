import { Text, Box, Image, Center } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <>
      <Box
        h="auto"
        w="auto"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        bg={"white.600"}
        align={"center"}
      >
        <Text
          color="teal.500"
          fontSize={{ lg: "2.5rem", md: "1.5rem", base: "1.5rem" }}
          fontWeight="bold"
        >
          {"KAISER"}
        </Text>
        <Text color="black" px={"5%"} py={"2%"} fontSize={"1.5rem"}>
          {
            "Kaiser is a game company based in Delhi. Since our launch in 2023, we've brought one game to the global market – Delivery Boy. Our dream is to create great games that as many people as possible play for years and that are remembered forever."
          }
        </Text>
      </Box>
    </>
  );
}
