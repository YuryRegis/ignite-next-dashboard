import { Box, Text, Stack } from "@chakra-ui/react";

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function NavSection({ children, title }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>

      <Stack mt="8" spacing="4" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
