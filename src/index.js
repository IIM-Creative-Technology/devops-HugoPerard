import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, theme } from '@chakra-ui/core';
import { App } from './App';

const breakpoints = ["30em", "48em", "62em", "80em"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
    ...theme,
    breakpoints
};

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider resetCSS theme={customTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
