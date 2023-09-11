import { Center, Heading } from "@chakra-ui/react";

export const RecipePage = () => {
  return (
    <>
      <Center>
        <Heading>Stukje tekst mooi he</Heading>
      </Center>
    </>
  );
};

/*
<Box>
<Heading size="xs" textTransform="uppercase">
  Ingredients
</Heading>
<Stack pt="2" spacing="1">
  {recipe.ingredientLines.map((ingredient, index) => (
    <Text key={index} fontSize="sm">
      {ingredient}
    </Text>
  ))}
</Stack>
</Box>*/
/*
<Box>
  <Heading size="xs" textTransform="uppercase">
    Health Labels
  </Heading>
  <Text pt="2" fontSize="sm">
    {recipe.healthLabels.join(", ")}
  </Text>
</Box>;
*/
