import React, {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import styled from 'styled-components';
import usePromise from "../lib/userPromise";

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://www.google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=de963c00732342aaa7ab9bde2613c772`,
        );
    }, [category])

    if (loading) {
        return <div>대기 중...</div>;
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생</NewsListBlock>
    }

    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
