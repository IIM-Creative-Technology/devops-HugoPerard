import React, {useCallback, useEffect, useState} from 'react';
import { Heading, Image, Flex, Text, VStack, StackDivider } from '@chakra-ui/core';
import { getArticles } from '../../services/articles';

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [hasError, setError] = useState(false);

    const getAllArticles = useCallback(async () => {
        const { data, status } = await getArticles;
        if (status === 200) {
            setArticles(data);
        } else {
            setError(true);
        }
    }, []);


    useEffect(() => {
        getAllArticles();
    }, [getAllArticles]);

    /*
    const handleSubmitArticleForm = async event => {
        try {
            await addArticles({
                title: event.target.title.value,
                text: event.target.text.value,
                cover: event.target.cover.value
            });
        } catch (e) {
            toast({title: "Erreur lors de l'ajout d'un article"});
        }
    };
    */

    return (
        <div>
            {hasError && <Text>Une erreur est survenue lors du chargement des données</Text>}
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
            </VStack>
        </div>
    )
};