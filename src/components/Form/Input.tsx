import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

function Input({ name, label, ...customProps }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        size="lg"
        id={name}
        name={name}
        variant="filled"
        bgColor="gray.900"
        _focus={{ borderWidth: "1px", borderColor: "pink.500" }}
        _hover={{ bgColor: "gray.900" }}
        {...customProps}
      />
    </FormControl>
  );
}

export default Input;
