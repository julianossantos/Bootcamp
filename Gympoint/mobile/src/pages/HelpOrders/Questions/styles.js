import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  margin-bottom: 15px;
  margin-top: 100px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonAddQuestion = styled(Button)`
  margin: 10px;
  background-color: #ee4d64;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  margin-bottom: 10px;
  background: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
