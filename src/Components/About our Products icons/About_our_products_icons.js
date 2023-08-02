import React from "react";
import "./About_our_products_icons.css";
import Customer_support  from '../../assets/customer_support-removebg-preview.png'
import { Spacer, Flex, Card, CardHeader, CardBody, CardFooter, Image,Stack, Heading, Text, Divider, ButtonGroup, Button,} from "@chakra-ui/react";


function About_our_products_icons() {
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Card maxW="sm">
          <CardBody fontFamily={'poppins, sans-serif'} >
            <Image 
              height={'220px'}
              src={Customer_support}
              alt="Chainlinx Technologies"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Friendly customer Support</Heading>
              <Text>
              No matter the challenge you encounter, we are just a phone call or email away. From onboarding to troubleshooting and everything in between, we are with you every step of the way. 
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW="sm" 
        border={'none'}
        marginLeft={{ base: '0px', md: '15px' }}
        marginTop={{ base: '15px', md: '0px' }}
        >
          <CardBody fontFamily={'poppins, sans-serif'}>
            <Image
              src="https://img.freepik.com/free-vector/tiny-programmers-upgrading-operation-system-computer-isolated-flat-illustration_74855-11138.jpg?w=1380&t=st=1690991109~exp=1690991709~hmac=53aa0d23b8ff06d7f787bca34fe076ecaec27be1430a152dca3022ccb93544d7"
              alt="Chainlinx Technologies"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Constant Update</Heading>
              <Text>
              Empowering Your Business with Constant Updates and Advanced Technology: Our Commitment to Delivering Ongoing Enhancements at No Extra Cost
              </Text>
            </Stack>
          </CardBody>
          
          
        </Card>
      </Flex>
    </div>
  );
}

export default About_our_products_icons;
