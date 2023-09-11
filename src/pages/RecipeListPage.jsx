import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/RecipeCard";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  const recipe = data.hits;

  return (
    <>
      <SimpleGrid
        bg="blue.300"
        columns={{ base: 1, md: 2, lg: 5 }}
        spacing={10}
      >
        {recipe.map((hit) => (
          <RecipeCard key={hit.recipe.id} recipe={hit.recipe}></RecipeCard>
        ))}
      </SimpleGrid>
    </>
  );
};
