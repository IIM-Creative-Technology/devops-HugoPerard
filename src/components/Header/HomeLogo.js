import React from "react";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/core";
import logo from '../../assets/est-logo.png';

export const HomeLogo = () => (
    <Flex align="center" borderWidth="1px" borderRadius="lg" p={5}>
        <Box width={{ md: "7em", sm: "4em" }}>
            <Image
                src={logo}
                boxSize="auto"
            />
        </Box>
        <Center ml={4}>
            <Box align="right">
                <Heading fontSize="xl" letterSpacing={"-.1rem"}>Etoile Sportive Tourville</Heading>
                <Text fontSize="sm">Fondée en 1938</Text>
            </Box>
        </Center>
    </Flex>
);