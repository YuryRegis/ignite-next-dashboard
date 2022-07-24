import {
  Flex,
  Input,
  Button,
  FormLabel,
  FormControl,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        p="8"
        w="100%"
        as="form"
        bg="gray.800"
        maxWidth={360}
        flexDir="column"
        borderRadious={8}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              size="lg"
              id="email"
              name="email"
              type="email"
              variant="filled"
              bgColor="gray.900"
              _focus={{ borderWidth: "1px", borderColor: "pink.500" }}
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              size="lg"
              id="password"
              name="password"
              type="password"
              variant="filled"
              bgColor="gray.900"
              _focus={{ borderWidth: "1px", borderColor: "pink.500" }}
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
