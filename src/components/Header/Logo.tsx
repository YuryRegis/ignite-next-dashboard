import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      w="64"
      fontWeight="bold"
      letterSpacing="tight"
      fontSize={["2xl", "3xl"]}
    >
      Dashboard
      <Text ml="1" as="span" color="pink.500">
        .
      </Text>
    </Text>
  );
}
