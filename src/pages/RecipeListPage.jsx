import { SimpleGrid, Text, Heading, Box } from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/RecipeCard";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  // ik dacht doe wat meer dan gevraagd is je kunt op alle termen en labels zoeken.
  const matchedRecipes = data.hits.filter((recipe) => {
    const searchString = searchField.toLowerCase();
    return (
      recipe.recipe.label.toLowerCase().includes(searchString) ||
      recipe.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchString)
      ) ||
      recipe.recipe.dietLabels.some((label) =>
        label.toLowerCase().includes(searchString)
      ) ||
      recipe.recipe.cautions.some((caution) =>
        caution.toLowerCase().includes(searchString)
      )
    );
  });
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="blue.300"
      >
        <Heading>
          <Text
            textAlign="center"
            fontWeight={600}
            fontSize={["sm", "lg"]}
            mt={[1, 8]}
          ></Text>
          <TextInput changeFn={handleChange} w={[200, 500]} mt={2} />
        </Heading>
      </Box>
      <SimpleGrid
        bg="blue.300"
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={10}
        maxWidth="90%"
        marginX="auto"
      >
        {matchedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            clickFn={clickFn}
          ></RecipeCard>
        ))}
      </SimpleGrid>
    </>
  );
};
