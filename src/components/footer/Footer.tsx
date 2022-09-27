import { FC } from 'react';
import Logogreen from '../../img/logo-green.png';
import { FooterLogo, FooterWrapper, Image, FooterNav } from '../index';
import { links } from '../../mocks/links';
import { FooterCopyright } from './FooterCopyright';

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
