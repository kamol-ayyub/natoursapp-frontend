import { FC } from 'react';
import { HeadingSecondary } from '../../components';
import styled from 'styled-components';
import { TourDescriptionProps } from '../../types/types';
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

export const TourDescription: FC<TourDescriptionProps> = ({
  tourName,
  description,
}) => {
  return (
    <DescriptionBase>
      <HeadingSecondary MaBtLg>{tourName}</HeadingSecondary>
      <DescriptionText>{description}</DescriptionText>
    </DescriptionBase>
  );
};
