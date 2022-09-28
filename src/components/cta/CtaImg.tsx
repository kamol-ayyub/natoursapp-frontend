import { FC } from 'react';
import styled, { css } from 'styled-components';
import { CtaImgProp } from '../../types/types';
const CtaImgBase = styled.div<CtaImgProp>`
  ${(props) =>
    props.CtaLogo &&
    css`
      padding: 2rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#7dd56f),
        to(#28b487)
      );
      background: linear-gradient(to right bottom, #7dd56f, #28b487);
      z-index: 10;
      -webkit-transform: translate(-35%, -50%);
      transform: translate(-35%, -50%);
      img {
        width: 100%;
      }
    `}
  height: 15rem;
  width: 15rem;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
  box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
`;

export const CtaImg: FC<CtaImgProp> = ({ children, CtaLogo }) => {
  return <CtaImgBase CtaLogo={CtaLogo}>{children}</CtaImgBase>;
};
