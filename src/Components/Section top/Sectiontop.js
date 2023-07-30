import React from 'react'
import './sectiontop.css'
import { Button, Center, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import imgside from '../../assets/Dribble side.png'




export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,  
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Run your business with efficency
            </Text>
            <br />{' '}
            {' '}
          </Heading>
          <Text  fontFamily={ 'Poppins, sans-serif' } fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Discover Seamless Efficiency with Our Cutting-Edge ERP Software and Restaurant Management System
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <a href='#'>
            <Button
              borderRadius={'5'}
              bg={'#3B4FE4'}
              width={'200px'}
              height={'55px'}
              fontSize={'20px'}
              color={'white'}
              fontFamily={'poppins, sans-serif'}
              _hover={{
                bg: 'blue.500',
              }}>
              Book a meeting
            </Button>
            </a>
          </Stack>
        </Stack>
      </Flex>
      <Flex p={4}  flex={1}>
        <Image
          alt={'Chainlinx Technologies'}
          objectFit={'contain'}
          marginTop={'100px'}
          borderRadius={'10'}
          src={imgside} 
        />
      </Flex>
    </Stack>
  )
}