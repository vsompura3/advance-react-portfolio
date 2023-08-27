import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
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
          <p>Vaibhav Sompura • © 2022</p>
        </Flex>
      </footer>
    </Box>
  )
}

export default Footer
