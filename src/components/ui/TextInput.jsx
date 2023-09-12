import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant={"filled"}
      focusBorderColor="black"
      _focus={{ background: "white" }}
      fontSize={"sm"}
      color="blue.400"
      fontStyle={"italic"}
      placeholder=" Find youre recipe!"
      _placeholder={{ color: "gray.400" }}
      _hover={{ background: "white" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
