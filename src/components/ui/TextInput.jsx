import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      id="search"
      name="search"
      variant={"filled"}
      focusBorderColor="black"
      _focus={{ background: "white" }}
      fontSize={"sm"}
      color="blue.400"
      fontStyle={"italic"}
      placeholder="Search Recipe Names Healthlabels Dietlabels Cautions Vegan Vegatarian"
      _placeholder={{ color: "gray.400" }}
      _hover={{ background: "white" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
