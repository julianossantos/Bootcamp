import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-bottom: 15px;
  margin-top: 110px;
  padding: 0px;
  border-radius: 4px;
  background: #fff;

  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  margin-bottom: 30px;
  background: #eee;
`;

export const Form = styled.View`
  margin: 10px;
`;

export const TInput = styled(Input)`
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  align-self: flex-start;
  margin: 10px;
  margin-bottom: 10px;
  color: #000;
  height: 200px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#c9c9c9',
})`
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  font-size: 15px;
  padding: 5px;
  margin-left: 10px;
  background: #fff;
  color: #000;
  height: 200px;
`;

export const SubmitButton = styled(Button)`
  margin: 10px;
  background-color: #ee4d64;
`;
