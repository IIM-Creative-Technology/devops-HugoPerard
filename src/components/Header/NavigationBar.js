import React from "react";
import {
    Heading,
    HStack,
    Menu,
    MenuButton,
    MenuGroup,
    MenuList,
    MenuItem,
    MenuDivider,
    Spacer,
    StackDivider,
} from "@chakra-ui/core";
import { ChevronDownIcon } from '@chakra-ui/icons'

export const NavigationBar = () => (
    <HStack spacing="24px" textAlign="center" divider={<StackDivider borderColor="gray.200" />}>
        <Spacer />
        <Menu>
            <MenuButton>
                <Heading fontSize="md" p={5} w="10em">
                    Equipes
                    <ChevronDownIcon />
                </Heading>
            </MenuButton>
            <MenuList color="blue.800">
                <MenuGroup title="Niveau ligue">
                    <MenuItem>Equipe première</MenuItem>
                    <MenuItem>U18</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Niveau district">
                    <MenuItem>Equipe B</MenuItem>
                    <MenuItem>U18 B</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
        <Heading fontSize="md" p={5} w="10em">
            Photos/Vidéos
        </Heading>
        <Heading fontSize="md" p={5} w="10em">
            Pronostiques
        </Heading>
        <Heading fontSize="md" p={5} w="10em">
            Boutique
        </Heading>
        <Menu>
            <MenuButton>
                <Heading fontSize="md" p={5} w="10em">
                    Club
                    <ChevronDownIcon />
                </Heading>
            </MenuButton>
            <MenuList color="blue.800">
                <MenuItem>Partenaires</MenuItem>
                <MenuItem>Organigrammes</MenuItem>
                <MenuItem>Réglement intérieur</MenuItem>
            </MenuList>
        </Menu>
        <Spacer />
    </HStack>
);