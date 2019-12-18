/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import Header from '~/components/Header';
import ListHelpOrders from '~/components/ListHelpOrders';

import { Container, Content, ButtonAddQuestion, List } from './styles';

export default function Questions({ navigation }) {
  const id = useSelector(state => state.user.profile);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function loadingQuestions() {
      const response = await api.get(`students/${id}/help-orders`);

      setQuestions(response.data);
    }
    loadingQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <ButtonAddQuestion
          onPress={() => {
            navigation.navigate('NewQuestion', { id });
          }}
        >
          Novo Pedido de Auxilio
        </ButtonAddQuestion>
        <List
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ListHelpOrders data={item} />}
        />
      </Content>
    </Container>
  );
}

Questions.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <Header />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Checkins');
      }}
    >
      <Icon name="chevron-left" size={20} color="#aaa" />
    </TouchableOpacity>
  ),
});
