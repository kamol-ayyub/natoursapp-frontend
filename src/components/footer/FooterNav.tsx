import { FC } from 'react';
import styled from 'styled-components';
import { FooterNavType } from '../../types/types';

const FooterNavBase = styled.ul`
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-end;
`;

const FooterNavLi = styled.li`
  color: #777;
  text-decoration: none !important;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin-left: 1.5rem;
`;

export const FooterNav: FC<FooterNavType> = ({ items }) => {
  return (
    <FooterNavBase>
      {items &&
        items.map((el) => {
          return <FooterNavLi key={el}>{el}</FooterNavLi>;
        })}
    </FooterNavBase>
  );
};
