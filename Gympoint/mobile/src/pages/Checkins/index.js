import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import Header from '~/components/Header';
import ListCheckins from '~/components/ListCheckins';

import { Container, Content, ButtonAddCheckin, List } from './styles';

export default function Checkins() {
  const id = useSelector(state => state.user.profile);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    function loadingCheckins() {
      const response = api.get(`students/${id}/checkins`);

      setCheckins(response.data);
    }

    loadingCheckins();
  });

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/checkins`);
      Alert.alert('Check-in Realizado', 'Aproveite seu treino');
    } catch (e) {
      Alert.alert('Erro ao realizar o Check-in', e.response.data.error);
    }
  }

  return (
    <Container>
      <Header logout />
      <Content>
        <ButtonAddCheckin onPress={handleSubmit}>
          Novo Check-in
        </ButtonAddCheckin>
        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ListCheckins data={item} />}
        />
      </Content>
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="room" size={20} color={tintColor} />
  ),
};
