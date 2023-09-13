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

const Label = ({ children, color }) => (
  <Center>
    <Text
      textAlign="center"
      fontSize="md"
      w="20"
      borderRadius="20%"
      bgColor={color}
    >
      {children}
    </Text>
  </Center>
);

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <>
      <Card
        bg="white"
        borderRadius="2rem"
        alignItems="center"
        onClick={() => clickFn(recipe)}
        maxWidth="300px"
        mt="2rem"
      >
        <CardBody>
          <Stack spacing={1}>
            <Box mb="150px" h="20%" overflow="hidden">
              <Image
                src={recipe.image}
                alt={recipe.label}
                objectFit="cover"
                borderRadius="2rem"
                borderBottomRadius="0%"
                position="absolute"
                top="0"
                left="0"
                h="150px"
                w="100%"
              ></Image>
            </Box>

            <Box>
              <Center>
                <Text>{recipe.mealType.join(",")}</Text>
              </Center>
            </Box>
            <CardHeader>
              <Center>
                <Heading mt="-6" textAlign="center" size="sm">
                  {recipe.label}
                </Heading>
              </Center>
            </CardHeader>
            <Box>
              {recipe.healthLabels.includes("Vegan") && (
                <Center>
                  <Text
                    mt="-5"
                    textAlign="center"
                    fontSize="md"
                    w="20"
                    borderRadius="20%"
                    bgColor="purple.200"
                  >
                    Vegan
                  </Text>
                </Center>
              )}
              {recipe.healthLabels.includes("Vegetarian") && (
                <Center pt="1">
                  <Text
                    textAlign="center"
                    fontSize="md"
                    w="20"
                    borderRadius="20%"
                    bgColor="purple.200"
                  >
                    Vegetarian
                  </Text>
                </Center>
              )}
            </Box>

            <Box>
              <Center>
                <Text
                  textAlign="center"
                  fontSize="md"
                  w="20"
                  borderRadius="20%"
                  bgColor="green.200"
                >
                  {recipe.dietLabels.join(", ")}
                </Text>
              </Center>
            </Box>

            <Box>
              <Center>
                <Text fontSize="md">Dish: {recipe.dishType.join(",")}</Text>
              </Center>
            </Box>
            {recipe.cautions.length > 0 && (
              <Box>
                <Center>
                  <Heading fontSize="sm">Cautions :</Heading>
                </Center>
                {recipe.cautions.map((caution, allergy) => (
                  <Label key={allergy} color="red.400">
                    {caution}
                  </Label>
                ))}
              </Box>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
