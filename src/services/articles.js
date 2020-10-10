import axios from 'axios';

const endpoint = 'https://jsonbox.io/box_' + process.env.JSONBOX_ID;

export const getArticles = axios.get(endpoint + `/articles`);

export const addArticles = (newArticle) => axios.post(endpoint + `/articles`, newArticle);