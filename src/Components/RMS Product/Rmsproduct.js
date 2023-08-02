import React from 'react';
import './Rmsproduct.css'
import {  Container,  SimpleGrid, Stack,  Flex,  Text, Heading,  StackDivider,  useColorModeValue,  Image,  Icon,} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, IoAccessibility, IoWallet, IoCalculatorSharp, IoCalendarSharp, IoBagCheckOutline, IoFastFoodOutline } from 'react-icons/io5';


interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: React.ReactElement;
}

const Feature: React.FC<FeatureProps> = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const SplitWithImage: React.FC = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'Enterprise Resource planning'}
            src={
              'https://img.freepik.com/free-vector/barcode-concept-illustration_114360-7032.jpg?w=740&t=st=1690987033~exp=1690987633~hmac=db86b92cda562882f5d3b147b635513d83932ad9d8d508ad71e2d0f39fbe10c3'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            fontFamily={'poppins, sans-serif'}
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Restaurant Management Software
          </Text>
          <Heading fontSize={'30px'} fontFamily={'poppins, sans-serif'} >Effortless Restaurant Management: Simplify Management, Reservation, and More!</Heading>
          <Text  fontFamily={'poppins, sans-serif'} color={'gray.500'} fontSize={'lg'}>
          Transform the way you run your restaurant with our cutting-edge cloud-based solution. Whether you operate a single-location Full-Service Restaurant (FSR), a multi-location Quick Service Restaurant (QSR), a bustling bar, or a dynamic multi-concept restaurant, we've got you covered.
          </Text>
          <Stack
           fontFamily={'poppins, sans-serif'}
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
          >
            <Feature
              icon={<Icon as={IoCalculatorSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Accounting'}
            />
            <Feature
              icon={<Icon as={IoFastFoodOutline} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Menu Management'}
            />
            <Feature
              icon={<Icon as={IoBagCheckOutline} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Inventory Management'}
            />
            <Feature
              icon={<Icon as={IoCalendarSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Reservation'}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SplitWithImage;
