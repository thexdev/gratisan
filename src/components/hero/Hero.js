import React, { memo } from 'react';
import Illustration from 'assets/img/undraw_co-working_825n.svg';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';

const gridColumns = {
  sm: 1,
  md: 2,
};
const imgBoxDisplay = {
  sm: 'none',
  md: 'block',
};
const headingTextAlign = {
  sm: 'center',
  md: 'left',
};
const subheading1Display = {
  sm: 'none',
  md: 'block',
};
const buttonGroupTextAlign = {
  sm: 'center',
  md: 'left',
};

const Hero = () => {
  return (
    <SimpleGrid columns={gridColumns} mt="6em">
      <Box px="1em">
        <Heading
          size="2xl"
          as="h1"
          color="gray.700"
          textAlign={headingTextAlign}
        >
          Kumpulan resource dan layanan{' '}
          <Text as="span" color="purple.600">
            GRATIS
          </Text>{' '}
          untuk{' '}
          <Text as="span" color="red.400">
            developer
          </Text>{' '}
          kreatif!
        </Heading>
        <Heading
          color="gray.600"
          size="lg"
          mt="1em"
          display={subheading1Display}
        >
          Membangun sesuatu yang bermanfaat dan membagikannya kepada orang lain~
        </Heading>
        <ButtonGroup
          spacing={5}
          mt="2em"
          width="100%"
          textAlign={buttonGroupTextAlign}
        >
          <Button variantColor="purple" size="lg" color="gray.100">
            Get started
          </Button>
          <Button variantColor="gray" size="lg" color="gray.700">
            Github
          </Button>
        </ButtonGroup>
      </Box>
      <Box px="1em" display={imgBoxDisplay}>
        <Image src={Illustration} alt="Creative People" size="75%" />
      </Box>
    </SimpleGrid>
  );
};

export default memo(Hero);
