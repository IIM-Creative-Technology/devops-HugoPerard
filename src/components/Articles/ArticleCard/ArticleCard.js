import React from "react";
import { Container, Heading, Text } from "@chakra-ui/core";

export const ArticleCard = article => (
    <Container borderWidth="5">
        <Heading>{article.title}</Heading>
        <Text>
            {article.text}
        </Text>
    </Container>
);
