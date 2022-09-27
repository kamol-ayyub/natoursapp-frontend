import React from 'react';
import { HeadingSecondary } from '../heading-elements';
import styled from 'styled-components';
const DescriptionBase = styled.div`
  margin-right: 5rem;
  background-color: white;
  font-size: 1.7rem;
  margin-bottom: 2rem;
`;
const DescriptionText = styled.p`
  font-size: 1.7rem;
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const TourDescription = ({ tourName, description }: any) => {
  return (
    <DescriptionBase>
      <HeadingSecondary MaBtLg>{tourName}</HeadingSecondary>
      <DescriptionText>{description}</DescriptionText>
    </DescriptionBase>
  );
};
