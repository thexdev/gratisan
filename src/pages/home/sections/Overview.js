import React, { memo, useState } from 'react';
import Section from 'components/section';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/core';

const columns = {
  sm: 1,
  md: 4,
};

const Overview = () => {
  const [services] = useState([
    { name: 'Cloud Provider', icon: 'ri-cloud-line' },
    { name: 'Source Code Repo', icon: 'ri-git-repository-line' },
    { name: 'Open API', icon: 'ri-file-code-line' },
    { name: 'CI / CD', icon: 'ri-terminal-box-line' },
    { name: 'Message Service', icon: 'ri-mail-line' },
    { name: 'Font', icon: 'ri-font-size' },
    { name: 'Design / UI', icon: 'ri-pencil-ruler-2-line' },
    { name: 'Web Hosting', icon: 'ri-server-line' },
    { name: 'Dev Blogging', icon: 'ri-article-line' },
    { name: 'IDE / Code Editing', icon: 'ri-code-s-slash-line' },
    { name: 'Payment / Billing', icon: 'ri-secure-payment-line' },
    { name: 'Analytics', icon: 'ri-bubble-chart-line' },
  ]);

  return (
    <Section heading="Ada apa aja sih?">
      <SimpleGrid columns={columns} spacing={10} marginBottom="3em">
        {services.map((service, index) => (
          <Box
            key={index}
            padding="1em"
            rounded="sm"
            backgroundColor="purple.50"
          >
            <Text textAlign="center" fontSize="4xl" color="purple.600">
              <span className={service.icon}></span>
            </Text>
            <Text textAlign="center" fontSize="xl" color="gray.600">
              {service.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center">
        <Button
          bg="red.500"
          color="gray.100"
          _hover={{
            bg: 'gray.100',
            color: 'red.400',
          }}
        >
          Selengkapnya
        </Button>
      </Box>
    </Section>
  );
};

export default memo(Overview);
