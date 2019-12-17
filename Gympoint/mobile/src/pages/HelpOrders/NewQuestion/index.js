/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';
import { Container, Content, Form, FormInput, SubmitButton } from './styles';

export default function NewQuestion({ navigation }) {
  const id = navigation.getParam('id');
  const [question, setQuestion] = useState([]);

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/help-orders`, {
        question,
      });
      Alert.alert(
        'Pedido de ajuda enviado',
        'Aguarde o retorno da equipe de atendimento'
      );
      navigation.navigate('Questions');
    } catch (e) {
      Alert.alert('Erro ao enviar o Pedido de Ajuda', e.response.data.error);
    }
  }

  return (
    <Container>
      <Content>
        <Form>
          <FormInput
            multiline
            numberOfLines={20}
            placeholder="Descreva seu questionamento"
            value={question}
            onChangeText={setQuestion}
          />

          <SubmitButton onPress={handleSubmit}>Enviar Pedido</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}

NewQuestion.navigationOptions = ({ navigation }) => ({
  tabBarVisible: false,
  headerTitle: () => <Header logout={false} />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#aaa" />
    </TouchableOpacity>
  ),
});
