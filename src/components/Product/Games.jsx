import { Grid } from "@chakra-ui/react";

import GameCard from "./GameCard";

export const games = [
  {
    id: 1,
    url: "icon.jpg",
    title: "Delivery Boy",
    desc: "Deliver all orders on time",
  },
];

export default function Games() {
  return (
    <>
      <Grid
        templateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        gap={6}
        p="0 2rem"
      >
        {games.map((elem) => {
          return <GameCard key={elem._id} data={elem} />;
        })}
      </Grid>
    </>
  );
}
