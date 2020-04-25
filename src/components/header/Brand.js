import React, { memo } from 'react';
import { Flex, Heading } from '@chakra-ui/core';

const Brand = () => {
  return (
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg" color="purple.500">
        Gratisan
      </Heading>
    </Flex>
  );
};

export default memo(Brand);
