import React, {useEffect, useState} from 'react';
import { getArticles } from '../../services/articles'

export const Articles = () => {
    const [articles, setArticles] = useState([]);

    const getAllArticles = async () => {
      const { data, status } = await getArticles;
      if (status === '200') setArticles(data);
    };

    useEffect(() => {
        getAllArticles();
    }, []);

    const articleJson = {
        title: 'Premier article du site',
        text: 'Voici le tout premier article du site',
        cover: null,
        photos: []
    }
    console.log(articleJson);
    console.log(articles);

    return (
        <div>

        </div>
    )
};