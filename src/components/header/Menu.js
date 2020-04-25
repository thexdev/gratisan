import React, { memo } from 'react';
import MenuItem from './MenuItem';
import { Box } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const width = { sm: 'full', md: 'auto' };

const Menu = ({ isShow }) => {
  return (
    <Box
      display={{ sm: isShow ? 'block' : 'none', md: 'flex' }}
      width={width}
      alignItems="center"
      flexGrow={1}
    >
      <MenuItem>
        <Link to="/">Beranda</Link>
      </MenuItem>
      <MenuItem>
        <Link to="table-of-contents">Table of Centent's</Link>
      </MenuItem>
      <MenuItem>
        <Link to="kontributor">Kontributor</Link>
      </MenuItem>
      <MenuItem>
        <Link to="showcase">Showcase</Link>
      </MenuItem>
      <MenuItem>
        <Link to="tentang">Tentang</Link>
      </MenuItem>
    </Box>
  );
};

export default memo(Menu);
