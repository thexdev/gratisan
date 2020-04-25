import React, { memo, useCallback, useState } from 'react';
import Brand from './Brand';
import Menu from './Menu';
import Option from './Option';
import { Box, Flex } from '@chakra-ui/core';

const hamburgerBarDisplay = { sm: 'block', md: 'none' };

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = useCallback(() => setShow(!show), [show]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      color="gray.500"
      borderBottom="1px solid #E2E8F0"
    >
      <Brand />

      <Box
        display={hamburgerBarDisplay}
        onClick={handleToggle}
        fontSize="1.5em"
      >
        {show ? (
          <span className="ri-menu-2-line"></span>
        ) : (
          <span className="ri-menu-3-line"></span>
        )}
      </Box>

      <Menu isShow={show} />

      <Option isShow={show} />
    </Flex>
  );
};

export default memo(Header);
