import React from 'react';
import './Products.css'
import {  Container,  SimpleGrid, Stack,  Flex,  Text, Heading,  StackDivider,  useColorModeValue,  Image,  Icon,} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, IoAccessibility, IoWallet } from 'react-icons/io5';


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
            Enterprise Resource Planning
          </Text>
          <Heading  fontFamily={'poppins, sans-serif'} >HR and Finance management solution at one stop</Heading>
          <Text  fontFamily={'poppins, sans-serif'} color={'gray.500'} fontSize={'lg'}>
          Revolutionize your business: Automate and streamline tasks, unlock productivity, and gain crystal-clear financial insights for smarter decisions. Say goodbye to manual processes and hello to efficiency!
          </Text>
          <Stack
           fontFamily={'poppins, sans-serif'}
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
          >
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Project Management'}
            />
            <Feature
              icon={<Icon as={IoWallet} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={<Icon as={IoAccessibility} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Human Resource Management'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Enterprise Resource planning'}
            src={
              'https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379504.jpg?w=996&t=st=1690983022~exp=1690983622~hmac=ef095ea9e09cdc2da1c9eb4cd6862c4d44ce16d5ff565ed0d37605338e76305a'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default SplitWithImage;
