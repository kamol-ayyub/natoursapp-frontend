import { FC } from 'react';
import { GuideProps } from '@/types/types';
import { Image, Span } from '@/components';
import styled from 'styled-components';
const OverviewBoxBase = styled.div`
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;
  :not(:last-child) {
    margin-bottom: 2.25rem;
  }
  svg {
    margin-right: 1.25rem;
  }
`;

export const TourGuide: FC<GuideProps> = ({ name, title, photo }) => {
  return (
    <OverviewBoxBase>
      <Image src={`../../img/users/${photo}`} alt='Lead guide' OverviewBoxImg />
      <Span OverviewBoxLabel>{title}</Span>
      <Span OverviewBoxText>{name}</Span>
    </OverviewBoxBase>
  );
};
