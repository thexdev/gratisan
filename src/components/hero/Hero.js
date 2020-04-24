import React, { memo } from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';

const Hero = () => {
  return (
    <Box px="1em" py="3em">
      <Heading size="xl" color="gray.400" textAlign="center">
        Kumpulan resource dan layanan{' '}
        <Text as="span" color="green.400">
          GRATIS
        </Text>{' '}
        untuk developer kreatif!
      </Heading>
    </Box>
  );
};

export default memo(Hero);
