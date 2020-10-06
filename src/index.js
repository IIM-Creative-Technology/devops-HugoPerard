import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Articles } from "./components/Articles/Articles";

const breakpoints = ["30em", "48em", "62em", "80em"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
    ...theme,
    breakpoints
};

function App() {
    return (
        <ThemeProvider theme={newTheme}>
            <CSSReset />
            <Header />
            <Articles />
        </ThemeProvider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
