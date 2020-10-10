import React, {useEffect, useState} from 'react';
import { Box, Input, Label, Button, Heading, Image, Flex, Text, VStack, StackDivider } from '@chakra-ui/core';
import {addArticles, getArticles} from '../../services/articles';

const articleJson = {
    title: 'Deuxième article du site',
    text: 'Voici le deuxième article du site',
    cover: 'https://s3.static-footeo.com/uploads/tourville-sur-arques/logo__qep8uc.png',
    photos: []
};

export const Articles = () => {
    const [articles, setArticles] = useState([]);

    const getAllArticles = async () => {
      const { data, status } = await getArticles;
      if (status === 200) setArticles(data);
    };

    useEffect(() => {
        getAllArticles();
    }, []);

    const handleSubmitArticleForm = values => {
        console.log(values);
    };

    return (
        <div>
            <VStack my="6" spacing={10} divider={<StackDivider borderColor="gray.200" />}>
                {articles && articles.map((article) => (
                    <Flex
                        border="2px"
                        borderColor="gray.200"
                        bg="blue.800"
                        p={2}
                        width="80%"
                    >
                        <Image src={article.cover} boxSize={{ sm:"10rem", lg:"20rem" }} mr={4}/>
                        <Flex flexDirection='column' m={3}>
                            <Heading as="h1" fontSize={{ sm:"xl", lg:"3xl" }}>{article.title}</Heading>
                            <Text>
                                {article.text}
                            </Text>
                        </Flex>
                    </Flex>
                    )
                )}
                <Box color="black">
                    <form onSubmit={handleSubmitArticleForm}>
                        <Text>Titre</Text>
                        <Input id="title" required/>
                        <Text>Texte</Text>
                        <Input id="text" required/>
                        <Button type="submit">Valider</Button>
                    </form>
                </Box>
            </VStack>
        </div>
    )
};