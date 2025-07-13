import React from 'react';
import { BaseFooterProps } from './types-footer';
import { FlexContainer } from '../containers';
import CaptionText from '../typography/CaptionText';
import UIImage from '../images/UIImage';

const Footer: React.FC<BaseFooterProps> = ({
  bg,
  color,
  padding = 'xl',
  companyName = '',
  logo = '',
  footerMessage = 'Crafted with care by the MELLC team — powered by Next.js and our custom UI system.',
  fontWeight = 'bold',
  ...rest
}) => {
  return (
    <footer className={'w-full'}>
      <FlexContainer
        bg={bg}
        flexDirection={'col'}
        gap={2}
        alignItems="center"
        justify="center"
        padding={padding}
        {...rest}
      >
        <FlexContainer gap={2}>
          <CaptionText color={color}>
            &copy; {new Date().getFullYear()} {companyName}
          </CaptionText>
          {logo && <UIImage src={logo} alt="Logo" width={50} height={50} className="h-8 w-auto" />}
          <CaptionText color={color}>All rights reserved.</CaptionText>
          {''}
        </FlexContainer>
        <CaptionText align="right" color={color} weight={fontWeight}>
          {footerMessage}
        </CaptionText>
      </FlexContainer>
    </footer>
  );
};

export default Footer;
