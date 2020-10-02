import React from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/core";
import footeo from '../../assets/footeo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

export const SocialBar = () => (
    <Flex>
        <Text mt={1}>
            Suivez l'ES Tourville :
        </Text>
        <Flex mx={2}>
            <Link m={1} href="https://www.facebook.com/ES.Tourville/" isExternal>
                <Image boxSize="1.5em" src={facebook}/>
            </Link>
            <Link mt={1} href="https://twitter.com/TourvilleEs" isExternal>
                <Image boxSize="1.5em" src={twitter}/>
            </Link>
            <Link m={1} href="https://tourville-sur-arques.footeo.com/" isExternal>
                <Image boxSize="2em" src={footeo} pb={3}/>
            </Link>
        </Flex>
    </Flex>
);