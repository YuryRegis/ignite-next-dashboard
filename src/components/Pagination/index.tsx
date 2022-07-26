import { Box, Button, HStack } from "@chakra-ui/react";
import ButtonPagination from "./ButtonPagination";

export default function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>10</strong>
      </Box>

      <HStack spacing="2">
        <ButtonPagination isCurrent={true} number={1} />

        <ButtonPagination isCurrent={false} number={2} />

        <ButtonPagination isCurrent={false} number={3} />

        <ButtonPagination isCurrent={false} number={4} />
      </HStack>
    </HStack>
  );
}
