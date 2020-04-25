import React, { memo } from 'react';
import Section from 'components/section';
import { Text } from '@chakra-ui/core';

const Overview = () => {
  return (
    <Section heading="Ada apa aja sih?">
      <Text fontSize="xl">
        Semua yang keren dan terbaru! Dan tentu saja,{' '}
        <Text as="strong" color="purple.600">
          GRATIS
        </Text>
      </Text>
    </Section>
  );
};

export default memo(Overview);
