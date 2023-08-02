import React from 'react'
import './About_our_product.css'
import { Box,Container,Heading,SimpleGrid, Icon, Text, Stack, HStack, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
  
  
  
  
  
  
  



// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
})

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontFamily={'poppins, sans-serif'} fontSize={'3xl'}>About Our Products</Heading>
        <Text fontFamily={'popins, sans-serif'} color={'gray.600'} fontSize={'xl'}>
        Chainlinx is dedicated to crafting business-oriented products designed for maximum efficiency and user satisfaction. Our user-friendly and intuitive software sets us apart in the market, providing you with a seamless experience that allows you to fully leverage every feature and capability. Take charge of your business with Chainlinx and unlock the true potential of our software.
        </Text>
      </Stack>
    </Box>
  )
}