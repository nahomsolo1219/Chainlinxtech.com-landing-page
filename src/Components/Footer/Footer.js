import react from 'react'
import './Footer.css'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function SmallWithNavigation() {
  return (
    <Box
      fontFamily='Poppins, sans-serif'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        fontFamily='Poppins, sans-serif'
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'+251920735586'} fontFamily= 'Poppins, sans-serif' >
             +251-920-735-586
          </Box>
          <Box as="a" href={'mailto:info@chainlinxtechnologies.com'} fontFamily={'Poppins, sans-serif'} >
           Info@chainlinxtechnologies.com
          </Box>
        </Stack>
        <Text fontFamily={'Poppins, sans-serif'}>© 2022 Chainlinx Technologies. All rights reserved</Text>
      </Container>
    </Box>
  )
}