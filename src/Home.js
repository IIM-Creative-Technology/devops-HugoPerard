import React from 'react';
import { Box } from '@chakra-ui/core';
import { Header } from './components/Header/Header';
import { Articles } from './components/Articles/Articles';

export const Home = () => (
    <Box flexDirection="column" color="white">
        <Header />
        <Box>
            <Articles />
        </Box>
    </Box>
)