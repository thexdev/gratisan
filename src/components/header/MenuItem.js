import React, { memo } from 'react';
import { Text } from '@chakra-ui/core';

const MenuItem = ({ children }) => {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );
};

export default memo(MenuItem);
