import React, { memo } from 'react';
import { Box, Heading } from '@chakra-ui/core';

const Section = ({ heading, children }) => {
  return (
    <Box as="section" mt="15em" px="1em">
      <Heading color="gray.700" textAlign="center" mb="0.9em">
        {heading}
      </Heading>
      {children}
    </Box>
  );
};

export default memo(Section);
