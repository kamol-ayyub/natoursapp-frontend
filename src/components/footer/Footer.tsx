import { FC } from 'react';
import Logogreen from '../../img/logo-green.png';
import {
  FooterLogo,
  FooterWrapper,
  Image,
  FooterNav,
  FooterCopyright,
} from '../../components';
import { links } from '../../mocks';

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <Image src={Logogreen} alt='footer green logo' />
      </FooterLogo>
      <FooterNav items={links} />
      <FooterCopyright />
    </FooterWrapper>
  );
};
