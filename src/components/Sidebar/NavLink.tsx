import { Text, Icon, Link, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: React.ElementType;
  children: string;
}

export default function NavLink({
  icon,
  children,
  ...customProps
}: NavLinkProps) {
  return (
    <Link display="flex" color="pink.400" align="center" {...customProps}>
      <Icon as={icon} fontSize="20" />

      <Text ml="4" fontSize="sm" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
