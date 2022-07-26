import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text w="64" fontSize="3xl" fontWeight="bold" letterSpacing="tight">
      Dashboard
      <Text ml="1" as="span" color="pink.500">
        .
      </Text>
    </Text>
  );
}
