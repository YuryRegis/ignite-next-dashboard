import { Box, Button, HStack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>10</strong>
      </Box>

      <HStack spacing="2">
        <Button
          w="4"
          size="sm"
          fontSize="xs"
          disabled={true}
          colorScheme="pink"
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>

        <Button
          w="4"
          size="sm"
          bg="gray.700"
          fontSize="xs"
          disabled={true}
          colorScheme="pink"
          _hover={{ bg: "gray.500" }}
        >
          2
        </Button>

        <Button
          w="4"
          size="sm"
          bg="gray.700"
          fontSize="xs"
          disabled={true}
          colorScheme="pink"
          _hover={{ bg: "gray.500" }}
        >
          3
        </Button>
      </HStack>
    </HStack>
  );
}
