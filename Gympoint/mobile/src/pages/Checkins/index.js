/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { withNavigationFocus } from 'react-navigation';

import { useSelector } from 'react-redux';
import api from '~/services/api';

import Header from '~/components/Header';
import ListCheckins from '~/components/ListCheckins';

import { Container, Content, ButtonAddCheckin, List } from './styles';

function Checkins({ isFocused }) {
  const id = useSelector(state => state.user.profile);
  const [refresh, setRefresh] = useState(0);
  const [checkins, setCheckins] = useState([]);

  async function loadingCheckins() {
    const response = await api.get(`students/${id}/checkins`);
    setCheckins(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadingCheckins();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, refresh]);

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/checkins`);
      showMessage({
        message: 'Check-in Realizado',
        description: 'Aproveite seu treino',
        type: 'success',
      });
      setRefresh();
    } catch (e) {
      showMessage({
        message: 'Opsss - Não foi possível realizar o check-in',
        description: e.response.data.error,
        type: 'danger',
      });
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
      <FlashMessage position="top" />
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="room" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Checkins);
