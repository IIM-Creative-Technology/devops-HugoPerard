import React, { useState } from "react";
import { Box, Image, Link, HStack, VStack, Wrap } from "@chakra-ui/core";
import { HomeLogo } from "./HomeLogo";
import { SocialBar } from "./SocialBar";
import { NavigationBar } from "./NavigationBar";
import bottomNavBar from "../../assets/navbar-bottom.png"

export const Header = props => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <Box>
            <Wrap
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1em"
                bg="blue.800"
                color="white"
                {...props}
            >
                <Link href={"/"}>
                    <HomeLogo />
                </Link>

                <VStack>
                    <HStack mb={5}>
                        <SocialBar />
                    </HStack>
                    <Box
                        display={{ sm: show ? "block" : "none", lg: "flex" }}
                        width={{ sm: "full", lg: "auto" }}
                        alignItems="center"
                        flexGrow={1}
                        placement="bottom"
                    >
                        <NavigationBar />
                    </Box>
                </VStack>

                <Box display={{ sm: "block", lg: "none" }} onClick={handleToggle} p={3} borderWidth="1px">
                    <svg
                        fill="white"
                        width="12px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Box>
            </Wrap>
            <Image src={bottomNavBar} boxSize="100%"/>
        </Box>
    );
};

export default Header;
