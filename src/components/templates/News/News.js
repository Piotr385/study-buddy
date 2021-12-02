import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ArticleWrapper,
  ContentWrapper,
  NewsSectionHeader,
  TitleWrapper,
  Wrapper,
} from './News.styled';
import TextButton from 'components/atoms/UI/TextButton/TextButton';

const API_TOKEN = '6e0526ba71e8c053faffe7d4a33f67';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <TextButton isBig>Read more</TextButton>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

News.propTypes = {};

export default News;
