import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ButtonAddCheckin = styled(Button)`
  margin: 10px;
  background-color: #ee4d64;
`;

export const Content = styled.View`
  flex: 1;
  background: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
