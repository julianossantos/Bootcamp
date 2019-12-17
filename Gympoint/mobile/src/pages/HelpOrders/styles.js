import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: 44px;
  margin: 0 auto;
  display: flex;
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
  margin-left: 80%;
  border-radius: 4px;
  background-color: #ee4d64;
`;

export const ButtonAddHelpOrders = styled(Button)`
  margin: 10px;
  background-color: #ee4d64;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  background: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
