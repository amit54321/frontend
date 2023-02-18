import { Text, Box, Image, HStack, VStack, Button } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
export const games = [
  {
    id: 1,
    url: "icon.png",
    title: "Delivery Boy",
    desc: "Deliver all orders before other delivery boy",
  },
];
export default function GameScreen() {
  let { id } = useParams();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box
        h="auto"
        w="auto"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        bg={"white.600"}
        align={"left"}
      >
        <br />
        {isDesktop ? (
          <HStack gap={6}>
            <Image
              src="\icon.jpg"
              alt=""
              height={"40%"}
              width={"40%"}
              py={"5rem"}
            />
            <VStack justifyContent={"left"} width={"50%"}>
              <Text
                color="black"
                fontSize={{ lg: "2.5rem", md: "1.5rem", base: "1.5rem" }}
                fontWeight="bold"
              >
                {games[id - 1].title}
              </Text>
              <Text color="blackAlpha" px={"5%"} fontSize={"1.2rem"}>
                Deliver food faster than others.
                <br />
                Construct and Upgrade restaurants.
                <br />
                Show your great driving skills.
                <br />
                Build all the restaurants in the city and manage all food
                deliveries in a multiplayer game with your friend or any other
                player.
                <br />
                Upgrade restaurants and decrease cooking time of a dish.
                <br />
                Ten types of dishes like burger,pizza,french fries etc.
                <br />
                Complete ten deliveries before the opponent.
                <br />
                Show your driving skills and dodge all other cars.
                <br />
                Many missions to be completed.
                <br />
                Be on the top of leaderboards.
              </Text>

              <HStack gap={6} templateColumns={1}>
                <a href="https://play.google.com/store/apps/details?id=com.kaiser.deliever">
                  <img
                    src="/googleplay.webp"
                    alt=""
                    height={"50"}
                    width={"200"}
                  />
                </a>
              </HStack>
            </VStack>
          </HStack>
        ) : (
          <VStack gap={6}>
            <Image
              src="\icon.jpg"
              alt=""
              height={"50%"}
              width={"50%"}
              py={"5rem"}
            />
            <VStack justifyContent={"left"}>
              <Text
                color="black"
                fontSize={{ lg: "2.5rem", md: "1.5rem", base: "1.5rem" }}
                fontWeight="bold"
              >
                {games[id - 1].title}
              </Text>
              <Text color="black" px={"5%"} fontSize={"1.25rem"}>
                Deliver food faster than others.
                <br />
                Construct and Upgrade restaurants.
                <br />
                Show your great driving skills.
                <br />
                Build all the restaurants in the city and manage all food
                deliveries in a multiplayer game with your friend or any other
                player.
                <br />
                Upgrade restaurants and decrease cooking time of a dish.
                <br />
                Ten types of dishes like burger,pizza,french fries etc.
                <br />
                Complete ten deliveries before the opponent.
                <br />
                Show your driving skills and dodge all other cars.
                <br />
                Many missions to be completed.
                <br />
                Be on the top of leaderboards.
              </Text>

              <HStack gap={6} templateColumns={1}>
                <a href="https://play.google.com/store/apps/details?id=com.kaiser.deliever">
                  <Image
                    src="/googleplay.webp"
                    alt=""
                    height={"50"}
                    width={"200"}
                  />
                </a>
              </HStack>
            </VStack>
            <br />
          </VStack>
        )}
      </Box>
    </>
  );
}
