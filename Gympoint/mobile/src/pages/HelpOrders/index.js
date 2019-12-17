import React, { useState, useEffect } from 'react';
import { Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';

import logo from '~/assets/logo-header.jpeg';
import { signOut } from '~/store/module/auth/actions';
import ListHelpOrders from '~/components/ListHelpOrders';

import {
  Container,
  Header,
  ImageLogo,
  Content,
  ButtonAddHelpOrders,
  ButtonSignUp,
  List,
} from './styles';

const data = [1, 2];

export default function HelpOrders() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.user.profile);
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadingHelpOrders() {
      const response = await api.get(`students/${id}/help-orders`);

      setHelpOrders(response.data);
    }

    loadingHelpOrders();
  });

  function handleSingUp() {
    dispatch(signOut());
  }

  function handleSubmit() {
    try {
      api.post(`students/${id}/checkins`);
      Alert.alert('Check-in Realizado', 'Aproveite seu treino');
    } catch (e) {
      Alert.alert('Erro ao realizar o Check-in', e.response.data.error);
    }
  }

  return (
    <Container>
      <Header>
        <ImageLogo>
          <Image source={logo} />
        </ImageLogo>
        <ButtonSignUp onPress={handleSingUp}>
          <Icon name="input" size={20} />
        </ButtonSignUp>
      </Header>
      <Content>
        <ButtonAddHelpOrders onPress={handleSubmit}>
          Novo Pedido de Auxilio
        </ButtonAddHelpOrders>
        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ListHelpOrders data={item} />}
        />
      </Content>
    </Container>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
