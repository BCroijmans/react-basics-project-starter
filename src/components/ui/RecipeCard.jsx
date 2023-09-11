import {
  CardBody,
  Box,
  Stack,
  Heading,
  Text,
  Card,
  Image,
  CardHeader,
  Center,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe }) => {
  return (
    <>
      <Card bg="white" borderRadius="2rem" alignItems="center">
        <CardBody>
          <Stack>
            <Box>
              <Image
                src={recipe.image}
                alt={recipe.label}
                objectFit="cover"
                borderRadius="2rem"
                h="150px"
                w="250px"
              ></Image>
            </Box>
            <Box>
              <Center>
                <Text>{recipe.mealType.join(",")}</Text>
              </Center>
            </Box>
            <CardHeader>
              <Center>
                <Heading textAlign="center" size="sm">
                  {recipe.label}
                </Heading>
              </Center>
            </CardHeader>
            <Box>
              {recipe.healthLabels.includes("Vegan") && (
                <Center>
                  <Text fontSize="md">Vegan</Text>
                </Center>
              )}
              {recipe.healthLabels.includes("Vegetarian") && (
                <Center>
                  <Text fontSize="md">Vegetarian</Text>
                </Center>
              )}
            </Box>
            <Box>
              <Center>
                <Text pt="2" fontSize="sm">
                  {recipe.dietLabels.join(", ")}
                </Text>
              </Center>
            </Box>
            <Box>
              <Center>
                <Text fontSize="md">Dish: {recipe.dishType.join(",")}</Text>
              </Center>
            </Box>
            <Box>
              <Center>
                <Heading fontSize="sm">Cautions :</Heading>
              </Center>
              <Center>
                <Text> {recipe.cautions.join(",")}</Text>
              </Center>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
