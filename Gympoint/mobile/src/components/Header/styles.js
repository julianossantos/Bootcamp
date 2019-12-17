import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  height: 50px;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #ee4d64;
`;

export const ImageLogo = styled.ImageBackground`
  position: absolute;
  align-self: center;
  height: 44px;
`;

export const ButtonSignUp = styled(Button)`
  height: 20px;
  width: 20px;
  margin-top: 3px;
  margin-left: 80%;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.5);
`;
