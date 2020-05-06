import React, { memo } from 'react';
import Section from 'components/section';
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import lighthouse from 'assets/img/undraw_Lighthouse_frb8.svg';

const columns = {
  sm: 1,
  md: 2,
};

const About = () => {
  return (
    <Section heading="GRATISAN">
      <SimpleGrid columns={columns} spacing={10}>
        <Box>
          <Image src={lighthouse} size="65%" />
        </Box>
        <Box>
          <Text fontSize="xl">
            Jika kamu adalah seorang developer atau programmer,{' '}
            <Text as="strong" color="purple.600">
              Gratisan
            </Text>{' '}
            adalah tempat dimana kamu bisa menemukan resource dan layanan yang
            bisa kamu gunakan secara gratis
          </Text>
          <Text fontSize="xl" mt="0.7em">
            Resource dan layanan yang bisa kamu temukan adalah{' '}
            <Text as="strong" color="purple.600">
              cloud computing
            </Text>
            ,{' '}
            <Text as="strong" color="purple.600">
              open api
            </Text>
            ,{' '}
            <Text as="strong" color="purple.600">
              font
            </Text>{' '}
            dan masih banyak lagi!
          </Text>
          <Text fontSize="xl" mt="0.7em">
            Kamu bisa membuat aplikasi atau service dari hal tersebut. Atau
            sekedar belajar biar makin jago!
          </Text>
          <Link to="/tentang">
            <Button
              mt="1.3em"
              bg="red.500"
              color="gray.100"
              _hover={{
                bg: 'gray.100',
                color: 'red.400',
              }}
            >
              Baca selengkapnya
            </Button>
          </Link>
        </Box>
      </SimpleGrid>
    </Section>
  );
};

export default memo(About);
