import React, { memo } from 'react';
import { Button, ButtonGroup, Link, Text } from '@chakra-ui/core';

const option = {
  sm: 'center',
  md: 'left',
};

const CTAButton = () => {
  return (
    <ButtonGroup spacing={5} mt="2.5em" width="100%" textAlign={option}>
      <Button variantColor="purple" size="lg" color="gray.100">
        <Text mr="1em" as="span">
          <span className="ri-arrow-right-line"></span>
        </Text>
        Get started
      </Button>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
        href="https://github.com/thexdev/gratisan"
        isExternal
      >
        <Button variantColor="gray" size="lg" color="gray.700">
          <Text mr="1em" as="span">
            <span className="fab fa-github"></span>
          </Text>
          Github
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default memo(CTAButton);
