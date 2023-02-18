import { Text, Box } from "@chakra-ui/react";

export default function Career() {
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
          {"CAREERS"}
        </Text>
        <Text color="black" px={"5%"} py={"2%"} fontSize={"1.5rem"}>
          {"No Job Vacancies "}
        </Text>
      </Box>
    </>
  );
}
