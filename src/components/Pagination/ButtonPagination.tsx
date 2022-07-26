import { Button } from "@chakra-ui/react";

interface ButtonPaginationProps {
  isCurrent?: boolean;
  number: number;
}

export default function ButtonPagination({
  isCurrent,
  number,
}: ButtonPaginationProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  } else {
    return (
      <Button
        w="4"
        size="sm"
        bg="gray.700"
        fontSize="xs"
        disabled={true}
        colorScheme="pink"
        _hover={{ bg: "gray.500" }}
      >
        {number}
      </Button>
    );
  }
}
