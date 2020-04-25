import React, { memo } from 'react';
import SectionNoHeader from 'components/section/NoHeader';
import { Box, SimpleGrid, Text } from '@chakra-ui/core';

const columns = {
  sm: 1,
  md: 4,
};

const Service = () => {
  return (
    <SectionNoHeader>
      <SimpleGrid columns={columns} spacing={10}>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            Penyedia Cloud
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            Source Code Repo
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            Open API
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            CI / CD
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            Layanan Pesan
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            Font
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            UI / UX
          </Text>
        </Box>
        <Box padding="1em" border="2px solid #E2E8F0" rounded="lg">
          <Text textAlign="center" fontSize="xl" color="gray.700">
            Web Hosting
          </Text>
        </Box>
      </SimpleGrid>
    </SectionNoHeader>
  );
};

export default memo(Service);
