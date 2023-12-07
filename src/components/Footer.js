import React from "react";
import {Box, Flex, Link} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#221d32">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Xo'janazar Hayitboyev • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
