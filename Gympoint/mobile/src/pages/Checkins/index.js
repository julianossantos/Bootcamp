import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo-header.jpeg';

import { Container, HeaderLogo, Content, ButtonAddCheckin } from './styles';

export default function Checkins() {
  return (
    <Container>
      <HeaderLogo>
        <Image source={logo} />
      </HeaderLogo>
      <Content>
        <ButtonAddCheckin onPress={() => {}}> Novo Check-in </ButtonAddCheckin>
      </Content>
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="room" size={20} color={tintColor} />
  ),
};
