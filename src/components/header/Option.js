import React, { memo } from 'react';
import SelectLanguage from './SelectLanguage';
import { Box, Button, Text } from '@chakra-ui/core';

const Option = ({ isShow }) => {
  return (
    <Box
      display={{ sm: isShow ? 'block' : 'none', md: 'block' }}
      mt={{ base: 4, md: 0 }}
    >
      <SelectLanguage />
      <Button bg="transparent" border="2px" size="sm">
        <Text mr="0.8em" as="span">
          <span className="fab fa-github"></span>
        </Text>{' '}
        Kontribusi
      </Button>
    </Box>
  );
};

export default memo(Option);
