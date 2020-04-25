import React, { memo } from 'react';
import { Box } from '@chakra-ui/core';

const NoHeader = ({ children }) => {
  return (
    <Box as="section" mt="15em" px="1em">
      {children}
    </Box>
  );
};

export default memo(NoHeader);
