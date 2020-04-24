import React, { memo } from 'react';
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/core';

const display = {
  sm: 'inline',
};
const marginRight = {
  sm: '1em',
};
const marginButtom = {
  sm: '1em',
};

const SelectLanguage = () => {
  return (
    <Box mr={marginRight} mb={marginButtom} display={display}>
      <Menu>
        <MenuButton as={Button} size="sm" rightIcon="chevron-down">
          Pilih bahasa
        </MenuButton>
        <MenuList>
          <MenuItem>Bahasa Indonesia</MenuItem>
          <MenuItem>Bahasa Inggris</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default memo(SelectLanguage);
