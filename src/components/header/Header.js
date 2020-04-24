import React, { memo, useCallback, useState } from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = useCallback(() => setShow(!show), [show]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      color="gray.500"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Gratisan
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="#2D3748"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px" size="sm">
          <Text mr="0.8em" className="fab fa-github" as="span" /> Kontribusi
        </Button>
      </Box>
    </Flex>
  );
};

export default memo(Header);
