import { Input } from "../components";
import { Flex, Button, Stack } from "@chakra-ui/react";

export default function SignIn() {
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
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
